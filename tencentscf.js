// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const tencentcloud = require("tencentcloud-sdk-nodejs");
const fs = require("fs");
const yaml = require("js-yaml");

process.env.action = 0;
const ScfClient = tencentcloud.scf.v20180416.Client;
const clientConfig = {
  credential: {
    secretId: process.env.TENCENT_SECRET_ID,
    secretKey: process.env.TENCENT_SECRET_KEY
  },
  region: process.env.TENCENT_REGION, // 鍖哄煙鍙傝�冿紝https://cloud.tencent.com/document/product/583/17299
  profile: {
    httpProfile: {
      endpoint: "scf.tencentcloudapi.com"
    }
  }
};
const sleep = ms => new Promise(res => setTimeout(res, ms));

!(async () => {
  const client = new ScfClient(clientConfig);
  let params;
  await client.ListFunctions({}).then(
    async data => {
      let func = data.Functions.filter(
        vo => vo.FunctionName === process.env.TENCENT_FUNCTION_NAME
      );
      const file_buffer = fs.readFileSync("./myfile.zip");
      const contents_in_base64 = file_buffer.toString("base64");
      if (func.length) {
        console.log(`鏇存柊鍑芥暟`);
        // 鏇存柊浠ｇ爜锛屽垹闄ゅ悗閲嶅缓
        params = {
          FunctionName: process.env.TENCENT_FUNCTION_NAME
        };
        await client.DeleteFunction(params).then(
          data => {
            console.log(data);
          },
          err => {
            console.error("error", err);
            process.env.action++;
          }
        );
        await sleep(1000 * 50); // 绛夊緟50绉�
      }

      console.log(`鍒涘缓鍑芥暟`);
      let inputYML = ".github/workflows/deploy_tencent_scf.yml";
      let obj = yaml.load(fs.readFileSync(inputYML, { encoding: "utf-8" }));
      params = {
        Code: {
          ZipFile: contents_in_base64
        },
        FunctionName: process.env.TENCENT_FUNCTION_NAME,
        Runtime: "Nodejs12.16",
        Timeout: 900,
        Environment: {
          Variables: []
        }
      };
      let vars = [];
      for (let key in obj.jobs.build.env) {
        if (process.env[key].length > 0) {
          vars.push(key);
          params.Environment.Variables.push({
            Key: key,
            Value: process.env[key]
          });
        }
      }
      console.log(`鎮ㄤ竴鍏卞～鍐欎簡${vars.length}涓幆澧冨彉閲廯, vars);
      await client.CreateFunction(params).then(
        data => {
          console.log(data);
        },
        err => {
          console.error("error", err);
          process.env.action++;
        }
      );
      await sleep(1000 * 50); // 绛夊緟50绉�
    },
    err => {
      console.error("error", err);
      process.env.action++;
    }
  );

  /* console.log(`鏇存柊鐜鍙橀噺`);
  // 鏇存柊鐜鍙橀噺
  let inputYML = ".github/workflows/deploy_tencent_scf.yml";
  let obj = yaml.load(fs.readFileSync(inputYML, { encoding: "utf-8" }));
  let vars = [];
  for (let key in obj.jobs.build.steps[3].env) {
    if (key !== "PATH" && process.env.hasOwnProperty(key))
      vars.push({
        Key: key,
        Value: process.env[key]
      });
  }
  console.log(`鎮ㄤ竴鍏卞～鍐欎簡${vars.length}涓幆澧冨彉閲廯);
  params = {
    FunctionName: process.env.TENCENT_FUNCTION_NAME,
    Environment: {
      Variables: vars
    }
  };
  await client.UpdateFunctionConfiguration(params).then(
    data => {
      console.log(data);
    },
    err => {
      console.error("error", err);
    }
  );
  let triggers = [];
  params = {
    FunctionName: process.env.TENCENT_FUNCTION_NAME
  };
  await client.ListTriggers(params).then(
    data => {
      console.log(data);
      triggers = data.Triggers;
    },
    err => {
      console.error("error", err);
    }
  );
  for (let vo of triggers) {
    params = {
      FunctionName: process.env.TENCENT_FUNCTION_NAME,
      Type: "timer",
      TriggerName: vo.TriggerName
    };
    await client.DeleteTrigger(params).then(
      data => {
        console.log(data);
      },
      err => {
        console.error("error", err);
      }
    );
  } */

  // 鏇存柊瑙﹀彂鍣�
  console.log(`鍘绘洿鏂拌Е鍙戝櫒`);
  let inputYML = "serverless.yml";
  let obj = yaml.load(fs.readFileSync(inputYML, { encoding: "utf-8" }));
  for (let vo of obj.inputs.events) {
    let param = {
      FunctionName: process.env.TENCENT_FUNCTION_NAME,
      TriggerName: vo.timer.parameters.name,
      Type: "timer",
      TriggerDesc: vo.timer.parameters.cronExpression,
      CustomArgument: vo.timer.parameters.argument,
      Enable: "OPEN"
    };
    await client.CreateTrigger(param).then(
      data => {
        console.log(data);
      },
      err => {
        console.error("error", err);
        process.env.action++;
      }
    );
  }
})()
  .catch(e => console.log(e))
  .finally(async () => {
    // 褰撶幆澧冧负GitHub action鏃跺垱寤篴ction.js鏂囦欢鍒ゆ柇閮ㄧ讲鏄惁杩涜澶辫触閫氱煡
    if (process.env.GIT_HUB_ACTIONS == "true") {
      fs.writeFile(
        "action.js",
        `var action = ` + process.env.action + `;action > 0 ? require("./sendNotify").sendNotify("浜戝嚱鏁伴儴缃插紓甯革紒璇烽噸璇�","鐐瑰嚮閫氱煡锛岀櫥鍏ュ悗鏌ョ湅璇︽儏",{ url: process.env.GIT_HUB_SERVER_URL + "/" + process.env.GIT_HUB_REPOSITORY + "/actions/runs/" + process.env.GIT_HUB_RUN_ID + "?check_suite_focus=true" }): ""`,
        "utf8",
        function (error) {
          if (error) {
            console.log(error);
            return false;
          }
          console.log("鍐欏叆action.js鎴愬姛");
        }
      );
    }
  });

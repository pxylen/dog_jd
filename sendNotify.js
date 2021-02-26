/*
 * @Author: lxk0301 https://gitee.com/lxk0301
 * @Date: 2020-08-19 16:12:40 
 * @Last Modified by: lxk0301
 * @Last Modified time: 2021-2-20 17:52:54
 */
const querystring = require("querystring");
const $ = new Env();
// =======================================寰俊server閰遍�氱煡璁剧疆鍖哄煙===========================================
//姝ゅ濉綘鐢宠鐨凷CKEY.
//(鐜鍙橀噺鍚� PUSH_KEY)
let SCKEY = '';

// =======================================Bark App閫氱煡璁剧疆鍖哄煙===========================================
//姝ゅ濉綘BarkAPP鐨勪俊鎭�(IP/璁惧鐮侊紝渚嬪锛歨ttps://api.day.app/XXXXXXXX)
let BARK_PUSH = '';
//BARK app鎺ㄩ�侀搩澹�,閾冨０鍒楄〃鍘籄PP鏌ョ湅澶嶅埗濉啓
let BARK_SOUND = '';


// =======================================telegram鏈哄櫒浜洪�氱煡璁剧疆鍖哄煙===========================================
//姝ゅ濉綘telegram bot 鐨凾oken锛屼緥濡傦細1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw
//(鐜鍙橀噺鍚� TG_BOT_TOKEN)
let TG_BOT_TOKEN = '';
//姝ゅ濉綘鎺ユ敹閫氱煡娑堟伅鐨則elegram鐢ㄦ埛鐨刬d锛屼緥濡傦細129xxx206
//(鐜鍙橀噺鍚� TG_USER_ID)
let TG_USER_ID = '';

// =======================================閽夐拤鏈哄櫒浜洪�氱煡璁剧疆鍖哄煙===========================================
//姝ゅ濉綘閽夐拤 bot 鐨剋ebhook锛屼緥濡傦細5a544165465465645d0f31dca676e7bd07415asdasd
//(鐜鍙橀噺鍚� DD_BOT_TOKEN)
let DD_BOT_TOKEN = '';
//瀵嗛挜锛屾満鍣ㄤ汉瀹夊叏璁剧疆椤甸潰锛屽姞绛句竴鏍忎笅闈㈡樉绀虹殑SEC寮�澶寸殑瀛楃涓�
let DD_BOT_SECRET = '';

// =======================================浼佷笟寰俊鏈哄櫒浜洪�氱煡璁剧疆鍖哄煙===========================================
//姝ゅ濉綘浼佷笟寰俊鏈哄櫒浜虹殑 webhook(璇﹁鏂囨。 https://work.weixin.qq.com/api/doc/90000/90136/91770)锛屼緥濡傦細693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa
//(鐜鍙橀噺鍚� QYWX_KEY)
let QYWX_KEY = '';

// =======================================浼佷笟寰俊搴旂敤娑堟伅閫氱煡璁剧疆鍖哄煙===========================================
/*
姝ゅ濉綘浼佷笟寰俊搴旂敤娑堟伅鐨勫��(璇﹁鏂囨。 https://work.weixin.qq.com/api/doc/90000/90135/90236)
鐜鍙橀噺鍚� QYWX_AM渚濇濉叆 corpid,corpsecret,touser(娉�:澶氫釜鎴愬憳ID浣跨敤|闅斿紑),agentid,娑堟伅绫诲瀷(閫夊～,涓嶅～榛樿鏂囨湰娑堟伅绫诲瀷)
娉ㄦ剰鐢�,鍙烽殧寮�(鑻辨枃杈撳叆娉曠殑閫楀彿)锛屼緥濡傦細wwcff56746d9adwers,B-791548lnzXBE6_BWfxdf3kSTMJr9vFEPKAbh6WERQ,mingcheng,1000001,2COXgjH2UIfERF2zxrtUOKgQ9XklUqMdGSWLBoW_lSDAdafat
鍙�夋帹閫佹秷鎭被鍨�(鎺ㄨ崘浣跨敤鍥炬枃娑堟伅锛坢pnews锛�):
- 鏂囨湰鍗＄墖娑堟伅: 0 (鏁板瓧闆�)
- 鏂囨湰娑堟伅: 1 (鏁板瓧涓�)
- 鍥炬枃娑堟伅锛坢pnews锛�: 绱犳潗搴撳浘鐗噄d, 鍙煡鐪嬫鏁欑▼(http://note.youdao.com/s/HMiudGkb)鎴栬��(https://note.youdao.com/ynoteshare1/index.html?id=1a0c8aff284ad28cbd011b29b3ad0191&type=note)
*/
let QYWX_AM = '';

// =======================================iGot鑱氬悎鎺ㄩ�侀�氱煡璁剧疆鍖哄煙===========================================
//姝ゅ濉偍iGot鐨勪俊鎭�(鎺ㄩ�乲ey锛屼緥濡傦細https://push.hellyw.com/XXXXXXXX)
let IGOT_PUSH_KEY = '';

// =======================================push+璁剧疆鍖哄煙=======================================
//瀹樻柟鏂囨。锛歨ttps://pushplus.hxtrip.com/
//PUSH_PLUS_TOKEN锛氬井淇℃壂鐮佺櫥褰曞悗涓�瀵逛竴鎺ㄩ�佹垨涓�瀵瑰鎺ㄩ�佷笅闈㈢殑token(鎮ㄧ殑Token)锛屼笉鎻愪緵PUSH_PLUS_USER鍒欓粯璁や负涓�瀵逛竴鎺ㄩ��
//PUSH_PLUS_USER锛� 涓�瀵瑰鎺ㄩ�佺殑鈥滅兢缁勭紪鐮佲�濓紙涓�瀵瑰鎺ㄩ�佷笅闈�->鎮ㄧ殑缇ょ粍(濡傛棤鍒欐柊寤�)->缇ょ粍缂栫爜锛屽鏋滄偍鏄垱寤虹兢缁勪汉銆備篃闇�鐐瑰嚮鈥滄煡鐪嬩簩缁寸爜鈥濇壂鎻忕粦瀹氾紝鍚﹀垯涓嶈兘鎺ュ彈缇ょ粍娑堟伅鎺ㄩ�侊級
let PUSH_PLUS_TOKEN = '';
let PUSH_PLUS_USER = '';

//==========================浜戠鐜鍙橀噺鐨勫垽鏂笌鎺ユ敹=========================
if (process.env.PUSH_KEY) {
  SCKEY = process.env.PUSH_KEY;
}

if (process.env.QQ_SKEY) {
  QQ_SKEY = process.env.QQ_SKEY;
}

if (process.env.QQ_MODE) {
  QQ_MODE = process.env.QQ_MODE;
}


if (process.env.BARK_PUSH) {
  if(process.env.BARK_PUSH.indexOf('https') > -1 || process.env.BARK_PUSH.indexOf('http') > -1) {
    //鍏煎BARK鑷缓鐢ㄦ埛
    BARK_PUSH = process.env.BARK_PUSH
  } else {
    BARK_PUSH = `https://api.day.app/${process.env.BARK_PUSH}`
  }
  if (process.env.BARK_SOUND) {
    BARK_SOUND = process.env.BARK_SOUND
  }
} else {
  if(BARK_PUSH && BARK_PUSH.indexOf('https') === -1 && BARK_PUSH.indexOf('http') === -1) {
    //鍏煎BARK鏈湴鐢ㄦ埛鍙～鍐欒澶囩爜鐨勬儏鍐�
    BARK_PUSH = `https://api.day.app/${BARK_PUSH}`
  }
}
if (process.env.TG_BOT_TOKEN) {
  TG_BOT_TOKEN = process.env.TG_BOT_TOKEN;
}
if (process.env.TG_USER_ID) {
  TG_USER_ID = process.env.TG_USER_ID;
}

if (process.env.DD_BOT_TOKEN) {
  DD_BOT_TOKEN = process.env.DD_BOT_TOKEN;
  if (process.env.DD_BOT_SECRET) {
    DD_BOT_SECRET = process.env.DD_BOT_SECRET;
  }
}

if (process.env.QYWX_KEY) {
  QYWX_KEY = process.env.QYWX_KEY;
}

if (process.env.QYWX_AM) {
  QYWX_AM = process.env.QYWX_AM;
}

if (process.env.IGOT_PUSH_KEY) {
  IGOT_PUSH_KEY = process.env.IGOT_PUSH_KEY
}

if (process.env.PUSH_PLUS_TOKEN) {
  PUSH_PLUS_TOKEN = process.env.PUSH_PLUS_TOKEN;
}
if (process.env.PUSH_PLUS_USER) {
  PUSH_PLUS_USER = process.env.PUSH_PLUS_USER;
}
//==========================浜戠鐜鍙橀噺鐨勫垽鏂笌鎺ユ敹=========================


async function sendNotify(text, desp, params = {}) {
  //鎻愪緵6绉嶉�氱煡
  desp += `\n鏈剼鏈紑婧愬厤璐逛娇鐢� By锛歨ttps://gitee.com/lxk0301/jd_docker`;
  await Promise.all([
    serverNotify(text, desp),//寰俊server閰�
    pushPlusNotify(text, desp)//pushplus(鎺ㄩ�佸姞)
  ])
  //鐢变簬涓婅堪涓ょ寰俊閫氱煡闇�鐐瑰嚮杩涘幓鎵嶈兘鏌ョ湅鍒拌鎯咃紝鏁卼ext(鏍囬鍐呭)鎼哄甫浜嗚处鍙峰簭鍙蜂互鍙婃樀绉颁俊鎭紝鏂逛究涓嶇偣鍑讳篃鍙煡閬撴槸鍝釜浜笢鍝釜娲诲姩
  text = text.match(/.*?(?=\s?-)/g) ? text.match(/.*?(?=\s?-)/g)[0] : text;
  await Promise.all([
    BarkNotify(text, desp, params),//iOS Bark APP
    tgBotNotify(text, desp),//telegram 鏈哄櫒浜�
    ddBotNotify(text, desp),//閽夐拤鏈哄櫒浜�
    qywxBotNotify(text, desp), //浼佷笟寰俊鏈哄櫒浜�
    qywxamNotify(text, desp), //浼佷笟寰俊搴旂敤娑堟伅鎺ㄩ��
    iGotNotify(text, desp, params),//iGot
    //CoolPush(text, desp)//QQ閰锋帹
  ])
}

function serverNotify(text, desp, timeout = 2100) {
  return  new Promise(resolve => {
    if (SCKEY) {
      //寰俊server閰辨帹閫侀�氱煡涓�涓猏n涓嶄細鎹㈣锛岄渶瑕佷袱涓猏n鎵嶈兘鎹㈣锛屾晠鍋氭鏇挎崲
      desp = desp.replace(/[\n\r]/g, '\n\n');
      const options = {
        url: SCKEY.includes('SCT') ? `https://sctapi.ftqq.com/${SCKEY}.send` : `https://sc.ftqq.com/${SCKEY}.send`,
        body: `text=${text}&desp=${desp}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      setTimeout(() => {
        $.post(options, (err, resp, data) => {
          try {
            if (err) {
              console.log('鍙戦�侀�氱煡璋冪敤API澶辫触锛侊紒\n')
              console.log(err);
            } else {
              data = JSON.parse(data);
              //server閰卞拰Server閰甭稵urbo鐗堢殑杩斿洖json鏍煎紡涓嶅お涓�鏍�
              if (data.errno === 0 || data.data.errno === 0 ) {
                console.log('server閰卞彂閫侀�氱煡娑堟伅鎴愬姛\n')
              } else if (data.errno === 1024) {
                // 涓�鍒嗛挓鍐呭彂閫佺浉鍚岀殑鍐呭浼氳Е鍙�
                console.log(`server閰卞彂閫侀�氱煡娑堟伅寮傚父: ${data.errmsg}\n`)
              } else {
                console.log(`server閰卞彂閫侀�氱煡娑堟伅寮傚父\n${JSON.stringify(data)}`)
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve(data);
          }
        })
      }, timeout)
    } else {
      console.log('鎮ㄦ湭鎻愪緵server閰辩殑SCKEY锛屽彇娑堝井淇℃帹閫佹秷鎭�氱煡\n');
      resolve()
    }
  })
}

function CoolPush(text, desp) {
  return  new Promise(resolve => {
    if (QQ_SKEY) {
      let options = {
        url: `https://push.xuthus.cc/${QQ_MODE}/${QQ_SKEY}`,
        headers: {
          'Content-Type': 'application/json'
        }
      }

      // 宸茬煡鏁忔劅璇�
      text = text.replace(/浜眴/g, "璞嗚眴");
      desp = desp.replace(/浜眴/g, "");
      desp = desp.replace(/馃惗/g, "");
      desp = desp.replace(/绾㈠寘/g, "H鍖�");

      switch (QQ_MODE) {
        case "email":
          options.json = {
            "t": text,
            "c": desp,
          };
          break;
        default:
          options.body = `${text}\n\n${desp}`;
      }

      let pushMode = function(t) {
        switch (t){
          case "send":
            return "涓汉";
          case "group":
            return "QQ缇�";
          case "wx":
            return "寰俊";
          case "ww":
            return "浼佷笟寰俊";
          case "email":
            return "閭欢";
          default:
            return "鏈煡鏂瑰紡"
        }
      }

      $.post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log(`鍙戦��${pushMode(QQ_MODE)}閫氱煡璋冪敤API澶辫触锛侊紒\n`)
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.code === 200) {
              console.log(`閰锋帹鍙戦��${pushMode(QQ_MODE)}閫氱煡娑堟伅鎴愬姛\n`)
            } else if (data.code === 400) {
              console.log(`QQ閰锋帹(Cool Push)鍙戦��${pushMode(QQ_MODE)}鎺ㄩ�佸け璐ワ細${data.msg}\n`)
            } else if (data.code === 503) {
              console.log(`QQ閰锋帹鍑洪敊锛�${data.message}锛�${data.data}\n`)
            }else{
              console.log(`閰锋帹鎺ㄩ�佸紓甯�: ${JSON.stringify(data)}`);
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      })
    } else {
      console.log('鎮ㄦ湭鎻愪緵閰锋帹鐨凷KEY锛屽彇娑圦Q鎺ㄩ�佹秷鎭�氱煡\n');
      resolve()
    }
  })
}

function BarkNotify(text, desp, params={}) {
  return  new Promise(resolve => {
    if (BARK_PUSH) {
      const options = {
        url: `${BARK_PUSH}/${encodeURIComponent(text)}/${encodeURIComponent(desp)}?sound=${BARK_SOUND}&${querystring.stringify(params)}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      $.get(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('Bark APP鍙戦�侀�氱煡璋冪敤API澶辫触锛侊紒\n')
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.code === 200) {
              console.log('Bark APP鍙戦�侀�氱煡娑堟伅鎴愬姛\n')
            } else {
              console.log(`${data.message}\n`);
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve();
        }
      })
    } else {
      console.log('鎮ㄦ湭鎻愪緵Bark鐨凙PP鎺ㄩ�丅ARK_PUSH锛屽彇娑圔ark鎺ㄩ�佹秷鎭�氱煡\n');
      resolve()
    }
  })
}

function tgBotNotify(text, desp) {
  return  new Promise(resolve => {
    if (TG_BOT_TOKEN && TG_USER_ID) {
      const options = {
        url: `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
        body: `chat_id=${TG_USER_ID}&text=${text}\n\n${desp}&disable_web_page_preview=true`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      if (process.env.TG_PROXY_HOST && process.env.TG_PROXY_PORT) {
        const tunnel = require("tunnel");
        const agent = {
          https: tunnel.httpsOverHttp({
            proxy: {
              host: process.env.TG_PROXY_HOST,
              port: process.env.TG_PROXY_PORT * 1
            }
          })
        }
        Object.assign(options, { agent })
      }
      $.post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('telegram鍙戦�侀�氱煡娑堟伅澶辫触锛侊紒\n')
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.ok) {
              console.log('Telegram鍙戦�侀�氱煡娑堟伅瀹屾垚銆俓n')
            } else if (data.error_code === 400) {
              console.log('璇蜂富鍔ㄧ粰bot鍙戦�佷竴鏉℃秷鎭苟妫�鏌ユ帴鏀剁敤鎴稩D鏄惁姝ｇ‘銆俓n')
            } else if (data.error_code === 401){
              console.log('Telegram bot token 濉啓閿欒銆俓n')
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      })
    } else {
      console.log('鎮ㄦ湭鎻愪緵telegram鏈哄櫒浜烘帹閫佹墍闇�鐨凾G_BOT_TOKEN鍜孴G_USER_ID锛屽彇娑坱elegram鎺ㄩ�佹秷鎭�氱煡\n');
      resolve()
    }
  })
}
function ddBotNotify(text, desp) {
  return  new Promise(resolve => {
    const options = {
      url: `https://oapi.dingtalk.com/robot/send?access_token=${DD_BOT_TOKEN}`,
      json: {
        "msgtype": "text",
        "text": {
          "content": ` ${text}\n\n${desp}`
        }
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }
    if (DD_BOT_TOKEN && DD_BOT_SECRET) {
      const crypto = require('crypto');
      const dateNow = Date.now();
      const hmac = crypto.createHmac('sha256', DD_BOT_SECRET);
      hmac.update(`${dateNow}\n${DD_BOT_SECRET}`);
      const result = encodeURIComponent(hmac.digest('base64'));
      options.url = `${options.url}&timestamp=${dateNow}&sign=${result}`;
      $.post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('閽夐拤鍙戦�侀�氱煡娑堟伅澶辫触锛侊紒\n')
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.errcode === 0) {
              console.log('閽夐拤鍙戦�侀�氱煡娑堟伅瀹屾垚銆俓n')
            } else {
              console.log(`${data.errmsg}\n`)
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      })
    } else if (DD_BOT_TOKEN) {
      $.post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('閽夐拤鍙戦�侀�氱煡娑堟伅澶辫触锛侊紒\n')
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.errcode === 0) {
              console.log('閽夐拤鍙戦�侀�氱煡娑堟伅瀹屾垚銆俓n')
            } else {
              console.log(`${data.errmsg}\n`)
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      })
    } else {
      console.log('鎮ㄦ湭鎻愪緵閽夐拤鏈哄櫒浜烘帹閫佹墍闇�鐨凞D_BOT_TOKEN鎴栬�匘D_BOT_SECRET锛屽彇娑堥拤閽夋帹閫佹秷鎭�氱煡\n');
      resolve()
    }
  })
}

function qywxBotNotify(text, desp) {
  return new Promise(resolve => {
    const options = {
      url: `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${QYWX_KEY}`,
      json: {
        msgtype: 'text',
        text: {
          content: ` ${text}\n\n${desp}`,
        },
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (QYWX_KEY) {
      $.post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('浼佷笟寰俊鍙戦�侀�氱煡娑堟伅澶辫触锛侊紒\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.errcode === 0) {
              console.log('浼佷笟寰俊鍙戦�侀�氱煡娑堟伅瀹屾垚銆俓n');
            } else {
              console.log(`${data.errmsg}\n`);
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      });
    } else {
      console.log('鎮ㄦ湭鎻愪緵浼佷笟寰俊鏈哄櫒浜烘帹閫佹墍闇�鐨凲YWX_KEY锛屽彇娑堜紒涓氬井淇℃帹閫佹秷鎭�氱煡\n');
      resolve();
    }
  });
}

function ChangeUserId(desp) {
  const QYWX_AM_AY = QYWX_AM.split(',');
  if (QYWX_AM_AY[2]) {
    const userIdTmp = QYWX_AM_AY[2].split("|");
    let userId = "";
    for (let i = 0; i < userIdTmp.length; i++) {
      const count = "璐﹀彿" + (i + 1);
      const count2 = "绛惧埌鍙� " + (i + 1);
      if (desp.match(count) || desp.match(count2)) {
        userId = userIdTmp[i];
      }
    }
    if (!userId) userId = QYWX_AM_AY[2];
    return userId;
  } else {
    return "@all";
  }
}

function qywxamNotify(text, desp) {
  return new Promise(resolve => {
    if (QYWX_AM) {
      const QYWX_AM_AY = QYWX_AM.split(',');
      const options_accesstoken = {
        url: `https://qyapi.weixin.qq.com/cgi-bin/gettoken`,
        json: {
          corpid: `${QYWX_AM_AY[0]}`,
          corpsecret: `${QYWX_AM_AY[1]}`,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      };
      $.post(options_accesstoken, (err, resp, data) => {
        html = desp.replace(/\n/g, "<br/>")
        var json = JSON.parse(data);
        accesstoken = json.access_token;
        let options;

        switch (QYWX_AM_AY[4]) {
          case '0':
            options = {
              msgtype: 'textcard',
              textcard: {
                title: `${text}`,
                description: `${desp}`,
                url: 'https://github.com/lxk0301/jd_scripts',
                btntxt: '鏇村'
              }
            }
            break;

          case '1':
            options = {
              msgtype: 'text',
              text: {
                content: `${text}\n\n${desp}`
              }
            }
            break;

          default:
            options = {
              msgtype: 'mpnews',
              mpnews: {
                articles: [
                  {
                    title: `${text}`,
                    thumb_media_id: `${QYWX_AM_AY[4]}`,
                    author: `鏅鸿兘鍔╂墜`,
                    content_source_url: ``,
                    content: `${html}`,
                    digest: `${desp}`
                  }
                ]
              }
            }
        };
        if (!QYWX_AM_AY[4]) {
          //濡備笉鎻愪緵绗洓涓弬鏁�,鍒欓粯璁よ繘琛屾枃鏈秷鎭被鍨嬫帹閫�
          options = {
            msgtype: 'text',
            text: {
              content: `${text}\n\n${desp}`
            }
          }
        }
        options = {
          url: `https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=${accesstoken}`,
          json: {
            touser: `${ChangeUserId(desp)}`,
            agentid: `${QYWX_AM_AY[3]}`,
            safe: '0',
            ...options
          },
          headers: {
            'Content-Type': 'application/json',
          },
        }

        $.post(options, (err, resp, data) => {
          try {
            if (err) {
              console.log('鎴愬憳ID:' + ChangeUserId(desp) + '浼佷笟寰俊搴旂敤娑堟伅鍙戦�侀�氱煡娑堟伅澶辫触锛侊紒\n');
              console.log(err);
            } else {
              data = JSON.parse(data);
              if (data.errcode === 0) {
                console.log('鎴愬憳ID:' + ChangeUserId(desp) + '浼佷笟寰俊搴旂敤娑堟伅鍙戦�侀�氱煡娑堟伅瀹屾垚銆俓n');
              } else {
                console.log(`${data.errmsg}\n`);
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve(data);
          }
        });
      });
    } else {
      console.log('鎮ㄦ湭鎻愪緵浼佷笟寰俊搴旂敤娑堟伅鎺ㄩ�佹墍闇�鐨凲YWX_AM锛屽彇娑堜紒涓氬井淇″簲鐢ㄦ秷鎭帹閫佹秷鎭�氱煡\n');
      resolve();
    }
  });
}

function iGotNotify(text, desp, params={}){
  return  new Promise(resolve => {
    if (IGOT_PUSH_KEY) {
      // 鏍￠獙浼犲叆鐨処GOT_PUSH_KEY鏄惁鏈夋晥
      const IGOT_PUSH_KEY_REGX = new RegExp("^[a-zA-Z0-9]{24}$")
      if(!IGOT_PUSH_KEY_REGX.test(IGOT_PUSH_KEY)) {
        console.log('鎮ㄦ墍鎻愪緵鐨処GOT_PUSH_KEY鏃犳晥\n')
        resolve()
        return 
      }
      const options = {
        url: `https://push.hellyw.com/${IGOT_PUSH_KEY.toLowerCase()}`,
        body: `title=${text}&content=${desp}&${querystring.stringify(params)}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      $.post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('鍙戦�侀�氱煡璋冪敤API澶辫触锛侊紒\n')
            console.log(err);
          } else {
            if(typeof data === 'string') data = JSON.parse(data);
            if (data.ret === 0) {
              console.log('iGot鍙戦�侀�氱煡娑堟伅鎴愬姛\n')
            } else {
              console.log(`iGot鍙戦�侀�氱煡娑堟伅澶辫触锛�${data.errMsg}\n`)
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      })
    } else {
      console.log('鎮ㄦ湭鎻愪緵iGot鐨勬帹閫両GOT_PUSH_KEY锛屽彇娑坕Got鎺ㄩ�佹秷鎭�氱煡\n');
      resolve()
    }
  })
}

function pushPlusNotify(text, desp) {
  return new Promise(resolve => {
    if (PUSH_PLUS_TOKEN) {
      desp = desp.replace(/[\n\r]/g, '<br>'); // 榛樿涓篽tml, 涓嶆敮鎸乸laintext
      const body = {
        token: `${PUSH_PLUS_TOKEN}`,
        title: `${text}`,
        content:`${desp}`,
        topic: `${PUSH_PLUS_USER}`
      };
      const options = {
        url: `https://pushplus.hxtrip.com/send`,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': ' application/json'
        }
      }
      $.post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log(`push+鍙戦��${PUSH_PLUS_USER ? '涓�瀵瑰' : '涓�瀵逛竴'}閫氱煡娑堟伅澶辫触锛侊紒\n`)
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.code === 200) {
              console.log(`push+鍙戦��${PUSH_PLUS_USER ? '涓�瀵瑰' : '涓�瀵逛竴'}閫氱煡娑堟伅瀹屾垚銆俓n`)
            } else {
              console.log(`push+鍙戦��${PUSH_PLUS_USER ? '涓�瀵瑰' : '涓�瀵逛竴'}閫氱煡娑堟伅澶辫触锛�${data.msg}\n`)
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      })
    } else {
      console.log('鎮ㄦ湭鎻愪緵push+鎺ㄩ�佹墍闇�鐨凱USH_PLUS_TOKEN锛屽彇娑坧ush+鎺ㄩ�佹秷鎭�氱煡\n');
      resolve()
    }
  })
}

module.exports = {
  sendNotify,
  BARK_PUSH
}
// prettier-ignore
function Env(t,s){return new class{constructor(t,s){this.name=t,this.data=null,this.dataFile="box.dat",this.logs=[],this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,s),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}getScript(t){return new Promise(s=>{$.get({url:t},(t,e,i)=>s(i))})}runScript(t,s){return new Promise(e=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let o=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");o=o?1*o:20,o=s&&s.timeout?s.timeout:o;const[h,a]=i.split("@"),r={url:`http://${a}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:o},headers:{"X-Key":h,Accept:"*/*"}};$.post(r,(t,s,i)=>e(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),s=this.path.resolve(process.cwd(),this.dataFile),e=this.fs.existsSync(t),i=!e&&this.fs.existsSync(s);if(!e&&!i)return{};{const i=e?t:s;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),s=this.path.resolve(process.cwd(),this.dataFile),e=this.fs.existsSync(t),i=!e&&this.fs.existsSync(s),o=JSON.stringify(this.data);e?this.fs.writeFileSync(t,o):i?this.fs.writeFileSync(s,o):this.fs.writeFileSync(t,o)}}lodash_get(t,s,e){const i=s.replace(/\[(\d+)\]/g,".$1").split(".");let o=t;for(const t of i)if(o=Object(o)[t],void 0===o)return e;return o}lodash_set(t,s,e){return Object(t)!==t?t:(Array.isArray(s)||(s=s.toString().match(/[^.[\]]+/g)||[]),s.slice(0,-1).reduce((t,e,i)=>Object(t[e])===t[e]?t[e]:t[e]=Math.abs(s[i+1])>>0==+s[i+1]?[]:{},t)[s[s.length-1]]=e,t)}getdata(t){let s=this.getval(t);if(/^@/.test(t)){const[,e,i]=/^@(.*?)\.(.*?)$/.exec(t),o=e?this.getval(e):"";if(o)try{const t=JSON.parse(o);s=t?this.lodash_get(t,i,""):s}catch(t){s=""}}return s}setdata(t,s){let e=!1;if(/^@/.test(s)){const[,i,o]=/^@(.*?)\.(.*?)$/.exec(s),h=this.getval(i),a=i?"null"===h?null:h||"{}":"{}";try{const s=JSON.parse(a);this.lodash_set(s,o,t),e=this.setval(JSON.stringify(s),i)}catch(s){const h={};this.lodash_set(h,o,t),e=this.setval(JSON.stringify(h),i)}}else e=$.setval(t,s);return e}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,s){return this.isSurge()||this.isLoon()?$persistentStore.write(t,s):this.isQuanX()?$prefs.setValueForKey(t,s):this.isNode()?(this.data=this.loaddata(),this.data[s]=t,this.writedata(),!0):this.data&&this.data[s]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,s=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?$httpClient.get(t,(t,e,i)=>{!t&&e&&(e.body=i,e.statusCode=e.status),s(t,e,i)}):this.isQuanX()?$task.fetch(t).then(t=>{const{statusCode:e,statusCode:i,headers:o,body:h}=t;s(null,{status:e,statusCode:i,headers:o,body:h},h)},t=>s(t)):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,s)=>{try{const e=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(e,null),s.cookieJar=this.ckjar}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:e,statusCode:i,headers:o,body:h}=t;s(null,{status:e,statusCode:i,headers:o,body:h},h)},t=>s(t)))}post(t,s=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),delete t.headers["Content-Length"],this.isSurge()||this.isLoon())$httpClient.post(t,(t,e,i)=>{!t&&e&&(e.body=i,e.statusCode=e.status),s(t,e,i)});else if(this.isQuanX())t.method="POST",$task.fetch(t).then(t=>{const{statusCode:e,statusCode:i,headers:o,body:h}=t;s(null,{status:e,statusCode:i,headers:o,body:h},h)},t=>s(t));else if(this.isNode()){this.initGotEnv(t);const{url:e,...i}=t;this.got.post(e,i).then(t=>{const{statusCode:e,statusCode:i,headers:o,body:h}=t;s(null,{status:e,statusCode:i,headers:o,body:h},h)},t=>s(t))}}time(t){let s={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in s)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?s[e]:("00"+s[e]).substr((""+s[e]).length)));return t}msg(s=t,e="",i="",o){const h=t=>!t||!this.isLoon()&&this.isSurge()?t:"string"==typeof t?this.isLoon()?t:this.isQuanX()?{"open-url":t}:void 0:"object"==typeof t&&(t["open-url"]||t["media-url"])?this.isLoon()?t["open-url"]:this.isQuanX()?t:void 0:void 0;$.isMute||(this.isSurge()||this.isLoon()?$notification.post(s,e,i,h(o)):this.isQuanX()&&$notify(s,e,i,h(o))),this.logs.push("","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="),this.logs.push(s),e&&this.logs.push(e),i&&this.logs.push(i)}log(...t){t.length>0?this.logs=[...this.logs,...t]:console.log(this.logs.join(this.logSeparator))}logErr(t,s){const e=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();e?$.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):$.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(s=>setTimeout(s,t))}done(t={}){const s=(new Date).getTime(),e=(s-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${e} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,s)}

/*
此文件为Node.js专用。其他用户请忽略
 */
let CookieJDs = [
'pt_key=AAJgoJ9zADD7JtaaVwOV2ibE2kHqGhtuU3W45EL50q4mWqRjkWNoUz5Jq0saWbJ83BOgYeCzKps; pt_pin=30335729-763446;',
'pt_key=AAJgk8RvADAzXAceZ80ln7PRObMXbuO9lyjW7Ft_qdk2Vo-gHC0-qNxgfm9rkP-nx-OIMA1keOE; pt_pin=jd_4020c6ffa8304;',
'pt_key=AAJgk-QDADCv-UiOvVzHo4r0D4Sxyx1-wWLzLa85fSxGgBPCgMAB2dIuv9jH23Cki1B7a-aKGro; pt_pin=jd_760b6e893cc19;',
'pt_key=AAJgoKCkADBkV9C48tHfalCKTa16RabHvz-jsRwOpUlwghNt3aGUGCgp8rgxvPV5QjAytApl73g; pt_pin=jd_5a18a06d61f23;',
'pt_key=AAJgjRMhADDqaFc4GWbfsyMrcvHFcgOqfdRoNKr20g28VITx7Ohoewddfwraz3ipu-kZ6-1L5Sw; pt_pin=jd_5763617407767;',
'pt_key=AAJgk8VfADA5zK7_jbKBPAFN8kY0dJDs3aEr_oqdRqdk4PyswrxUiQFfc_8wvZXuevya9j1IVzw; pt_pin=jd_vrbCVTRTVXuJ;',
'pt_key=AAJgmJcxADCfiG8T9d9eoROzAl7jred-TjcamfXDirwXprNwGf4N6y4h_15GyUkZvPFcAp5mOjE; pt_pin=18696160069_p;',
'pt_key=AAJgm1XWADD1Ly086Y_k5Lpbdsm4pA0tpUN49Gqde4ucRvbewSqw6LxVc7QAmHbyfznBNH7VV1o; pt_pin=jd_61ace03af247c;'
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GIT_HUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => !!item))]
console.log(`\n====================共${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
for (let i = 0; i < CookieJDs.length; i++) {
  if (!CookieJDs[i].match(/pt_pin=(.+?);/) || !CookieJDs[i].match(/pt_key=(.+?);/)) console.log(`\n提示:京东cookie 【${CookieJDs[i]}】填写不规范,可能会影响部分脚本正常使用。正确格式为: pt_key=xxx;pt_pin=xxx;（分号;不可少）\n`);
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}

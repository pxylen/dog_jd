/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
'pt_key=AAJgRN0TADD0EpWngTpvD_jb7ciLaL-8aiUtenHQPFzNwdIRGckXnREDFoSD1rvNzro0I3YRf7E;pt_pin=30335729-763446;',
'pt_key=AAJgPsdTADD2WOILVUxm8MDtQaXN99a8__-mVtk1e7CIdibZNoKTCkRs-fUZagoFjvmI-Tn_wMQ; pt_pin=jd_4020c6ffa8304;',
'pt_key=AAJgQvnBADCGLgSnr9wM9k5ervM2hlk4tU_dFdMW6wZKMYkC9fd639HGLSfeiTm12KKZL34REs4; pt_pin=jd_760b6e893cc19;',
'pt_key=AAJgPPkoADDaW9MRQ4ExdQRZHFJ-nUA-MMsqXo8r-x5SwTSdRt1icaHuBsP7ysKwCFaR240kA-c;pt_pin=jd_5a18a06d61f23;',
'pt_key=AAJgPeYSADD6bS9ogssVTdMX6tklW5wEHW60YtTmZXoz0h7ukPfDXjiluq59ovNkVzPcTYsBX_o; pt_pin=jd_5763617407767;',
'pt_key=AAJgP0_lADD78_y6TSk5jzFeMk2vz8W26oGGFo0Kk4ewMMrzzFeoF9t1lVzpgwK8gI_YuRnwEoc; pt_pin=jd_vrbCVTRTVXuJ;',
'pt_key=AAJgQJkgADA70jWUdnVkM6BxOWsQQK4WfYcEjxav2-mYj_JHXr0u6tgetzmXWCwIJQ1ZFvwU1Iw; pt_pin=18696160069_p;',
'pt_key=AAJgTC82ADDwjl9697IMRiA06V79pvjIeGISd-yNzREWn1LDRC9jt62g0MHUedWcPf4IgaUhEkQ; pt_pin=jd_61ace03af247c;'
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

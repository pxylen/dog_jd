/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  'pt_key=app_openAAJf9a0HADBb0JfcTNiKJVhIDlGWpG3gsqCNioU5U70k5jcLAVVk1QXH4pEaP-U0F3h8_XPRXrA; pt_pin=30335729-763446;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=app_openAAJgNuRkADCsh79f5Ocv77dNTzKsXeK4CfYsAIbKetUA0DI1EGlZxIjJuKTUWfAM5xnVW4_ZVB4; pt_pin=jd_4020c6ffa8304;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_key=app_openAAJgN0gvADDe5fYpeqwskzH64whsg7c5qsyeVrooUzxgVYjelJfmB29UjqyG9n6AzOIdnN2umK0; pt_pin=jd_760b6e893cc19;',
  'pt_key=app_openAAJgDnoxADDmX6e79al7bzdLycd5jKMkAZpuffcBaA69mRhHtKKHB5qaZKk3qpjlDmMhU3MSWMU; pt_pin=jd_5a18a06d61f23;'
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
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
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}

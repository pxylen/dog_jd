/*
姝ゆ枃浠朵负Node.js涓撶敤銆傚叾浠栫敤鎴疯蹇界暐
 */
//姝ゅ濉啓浜笢璐﹀彿cookie銆�
let CookieJDs = [
  '',//璐﹀彿涓�ck,渚�:pt_key=XXX;pt_pin=XXX;
  '',//璐﹀彿浜宑k,渚�:pt_key=XXX;pt_pin=XXX;濡傛湁鏇村,渚濇绫绘帹
]
// 鍒ゆ柇鐜鍙橀噺閲岄潰鏄惁鏈変含涓渃k
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`鎮ㄧ殑cookie閫夋嫨鐨勬槸鐢�&闅斿紑\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`鎮ㄧ殑cookie閫夋嫨鐨勬槸鐢ㄦ崲琛岄殧寮�\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GIT_HUB')>-1) {
  console.log(`璇峰嬁浣跨敤github action杩愯姝よ剼鏈�,鏃犺浣犳槸浠庝綘鑷繁鐨勭搴撹繕鏄叾浠栧摢閲屾媺鍙栫殑婧愪唬鐮侊紝閮戒細瀵艰嚧鎴戣灏佸彿\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('鎻愰啋', `璇峰嬁浣跨敤github action銆佹互鐢╣ithub璧勬簮浼氬皝鎴戜粨搴撲互鍙婅处鍙穈)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================鍏辨湁${CookieJDs.length}涓含涓滆处鍙稢ookie=========\n`);
console.log(`==================鑴氭湰鎵ц- 鍖椾含鏃堕棿(UTC+8)锛�${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}

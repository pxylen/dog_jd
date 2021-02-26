/*
浜枩鍐滃満 Tokens
姝ゆ枃浠朵负Node.js涓撶敤銆傚叾浠栫敤鎴疯蹇界暐
鏀寔浜笢N涓处鍙�
 */
// 姣忎釜璐﹀彿 token 鏄竴涓� json锛岀ず渚嬪涓�
// {"farm_jstoken":"749a90f871adsfads8ffda7bf3b1576760","timestamp":"1610165423873","phoneid":"42c7e3dadfadsfdsaac-18f0e4f4a0cf"}
let JxncTokens = [
  '',//璐﹀彿涓�鐨勪含鍠滃啘鍦簍oken
  '',//璐﹀彿浜岀殑浜枩鍐滃満token
]
// 鍒ゆ柇github action閲岄潰鏄惁鏈変含鍠滃啘鍦� token 
if (process.env.JXNCTOKENS) {
  if (process.env.JXNCTOKENS.indexOf('&') > -1) {
    console.log(`鎮ㄧ殑浜枩鍐滃満 token 閫夋嫨鐨勬槸鐢�&闅斿紑\n`)
    JxncTokens = process.env.JXNCTOKENS.split('&');
  } else if (process.env.JXNCTOKENS.indexOf('\n') > -1) {
    console.log(`鎮ㄧ殑浜枩鍐滃満 token 閫夋嫨鐨勬槸鐢ㄦ崲琛岄殧寮�\n`)
    JxncTokens = process.env.JXNCTOKENS.split('\n');
  } else {
    JxncTokens = process.env.JXNCTOKENS.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`鐢变簬鎮ㄧ幆澧冨彉閲忛噷闈㈡湭鎻愪緵 tokens锛屽綋绉嶆 APP 绉嶅瓙鏃讹紝灏嗕笉鑳芥甯歌繘琛屼换鍔★紝璇锋彁渚� token 鎴� 绉嶆闈� APP 绉嶅瓙锛乣)
}
for (let i = 0; i < JxncTokens.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JXNCTOKEN' + index] = JxncTokens[i];
}

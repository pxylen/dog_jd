/*
浜枩鍐滃満鍔╁姏鐮�
姝ゅ姪鍔涚爜瑕佹眰绉嶅瓙 active 鐩稿悓鎵嶈兘鍔╁姏锛屽涓处鍙风殑璇濆彲浠ョ妞嶅悓鏍风殑绉嶅瓙锛屽鏋滅瀛愪笉鍚岀殑璇濓紝浼氳嚜鍔ㄨ烦杩囦娇鐢ㄤ簯绔姪鍔�
姝ゆ枃浠朵负Node.js涓撶敤銆傚叾浠栫敤鎴疯蹇界暐
鏀寔浜笢N涓处鍙�
 */
//浜戞湇鍔″櫒鑵捐浜戝嚱鏁扮瓑NOde.js鐢ㄦ埛鍦ㄦ澶勫～鍐欎含浜枩鍐滃満鐨勫ソ鍙嬬爜銆�
// 鍚屼竴涓含涓滆处鍙风殑濂藉弸鍔╁姏鐮佺敤@绗﹀彿闅斿紑,涓嶅悓浜笢璐﹀彿涔嬮棿鐢�&绗﹀彿鎴栬�呮崲琛岄殧寮�,涓嬮潰缁欎竴涓ず渚�
// 濡�: 浜笢璐﹀彿1鐨剆hareCode1@浜笢璐﹀彿1鐨剆hareCode2&浜笢璐﹀彿2鐨剆hareCode1@浜笢璐﹀彿2鐨剆hareCode2
// 娉ㄦ剰锛氫含鍠滃啘鍦� 绉嶆绉嶅瓙鍙戠敓鍙樺寲鐨勬椂鍊欙紝浜掑姪鐮佷篃浼氬彉锛侊紒
// 娉ㄦ剰锛氫含鍠滃啘鍦� 绉嶆绉嶅瓙鍙戠敓鍙樺寲鐨勬椂鍊欙紝浜掑姪鐮佷篃浼氬彉锛侊紒
// 娉ㄦ剰锛氫含鍠滃啘鍦� 绉嶆绉嶅瓙鍙戠敓鍙樺寲鐨勬椂鍊欙紝浜掑姪鐮佷篃浼氬彉锛侊紒
// 姣忎釜璐﹀彿 shareCdoe 鏄竴涓� json锛岀ず渚嬪涓�
// {"smp":"22bdadsfaadsfadse8a","active":"jdnc_1_btorange210113_2","joinnum":"1"}
let JxncShareCodes = [
  '',//璐﹀彿涓�鐨勫ソ鍙媠hareCode,涓嶅悓濂藉弸涓棿鐢ˊ绗﹀彿闅斿紑
  '',//璐﹀彿浜岀殑濂藉弸shareCode锛屼笉鍚屽ソ鍙嬩腑闂寸敤@绗﹀彿闅斿紑
]
// 鍒ゆ柇github action閲岄潰鏄惁鏈変含鍠滃啘鍦哄姪鍔涚爜
if (process.env.JXNC_SHARECODES) {
  if (process.env.JXNC_SHARECODES.indexOf('&') > -1) {
    console.log(`鎮ㄧ殑浜枩鍐滃満鍔╁姏鐮侀�夋嫨鐨勬槸鐢�&闅斿紑\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('&');
  } else if (process.env.JXNC_SHARECODES.indexOf('\n') > -1) {
    console.log(`鎮ㄧ殑浜枩鍐滃満鍔╁姏鐮侀�夋嫨鐨勬槸鐢ㄦ崲琛岄殧寮�\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('\n');
  } else {
    JxncShareCodes = process.env.JXNC_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  // console.log(`鐢变簬鎮╯ecret閲岄潰鏈彁渚涘姪鍔涚爜锛屾晠姝ゅ杩愯灏嗕細缁欒剼鏈唴缃殑鐮佽繘琛屽姪鍔涳紝璇风煡鏅擄紒`)
}
for (let i = 0; i < JxncShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JxncShareCode' + index] = JxncShareCodes[i];
}

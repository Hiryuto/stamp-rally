window.addEventListener('DOMContentLoaded', () => {
  detectIncognito().then((result) => {
    if (result.isPrivate ) {
      if (result.browserName == "Safari"){
        alert("スタンプが正常に記録できない可能性があります。\nカメラアプリから読み取ってください。");
      }else if (result.browserName == "Chrome"){
        alert("スタンプが正常に記録できない可能性があります。\nブラウザを変更して再度試してください");
      }else{
        alert("サポート対象外のブラウザです。\nブラウザを変更して再度試してください");
      }
    }
  });
});

(async () => {
  try {
    let serverTime = null;
    const request = new XMLHttpRequest();

    const date = await new Promise((resolve, reject) => {
      request.open("HEAD", window.location.href, true); // ヘッダ情報だけ取得するのでHEAD指定。
      request.send(null); // 送信データないためnull指定。
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status !== 0) {
          serverTime = new Date(request.getResponseHeader("Date"));
          return resolve(serverTime);
        } else if (request.readyState === 4 && request.status === 0) {
          return reject("通信に失敗しました");
        }
      };
    });
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
      loadingElement.hidden = true;
    }
    console.log();

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("debug")) {
    } else if (serverTime.getDate() < 21) {
      noDate();
    } else if (serverTime.getHours() >= 10) {
    } else {
      noDate();
    }
  } catch (error) {
    console.error(error);
    document.getElementById("main").innerHTML = `<h1 id="title"></h1>`;
    document.getElementById("title").textContent = "時刻の取得に失敗しました。";
    document.getElementById("title").classList.add("timeerror");
    const registerElement = document.getElementById("register");
    if (registerElement) {
      registerElement.hidden = true;
    }
  }
})();
function noDate() {
  document.getElementById("main").innerHTML = `<h1 id="title"></h1>`;
  // 条件を満たさない場合の処理をここに記述
  document.getElementById(
    "title"
  ).innerHTML = `このスタンプカードは、<br>現在、公開期間外です。<br><br>開始時刻の午前10時になってから改めてQRコードを読み込んでください。`;
  //classを追加
  document.getElementById("title").classList.add("timeerror");
  const registerElement = document.getElementById("register");
  if (registerElement) {
    registerElement.hidden = true;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // .menu-itemがクリックされた時の処理を全ての.menu-itemに設定
  document.querySelectorAll(".menu-item").forEach(function (item) {
    item.addEventListener("click", function () {
      // ここで何かしらのアクションを実行。例えば、クリックされた項目のテキストをログ出力。
      switch (this.querySelector(".text").textContent) {
        case "交換":
          window.location = "exchange.html";
          break;
        case "ホーム":
          window.location = "index.html";
        default:
          break;
      }
    });
  });
});

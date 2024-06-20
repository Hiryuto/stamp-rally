//1つ目のurlクエリを取得
const urlParams = new URLSearchParams(window.location.search);
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
      register()
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
console.log(localStorage.getItem(urlParams.get("register")));
function register() {
  //1つ目のurlクエリがregisterだった場合
  if (urlParams.has("register")) {
    //localStorageにitemをkeyにしてtrueになっていないかを検索
    if (localStorage.getItem("stamp-" + urlParams.get("register")) == "true") {
      alert("すでに取得済みです");
      window.location.href = "./index.html";
    }
    //item.jsonで検索する
    fetch("item.json?v=4")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        //jsonからitemを取得
        const item = json.stamp[urlParams.get("register")];
        //存在確認
        if (item) {
          //存在する場合
          document.getElementById("img").src = item.image;
          document.getElementById("title").textContent = item.name;
          document.getElementById("description").textContent = item.description;
          //localStorageにitemをkeyにしてtrueを保存
          document.getElementById("register").hidden = false;
        } else {
          //存在しない場合
          document.getElementById("title").textContent =
            "存在しないスタンプです";
          document.getElementById("description").textContent =
            "下のメニューからホームに戻ってください";
          document.getElementById("register").hidden = true;
        }
      });
  } else {
    //存在しない場合
    document.getElementById("title").textContent = "存在しないスタンプです";
    document.getElementById("description").textContent =
      "以下のボタンからホームに戻ってください";
    document.getElementById("register").hidden = true;
  }
}
//id="register"をクリックした場合
document.getElementById("register").addEventListener("click", function () {
  const item = urlParams.get("register");
  localStorage.setItem("stamp-" + item, true);
  localStorage.setItem(
    "stamp-count",
    Number(localStorage.getItem("stamp-count")) + 1
  );
  //localStorageに保存されたかを確認する
  if (localStorage.getItem("stamp-" + item)) {
    alert("スタンプを取得しました");
    //register.htmlに移動
    window.location.href = "./index.html";
  } else {
    alert("もう一度試してください");
  }
});

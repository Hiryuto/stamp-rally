var initialMouse1 = 0;
var initialMouse2 = 0;
var slideMovementTotal1 = 0;
var slideMovementTotal2 = 0;
var mouseIsDown1 = false;
var mouseIsDown2 = false;
var slider1 = $("#slider1");
var slider2 = $("#slider2");

// item.jsonを読み込む

//ページをロードしたとき
$(document).ready(function () {
  $.getJSON("item.json?v=4", function (data) {
    // "exchangeable_stamp_count"をttampCountに代入する
    stampCount1 = data["exchangeable1_stamp_count"];
    stampCount2 = data["exchangeable2_stamp_count"];
  }).done(function () {
    // $.getJSONの処理が終わったあとに実行されるコードを書く場所
    if (stampCount1 == null || stampCount2 == null) {
      console.log(stampCount1);
      alert("内部エラーです");
      return;
    }
    if (stampCount2 == 0 || stampCount1 == 0) {
      console.log(stampCount2);
      alert("内部エラーです");
      return;
    }
    $("#stamp-count1").text(
      "交換に必要なスタンプの数:" +
        (localStorage.getItem("stamp-count") || 0) +
        "/" +
        stampCount1
    );
    $("#stamp-count2").text(
      "交換に必要なスタンプの数:" +
        (localStorage.getItem("stamp-count") || 0) +
        "/" +
        stampCount2
    );
    if (
      localStorage.getItem("stamp-count") == null ||
      localStorage.getItem("stamp-count") < stampCount1
    ) {
      $("#locker1").text("交換に必要なスタンプの数を集めていません");
      slider1.addClass("unlocked");
    } else {
      if (localStorage.getItem("exchange1")) {
        $("#locker1").text("交換済み");
        slider1.addClass("unlocked");
      }
    }
    if (
      localStorage.getItem("stamp-count") == null ||
      localStorage.getItem("stamp-count") < stampCount2
    ) {
      $("#locker2").text("交換に必要なスタンプの数を集めていません");
      slider2.addClass("unlocked");
    } else {
      if (localStorage.getItem("exchange2")) {
        $("#locker2").text("交換済み");
        slider2.addClass("unlocked");
      }
    }
  });
  document.getElementById("exchange-list").hidden = false;
  document.getElementById("exchange-loading").hidden = true;
});

slider1.on("mousedown touchstart", function (event) {
  mouseIsDown1 = true;
  slideMovementTotal1 = $("#button-background1").width() - $(this).width() + 10;
  initialMouse1 = event.clientX || event.originalEvent.touches[0].pageX;
});

$(document.body, "#slider1").on("mouseup touchend", function (event) {
  if (!mouseIsDown1) return;
  mouseIsDown1 = false;
  var currentMouse = event.clientX || event.changedTouches[0].pageX;
  var relativeMouse = currentMouse - initialMouse1;

  if (relativeMouse < slideMovementTotal1) {
    $(".slide-text1").fadeTo(300, 1);
    slider1.animate(
      {
        left: "-10px",
      },
      300
    );
    return;
  }
  if (!slider1.hasClass("unlocked")) {
    if (confirm("はいを押すことで交換します\nよろしいですか？")) {
      if (
        confirm(
          "スタッフに提示していない場合は交換できません\n本当に交換しますか？"
        )
      ) {
        slider1.addClass("unlocked");
        $("#locker1").text("交換済み");
        localStorage.setItem("exchange1", true);
      } else {
        not1();
      }
    } else {
      not1();
    }
  }
});
function not1() {
  $(".slide-text1").fadeTo(300, 1);
  slider1.animate(
    {
      left: "-10px",
    },
    300
  );
}
$(document.body).on("mousemove touchmove", function (event) {
  if (!mouseIsDown1) return;

  var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
  var relativeMouse = currentMouse - initialMouse1;
  var slidePercent = 1 - relativeMouse / slideMovementTotal1;

  $(".slide-text1").fadeTo(0, slidePercent);

  if (relativeMouse <= 0) {
    slider1.css({ left: "-10px" });
    return;
  }
  if (relativeMouse >= slideMovementTotal1 + 10) {
    slider1.css({ left: slideMovementTotal1 + "px" });
    return;
  }
  slider1.css({ left: relativeMouse - 10 });
});
slider2.on("mousedown touchstart", function (event) {
  mouseIsDown2 = true;
  slideMovementTotal2 = $("#button-background2").width() - $(this).width() + 10;
  initialMouse2 = event.clientX || event.originalEvent.touches[0].pageX;
});

$(document.body, "#slider2").on("mouseup touchend", function (event) {
  if (!mouseIsDown2) return;
  mouseIsDown2 = false;
  var currentMouse = event.clientX || event.changedTouches[0].pageX;
  var relativeMouse = currentMouse - initialMouse2;

  if (relativeMouse < slideMovementTotal2) {
    $(".slide-text2").fadeTo(300, 1);
    slider2.animate(
      {
        left: "-10px",
      },
      300
    );
    return;
  }
  if (!slider2.hasClass("unlocked")) {
    if (confirm("はいを押すことで交換します\nよろしいですか？")) {
      if (
        confirm(
          "スタッフに提示していない場合は交換できません\n本当に交換しますか？"
        )
      ) {
        slider2.addClass("unlocked");
        $("#locker2").text("交換済み");
        localStorage.setItem("exchange2", true);
      } else {
        not2();
      }
    } else {
      not2();
    }
  }
});
function not2() {
  $(".slide-text2").fadeTo(300, 1);
  slider2.animate(
    {
      left: "-10px",
    },
    300
  );
}
$(document.body).on("mousemove touchmove", function (event) {
  if (!mouseIsDown2) return;

  var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
  var relativeMouse = currentMouse - initialMouse2;
  var slidePercent = 1 - relativeMouse / slideMovementTotal2;

  $(".slide-text2").fadeTo(0, slidePercent);

  if (relativeMouse <= 0) {
    slider2.css({ left: "-10px" });
    return;
  }
  if (relativeMouse >= slideMovementTotal2 + 10) {
    slider2.css({ left: slideMovementTotal2 + "px" });
    return;
  }
  slider2.css({ left: relativeMouse - 10 });
});

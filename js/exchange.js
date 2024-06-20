var _0x17a01c = _0x4cb0;
(function (_0xb18f49, _0x59fef7) {
  var _0x313e2b = _0x4cb0,
    _0x3fe570 = _0xb18f49();
  while (!![]) {
    try {
      var _0x2b0d6a =
        (parseInt(_0x313e2b(0x22b)) / 0x1) *
          (parseInt(_0x313e2b(0x20d)) / 0x2) +
        parseInt(_0x313e2b(0x226)) / 0x3 +
        (parseInt(_0x313e2b(0x222)) / 0x4) *
          (-parseInt(_0x313e2b(0x1fe)) / 0x5) +
        -parseInt(_0x313e2b(0x218)) / 0x6 +
        -parseInt(_0x313e2b(0x224)) / 0x7 +
        (parseInt(_0x313e2b(0x1f3)) / 0x8) *
          (parseInt(_0x313e2b(0x208)) / 0x9) +
        (-parseInt(_0x313e2b(0x20c)) / 0xa) *
          (-parseInt(_0x313e2b(0x1ff)) / 0xb);
      if (_0x2b0d6a === _0x59fef7) break;
      else _0x3fe570.push(_0x3fe570.shift());
    } catch (_0x3ad5da) {
      _0x3fe570.push(_0x3fe570.shift());
    }
  }
})(_0x4259, 0xf0eeb);
var initialMouse1 = 0x0,
  initialMouse2 = 0x0,
  slideMovementTotal1 = 0x0,
  slideMovementTotal2 = 0x0,
  mouseIsDown1 = !0x1,
  mouseIsDown2 = !0x1,
  slider1 = $("#slider1"),
  slider2 = $(_0x17a01c(0x221));
function _0x4259() {
  var _0x442a8e = [
    "fadeTo",
    "changedTouches",
    "#locker1",
    "exchange-loading",
    "#slider1",
    "#slider2",
    "4373588aPbgao",
    "交換に必要なスタンプの数:",
    "7688051imcxKC",
    "mouseup\x20touchend",
    "2329824JjGDOD",
    "スタッフに提示していない場合は交換できません\x0a本当に交換しますか？",
    "#locker2",
    "stamp-count",
    "getElementById",
    "200eYsfww",
    "exchangeable2_stamp_count",
    "3376RbgQwq",
    "log",
    ".slide-text2",
    "mousedown\x20touchstart",
    "内部エラーです",
    "#button-background2",
    "body",
    "-10px",
    "touches",
    "unlocked",
    "exchangeable1_stamp_count",
    "5dYjztI",
    "33lGnGor",
    "exchange2",
    "item.json?v=6",
    "exchange-list",
    "getJSON",
    "交換済み",
    "#button-background1",
    "setItem",
    "#stamp-count2",
    "21609dCeBDp",
    "originalEvent",
    "ready",
    "hasClass",
    "7628650KUMthb",
    "1430ALeePt",
    "clientX",
    "animate",
    "text",
    "hidden",
    "景品を交換しますか？",
    "width",
    ".slide-text1",
    "getItem",
    "pageX",
    "交換に必要なスタンプの数を集めていません",
    "6257256TlJiVn",
    "addClass",
    "exchange1",
    "css",
  ];
  _0x4259 = function () {
    return _0x442a8e;
  };
  return _0x4259();
}
$(document)[_0x17a01c(0x20a)](function () {
  var _0x112ce5 = _0x17a01c;
  $[_0x112ce5(0x203)](_0x112ce5(0x201), function (_0x327ee0) {
    var _0x23e077 = _0x112ce5;
    (stampCount1 = _0x327ee0[_0x23e077(0x1fd)]),
      (stampCount2 = _0x327ee0[_0x23e077(0x1f2)]);
  })["done"](function () {
    var _0x1c74e1 = _0x112ce5;
    if (stampCount1 == null || stampCount2 == null) {
      console[_0x1c74e1(0x1f4)](stampCount1), alert(_0x1c74e1(0x1f7));
      return;
    }
    if (stampCount2 == 0x0 || stampCount1 == 0x0) {
      console.log(stampCount2), alert(_0x1c74e1(0x1f7));
      return;
    }
    $("#stamp-count1")[_0x1c74e1(0x210)](
      _0x1c74e1(0x223) +
        (localStorage.getItem("stamp-count") || 0x0) +
        "/" +
        stampCount1
    ),
      $(_0x1c74e1(0x207))[_0x1c74e1(0x210)](
        _0x1c74e1(0x223) +
          (localStorage[_0x1c74e1(0x215)](_0x1c74e1(0x229)) || 0x0) +
          "/" +
          stampCount2
      ),
      localStorage[_0x1c74e1(0x215)](_0x1c74e1(0x229)) == null ||
      localStorage[_0x1c74e1(0x215)](_0x1c74e1(0x229)) < stampCount1
        ? ($(_0x1c74e1(0x21e))[_0x1c74e1(0x210)](_0x1c74e1(0x217)),
          slider1[_0x1c74e1(0x219)](_0x1c74e1(0x1fc)))
        : localStorage[_0x1c74e1(0x215)](_0x1c74e1(0x21a)) &&
          ($("#locker1")[_0x1c74e1(0x210)]("交換済み"),
          slider1.addClass(_0x1c74e1(0x1fc))),
      localStorage[_0x1c74e1(0x215)]("stamp-count") == null ||
      localStorage[_0x1c74e1(0x215)]("stamp-count") < stampCount2
        ? ($(_0x1c74e1(0x228))[_0x1c74e1(0x210)](
            "交換に必要なスタンプの数を集めていません"
          ),
          slider2.addClass(_0x1c74e1(0x1fc)))
        : localStorage[_0x1c74e1(0x215)](_0x1c74e1(0x200)) &&
          ($(_0x1c74e1(0x228))["text"]("交換済み"),
          slider2.addClass(_0x1c74e1(0x1fc)));
  }),
    (document[_0x112ce5(0x22a)](_0x112ce5(0x202))[_0x112ce5(0x211)] = !0x1),
    (document[_0x112ce5(0x22a)](_0x112ce5(0x21f))[_0x112ce5(0x211)] = !0x0);
}),
  slider1.on(_0x17a01c(0x1f6), function (_0x46378c) {
    var _0x2660d9 = _0x17a01c;
    (mouseIsDown1 = !0x0),
      (slideMovementTotal1 =
        $(_0x2660d9(0x205))[_0x2660d9(0x213)]() - $(this)["width"]() + 0xa),
      (initialMouse1 =
        _0x46378c.clientX ||
        _0x46378c[_0x2660d9(0x209)][_0x2660d9(0x1fb)][0x0][_0x2660d9(0x216)]);
  }),
  $(document[_0x17a01c(0x1f9)], _0x17a01c(0x220))["on"](
    "mouseup\x20touchend",
    function (_0x291ff1) {
      var _0x4006e2 = _0x17a01c;
      if (!mouseIsDown1) return;
      mouseIsDown1 = !0x1;
      var _0x2c6d5c =
          _0x291ff1.clientX ||
          _0x291ff1[_0x4006e2(0x21d)][0x0][_0x4006e2(0x216)],
        _0x2a7819 = _0x2c6d5c - initialMouse1;
      if (_0x2a7819 < slideMovementTotal1) {
        $(_0x4006e2(0x214))[_0x4006e2(0x21c)](0x12c, 0x1),
          slider1[_0x4006e2(0x20f)]({ left: "-10px" }, 0x12c);
        return;
      }
      !slider1[_0x4006e2(0x20b)](_0x4006e2(0x1fc)) &&
        (confirm(_0x4006e2(0x212))
          ? confirm(_0x4006e2(0x227))
            ? (slider1[_0x4006e2(0x219)]("unlocked"),
              $("#locker1")[_0x4006e2(0x210)](_0x4006e2(0x204)),
              localStorage[_0x4006e2(0x206)](_0x4006e2(0x21a), !0x0))
            : not1()
          : not1());
    }
  );
function not1() {
  var _0x1625b7 = _0x17a01c;
  $(_0x1625b7(0x214))["fadeTo"](0x12c, 0x1),
    slider1[_0x1625b7(0x20f)]({ left: _0x1625b7(0x1fa) }, 0x12c);
}
$(document[_0x17a01c(0x1f9)])["on"](
  "mousemove\x20touchmove",
  function (_0x144017) {
    var _0x711768 = _0x17a01c;
    if (!mouseIsDown1) return;
    var _0x168934 =
        _0x144017[_0x711768(0x20e)] ||
        _0x144017[_0x711768(0x209)][_0x711768(0x1fb)][0x0][_0x711768(0x216)],
      _0x46d308 = _0x168934 - initialMouse1,
      _0x29cd80 = 0x1 - _0x46d308 / slideMovementTotal1;
    $(_0x711768(0x214))[_0x711768(0x21c)](0x0, _0x29cd80);
    if (_0x46d308 <= 0x0) {
      slider1.css({ left: _0x711768(0x1fa) });
      return;
    }
    if (_0x46d308 >= slideMovementTotal1 + 0xa) {
      slider1.css({ left: slideMovementTotal1 + "px" });
      return;
    }
    slider1[_0x711768(0x21b)]({ left: _0x46d308 - 0xa });
  }
),
  slider2.on(_0x17a01c(0x1f6), function (_0xe383fe) {
    var _0x4ed044 = _0x17a01c;
    (mouseIsDown2 = !0x0),
      (slideMovementTotal2 =
        $(_0x4ed044(0x1f8))[_0x4ed044(0x213)]() -
        $(this)[_0x4ed044(0x213)]() +
        0xa),
      (initialMouse2 =
        _0xe383fe[_0x4ed044(0x20e)] ||
        _0xe383fe.originalEvent[_0x4ed044(0x1fb)][0x0].pageX);
  }),
  $(document[_0x17a01c(0x1f9)], _0x17a01c(0x221))["on"](
    _0x17a01c(0x225),
    function (_0x42fd46) {
      var _0x91b370 = _0x17a01c;
      if (!mouseIsDown2) return;
      mouseIsDown2 = !0x1;
      var _0x1ddb2b =
          _0x42fd46[_0x91b370(0x20e)] ||
          _0x42fd46[_0x91b370(0x21d)][0x0][_0x91b370(0x216)],
        _0x41e3c3 = _0x1ddb2b - initialMouse2;
      if (_0x41e3c3 < slideMovementTotal2) {
        $(_0x91b370(0x1f5))[_0x91b370(0x21c)](0x12c, 0x1),
          slider2[_0x91b370(0x20f)]({ left: _0x91b370(0x1fa) }, 0x12c);
        return;
      }
      !slider2[_0x91b370(0x20b)]("unlocked") &&
        (confirm(_0x91b370(0x212))
          ? confirm(_0x91b370(0x227))
            ? (slider2.addClass(_0x91b370(0x1fc)),
              $(_0x91b370(0x228))[_0x91b370(0x210)](_0x91b370(0x204)),
              localStorage[_0x91b370(0x206)](_0x91b370(0x200), !0x0))
            : not2()
          : not2());
    }
  );
function not2() {
  var _0x246fbf = _0x17a01c;
  $(".slide-text2")[_0x246fbf(0x21c)](0x12c, 0x1),
    slider2[_0x246fbf(0x20f)]({ left: _0x246fbf(0x1fa) }, 0x12c);
}
function _0x4cb0(_0x444609, _0x3f80e8) {
  var _0x42593d = _0x4259();
  return (
    (_0x4cb0 = function (_0x4cb0fb, _0x3c13a3) {
      _0x4cb0fb = _0x4cb0fb - 0x1f2;
      var _0xeaf585 = _0x42593d[_0x4cb0fb];
      return _0xeaf585;
    }),
    _0x4cb0(_0x444609, _0x3f80e8)
  );
}
$(document[_0x17a01c(0x1f9)])["on"](
  "mousemove\x20touchmove",
  function (_0x31f3e4) {
    var _0x83e015 = _0x17a01c;
    if (!mouseIsDown2) return;
    var _0x417bd6 =
        _0x31f3e4[_0x83e015(0x20e)] ||
        _0x31f3e4[_0x83e015(0x209)][_0x83e015(0x1fb)][0x0][_0x83e015(0x216)],
      _0x1a4340 = _0x417bd6 - initialMouse2,
      _0x36b52d = 0x1 - _0x1a4340 / slideMovementTotal2;
    $(_0x83e015(0x1f5))[_0x83e015(0x21c)](0x0, _0x36b52d);
    if (_0x1a4340 <= 0x0) {
      slider2.css({ left: _0x83e015(0x1fa) });
      return;
    }
    if (_0x1a4340 >= slideMovementTotal2 + 0xa) {
      slider2.css({ left: slideMovementTotal2 + "px" });
      return;
    }
    slider2.css({ left: _0x1a4340 - 0xa });
  }
);

// var bcTableSizing;

// $(function() {
//   console.log("!");

//   bcTableSizing = {
//     windowH: $(window).height(),
//     mainH: $("#main").height(),
//     mainTopH: $(".main-top").height(),
//     tableTopH: $(".table-top").height(),
//     tableBottomH: $(".table-bottom").height(),
//     tableH: function() {
//       var resizedH = mainH - mainTopH - tableTopH - tableBottomH;
//       $(".table-viewArea").height(resizedH);
//     },
//     init: function() {
//       bcTableSizing.tableH();
//     }
//   };

//   bcTableSizing.tableH();

//   $(window).resize(function() {
//     bcTableSizing.windowH = $(window).height();
//     bcTableSizing.mainH = $("#main").height();
//     ICONest.init();
//   });
// });

$(function() {
  var heightValue = {
    window: $(window).height(),
    main: $("#main").height(),
    mainTop: $(".main-top").outerHeight(true),
    tableTop: $(".table-top").outerHeight(true),
    tableTitle: $(".table-titleArea").height(),
    tableBottom: $(".table-bottom").outerHeight(true)
  };

  var tableEvt = function() {
    var resizeTableHeight = function() {
      var resizedH =
        heightValue.main -
        heightValue.mainTop -
        heightValue.tableTop -
        heightValue.tableTitle -
        heightValue.tableBottom;

      if (resizedH < 100) {
        $("#main").addClass("scrollable");
        resizedH = 100;
      } else {
        $("#main").removeClass("scrollable");
      }
      $(".table-viewArea").height(resizedH);
    };

    function scrollBarWidth() {
      document.body.style.overflow = "hidden";
      var width = document.body.clientWidth;

      document.body.style.overflow = "scroll";
      width -= document.body.clientWidth;

      if (!width) width = document.body.offsetWidth - document.body.clientWidth;

      document.body.style.overflow = "";

      return width;
    }

    var setTablePadding = function() {
      //스크롤로 인해 생기는 여백을 thead에게도 지정해줍니다.
      var padding = scrollBarWidth();
      $(".table-titleArea").css("padding-right", padding);
    };

    resizeTableHeight();
    setTablePadding();
  };

  $(window).on("load", function() {
    tableEvt();
  });

  $(window).on("resize", function() {
    heightValue.window = $(window).height();
    heightValue.main = $("#main").height();
    tableEvt();
  });
});

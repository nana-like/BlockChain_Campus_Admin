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
      var defaultPadding = 40;
      var padding = scrollBarWidth();
      $(".table-titleArea").css("padding-right", padding);
    };

    resizeTableHeight();
    setTablePadding();
  };

  var commonEvt = function() {
    // $(".input-datepicker").flatpickr({
    //   enableTime: true,
    //   appendTo: window.document.querySelector("#main")
    // });

    $(".input-datepicker").daterangepicker(
      {
        singleDatePicker: true,
        timePicker: true,
        timePicker24Hour: true,
        timePickerIncrement: 10,
        parentEl: "#wrap",
        opens: "center",
        autoApply: true,
        locale: {
          format: "YYYY-MM-DD H:mm",
          applyLabel: "확인",
          cancelLabel: "취소",
          customRangeLabel: "Custom",
          daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        }
      },
      function(start, end, label) {
        console.log(
          "New date range selected: " +
            start.format("YYYY-MM-DD") +
            " to " +
            end.format("YYYY-MM-DD") +
            " (predefined range: " +
            label +
            ")"
        );
      }
    );
  };

  $(window).on("load", function() {
    commonEvt();

    if ($("#main").hasClass("main-table")) {
      console.log("테이블 이벤트 시작");
      tableEvt();
    } else {
      console.log("테이블 이벤트 없음");
    }
  });

  $(window).on("resize", function() {
    // heightValue.window = $(window).height();
    // heightValue.main = $("#main").height();
    // tableEvt();

    if ($("#main").hasClass("main-table")) {
      console.log("테이블 이벤트 시작");
      heightValue.window = $(window).height();
      heightValue.main = $("#main").height();
      tableEvt();
    } else {
      console.log("테이블 이벤트 없음");
    }
  });
});

$(function() {
  // create an instance when the DOM is ready
  $("#jstree").jstree({
    core: {
      themes: { icons: true }
    }
  });

  // bind to events triggered on the tree
  $("#jstree").on("changed.jstree", function(e, data) {
    console.log(data.selected);
  });

  $(window).on("load", function() {
    $("#jstree").jstree("open_all");
  });
});

$(function() {
  $.contextMenu({
    selector: ".context-menu-one",
    callback: function(key, options) {
      var m = "clicked: " + key;
      (window.console && console.log(m)) || alert(m);
    },
    items: {
      edit: { name: "Edit", icon: "edit" },
      cut: { name: "Cut", icon: "cut" },
      copy: { name: "Copy", icon: "copy" },
      paste: { name: "Paste", icon: "paste" },
      delete: { name: "Delete", icon: "delete" },
      sep1: "---------",
      quit: {
        name: "Quit",
        icon: function() {
          return "context-menu-icon context-menu-icon-quit";
        }
      }
    }
  });

  $(".context-menu-one").on("click", function(e) {
    console.log("clicked", this);
  });
});

$(function() {
  // $("#table-pagination").twbsPagination({
  //   totalPages: 20,
  //   items: 20,
  //   itemOnPage: 5,
  //   currentPage: 1,
  //   prevText: '<span aria-hidden="true">&laquo;</span>',
  //   nextText: '<span aria-hidden="true">&raquo;</span>'
  // });

  function simpleTemplating(data) {
    var html = "<ul>";
    $.each(data, function(index, item) {
      html += "<li>" + item + "</li>";
    });
    html += "</ul>";
    return html;
  }

  // $("#table-pagination").pagination({
  //   dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  //   pageSize: 5,
  //   showGoInput: true,
  //   showGoButton: true
  //   // callback: function(data, pagination) {
  //   //   var html = simpleTemplating(data);
  //   //   $("#table-pagination").html(html);
  //   // }
  // });

  $("#table-pagination").pagination({
    items: 100,
    itemsOnPage: 15,
    displayedPages: 3,
    edges: 1,
    ellipsePageSet: false
  });

  autosize(document.querySelectorAll("textarea"));
});

$(function() {
  var statusH = $(".voting-details-status").outerHeight();
  console.log(statusH);

  $(".status-chart").height(statusH - 25);

  var ctx = document.getElementById("myChart");

  var myChart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: [
        "리오넬 메시",
        "루이스 수아레스",
        "크리스티아누 호날두",
        "데이비드 베컴",
        "에릭 칸토나",
        "에릭 칸토나칸토나칸토나칸토나칸토나칸토나"
      ],
      datasets: [
        {
          // label: "# of Votes",
          data: [219, 100, 150, 35, 7, 81],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false,
      // categoryPercentage: 0.2,
      // barPercentage: 1.0,
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              display: false,
              beginAtZero: true
            },
            gridLines: {
              display: false
            },
            barThickness: 40
            // barPercentage: 0.5,
            // categoryPercentage: 1.0
          }
        ]
      }
    }
  });
});

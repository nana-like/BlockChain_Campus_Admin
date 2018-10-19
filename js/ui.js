$(function() {
  //셀렉팅용
  var $window = $(window);
  var $main = $("#main");
  var $mainTop = $main.find(".main-top");
  var $table_titleArea = $(".table-titleArea");
  var $table_viewArea = $(".table-viewArea");
  var $datepicker = $(".input-datepicker");
  var $statusChart = $(".status-chart");
  var $dropdown = $(".dropdown");

  //레이아웃 조절을 위한 높이 값
  var heightValue = {
    window: $window.height(),
    main: $main.height(),
    mainTop: $mainTop.outerHeight(true),
    tableTop: $(".table-top").outerHeight(true),
    tableTitle: $table_titleArea.height(),
    tableBottom: $(".table-bottom").outerHeight(true)
  };

  //브라우저에 따른 스크롤 너비 구하는 함수
  var scrollBarWidth = function() {
    document.body.style.overflow = "hidden";
    var width = document.body.clientWidth;

    document.body.style.overflow = "scroll";
    width -= document.body.clientWidth;

    if (!width) width = document.body.offsetWidth - document.body.clientWidth;

    document.body.style.overflow = "";

    return width;
  };

  // [*] 데이트피커 함수 (임시)
  // http://www.daterangepicker.com/
  var datePickerEvt = function() {
    console.log("TODO: Datepicker!");
    var $datepicker_start = $("#datepicker-startDate");
    var $datepicker_end = $("#datepicker-endDate");
    var startDate = moment().subtract(30, "days"); //30일 전 (moment.js 의존)
    var endDate = moment();

    var commonOpt = {
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
    };
    var Opt2 = {
      singleDatePicker: true,
      timePicker: true,
      timePicker24Hour: true,
      timePickerIncrement: 10,
      parentEl: ".datepicker-inner-area",
      opens: "left",
      autoApply: true,
      locale: {
        format: "YYYY-MM-DD H:mm",
        applyLabel: "확인",
        cancelLabel: "취소",
        customRangeLabel: "Custom",
        daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      }
    };

    // $datepicker.daterangepicker(commonOpt);
    $(".datepicker-inner").daterangepicker(Opt2);
    // $datepicker_start.data("daterangepicker").setStartDate(startDate);
    // $datepicker_end.data("daterangepicker").setStartDate(endDate);
  };

  // [*] 페이지네이션 함수 (임시)
  // http://flaviusmatis.github.io/simplePagination.js/
  var paginationEvt = function() {
    console.log("TODO: Pagination!");
    var $tablePagination = $("#table-pagination");

    $tablePagination.pagination({
      items: 100, //모든 아이템 수
      itemsOnPage: 15, //각 페이지에 노출될 아이템 수
      displayedPages: 3, //페이지네이션 개수 (최소치: 3)
      edges: 1, //처음과 끝에 보여줄 페이지 수
      ellipsePageSet: false //... 클릭 시 타이핑 가능하게 하는 기능 방지
    });
  };

  // [*] 차트 함수 (임시)
  // http://www.chartjs.org/docs/latest/
  var chartEvt = function() {
    console.log("TODO: Chart!");

    var statusH = $(".voting-details-status").outerHeight();
    $statusChart.height(statusH - 25);

    var ctx = document.getElementById("votingChart");

    var votingChart = new Chart(ctx, {
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
            }
          ]
        }
      }
    });
  };

  // [*] 테이블 높이 조절 함수
  var resizeTableHeight = function() {
    console.log("TODO: Resize Table!");
    var resizedH =
      heightValue.main -
      heightValue.mainTop -
      heightValue.tableTop -
      heightValue.tableTitle -
      heightValue.tableBottom;

    if (resizedH < 100) {
      //윈도 높이가 극단적으로 낮다면 스크롤 가능하도록 합니다
      $(".main-container").addClass("scrollable");
      resizedH = 100;
    } else {
      //그렇지 않다면 스크롤을 막습니다
      // $main.removeClass("scrollable");
      $(".main-container").removeClass("scrollable");
    }
    $table_viewArea.height(resizedH);
  };

  // [*] 테이블 함수
  var tableEvt = function() {
    console.log("TODO: Table All!");

    //패딩 지정 함수
    var setTablePadding = function() {
      //스크롤로 인해 생기는 여백을 thead 오른쪽에도 지정합니다 (윈도 크롬 기준 17px 정도)
      var padding = scrollBarWidth();
      $table_titleArea.css("padding-right", padding);
    };

    resizeTableHeight();
    setTablePadding();
    paginationEvt();
  };

  // [*] 커먼 함수
  var commonEvt = function() {
    // 드롭다운 이벤트
    var dropdownEvt = function() {
      console.log("TODO: Dropdown! ");
      // 드롭다운 클릭 시 active클래스 추가
      $dropdown.on("click", function(evt) {
        evt.stopPropagation();
        console.log("TODO: Dropdown Toggle ...");
        $(this).toggleClass("active");
      });

      // 드롭다운 콤보박스의 클릭한 텍스트를 보여줘야하는 경우
      // $(".dropdown").on("click", ".combobox-item", function(evt) {
      //   var text = $(this).text();
      //   console.log(text);
      //   $(this)
      //     .find(".text")
      //     .val(text);
      // });
      $(".dropdown-search, .dropdown-paging").on("mousedown", function(evt) {
        evt.stopPropagation();
        if (evt.target.className == "combobox-item") {
          var value = evt.target.innerText;
          console.log(value);
          $(this)
            .find(".text")
            .text(value);
        }
      });

      // 바디 클릭 시 드롭다운 닫기
      $("body").on("click", function() {
        if ($dropdown.hasClass("active")) {
          $dropdown.removeClass("active");
        }
      });
    };

    // 인풋 파일 이벤트
    var inputFileEvt = function() {
      var $inputFileButton = $(".input-file");
      $inputFileButton.change(function() {
        //임시
        var fileValue = $(this)
          .val()
          .split("\\");
        var fileName = fileValue[fileValue.length - 1];
        var fileSize_byte = this.files[0].size;

        var fSExt = new Array("Bytes", "KB", "MB", "GB");
        fSize = fileSize_byte;
        i = 0;
        while (fSize > 900) {
          fSize /= 1024;
          i++;
        }
        var fiileSize = "(" + (Math.round(fSize * 100) / 100 + fSExt[i]) + ")";

        $(this)
          .prev(".fileName")
          .children(".name")
          .text(fileName);
        $(this)
          .prev(".fileName")
          .children(".size")
          .text(fiileSize);
      });
    };

    // GNB 아코디언 이벤트
    var gnbAccordionEvt = function() {
      $(".gnb-accordion").on("click", function() {
        $(this).toggleClass("opened");
      });
    };

    dropdownEvt();
    inputFileEvt();
    gnbAccordionEvt();
  };

  // [*] 초기 실행 함수
  var init = function() {
    if ($main.hasClass("main-table")) {
      heightValue.window = $window.height();
      heightValue.main = $main.height();
      tableEvt();
    }

    if ($datepicker.length > 0) {
      datePickerEvt();
    }

    if ($statusChart.length > 0) {
      chartEvt();
    }

    commonEvt();
  };

  $(window).on("load", function() {
    init();
  });

  $(window).on("resize", function() {
    if ($main.hasClass("main-table")) {
      heightValue.window = $window.height();
      heightValue.main = $main.height();
      resizeTableHeight();
    }
  });
});

$(function() {
  var jsondata = [
    {
      id: "all",
      parent: "#",
      text: "전체",
      state: {
        opened: true,
        selected: true
      }
    },
    {
      id: "postech",
      parent: "all",
      text: "POSTECH",
      state: {
        opened: true
      }
    },
    {
      id: "test_1",
      parent: "postech",
      text: "분류_1"
    },
    {
      id: "test_2",
      parent: "postech",
      text: "분류_2"
    },
    {
      id: "test_1_1",
      parent: "test_1",
      text: "분류_1_1"
    },
    {
      id: "test_1_2",
      parent: "test_1",
      text: "분류_1_2"
    }
  ];

  createJSTree(jsondata);
});

function customMenu($node) {
  var tree = $("#jsTree").jstree(true);

  var items = {
    Create: {
      separator_before: false,
      separator_after: true,
      label: "신규등록",
      action: function(obj) {
        var name = prompt("분류를 신규등록합니다.");
        if (name) {
          $node = tree.create_node($node, {
            text: name,
            type: "default"
          });
          tree.deselect_all();
          tree.select_node($node);
        }
      }
    },
    Rename: {
      separator_before: false,
      separator_after: false,
      label: "수정",
      action: function(obj) {
        var name = prompt("분류를 수정합니다.");
        if (name) {
          tree.edit($node, name);
        }
      }
    },
    Remove: {
      separator_before: false,
      separator_after: false,
      label: "삭제",
      action: function(obj) {
        if (confirm("분류를 삭제합니다.")) {
          tree.delete_node($node);
        } else {
          return false;
        }
      }
    }
  };

  return items;
}

function createJSTree(jsondata) {
  $("#jsTree").jstree({
    core: {
      check_callback: true,
      data: jsondata,
      themes: { stripes: true }
    },
    plugins: ["contextmenu"],
    contextmenu: {
      items: customMenu
    }
  });
}

// $(function() {
//   $("#button-edit-job-details").on("click", function() {
//     console.log("!");

//     if ($(".job-details").hasClass("mode-view")) {
//       $(".job-details").removeClass("mode-view");
//       $(
//         ".job-details .input-text, .job-details .radio-block > input, .job-details .dropdown .text"
//       ).each(function() {
//         $(this).removeAttr("readonly");
//         $(this).removeAttr("disabled");
//       });
//       $(this).text("저장");
//     } else {
//       $(".job-details").addClass("mode-view");

//       $(
//         ".job-details .radio-block > input[type='radio'], .job-details .dropdown .text"
//       ).each(function() {
//         $(this).prop("readonly", true);
//         $(this).prop("disabled", true);
//       });
//       $(".job-details .input-text").each(function() {
//         $(this).prop("readonly", true);
//       });

//       $(this).text("수정");
//     }
//   });

//   $(".job-details input[type='radio']").on("change", function() {
//     if ($("#radio-temp-type-4").is(":checked")) {
//       $("#temp-id-duration").removeClass("input-disable");
//       // $("#radio-temp-duration-0").prop("checked", true);
//     } else {
//       $("#temp-id-duration").addClass("input-disable");
//     }
//   });
// });

$(function() {
  $("#button-edit-job-details").on("click", function() {
    console.log("TODO: TEST!");

    if ($(".main-container").hasClass("mode-view")) {
      $(".main-container").removeClass("mode-view");
      $(".main-container").addClass("mode-edit");
      $(this).text("저장");
    } else if ($(".main-container").hasClass("mode-edit")) {
      $(".job-details .input-text").each(function() {
        var val = $(this).val();
        $(this)
          .prev(".string-value")
          .text(val);
      });
      $(".job-details .input-datepicker").each(function() {
        var val = $(this).val();
        $(this)
          .prev(".string-value")
          .text(val);
      });
      $(".job-details .dropdown").each(function() {
        var val = $(this)
          .children(".text")
          .text();
        $(this)
          .prev(".string-value")
          .text(val);
      });

      $(".main-container").removeClass("mode-edit");
      $(".main-container").addClass("mode-view");
      $(this).text("수정");
    }
  });

  $(".job-details input[type='radio']").on("change", function() {
    if ($("#radio-temp-type-4").is(":checked")) {
      $("#temp-id-duration").removeClass("input-disable");
      $("#radio-temp-duration-0").attr("checked", true);
    } else {
      $("#temp-id-duration").addClass("input-disable");
    }

    if ($("#radio-temp-duration-1").is(":checked")) {
      $(this)
        .nextAll(".input-text")
        .val("0 0 5 1 * ?");
    }
  });
});

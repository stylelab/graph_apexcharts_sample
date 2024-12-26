(function () {
  var options = {
    series: [
      {
        name: "Inflation",
        data: [0, 0, 0, 0, 0],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
      animations: {
        speed: 2000,
        dynamicAnimation: {
          enabled: true,
          speed: 950,
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "円";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: ["1ヶ月", "1年", "5年", "10年", "35年"],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      min: -5000,
      max: 5000,
      tickAmount: 4,
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        show: true,
        formatter: function (val) {
          //return val;
          return val + "円";
        },
      },
    },
    title: {
      text: "",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };

  //グラフ生成
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  //グラフupdate
  function updateChart() {
    chart.updateSeries([
      {
        data: [
          Math.ceil(Math.random() * 100) + -900,
          Math.ceil(Math.random() * 500) + 1300,
          Math.ceil(Math.random() * 1000) + 1400,
          Math.ceil(Math.random() * 2000) + 2101,
          Math.ceil(Math.random() * 2000) + 3100,
        ],
      },
    ]);
  }

  //ボタンイベント
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    updateChart();
  });
})();

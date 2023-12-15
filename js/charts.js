let dataAvailability = {
  series: [
    {
      name: "High - 2013",
      data: [28, 29, 33, 23, 32, 32, 33]
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
  chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Data Availability chart',
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Temperature'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
};

var chart = new ApexCharts(document.querySelector("#dataAvailability"), dataAvailability);
chart.render();


// ---------------------------------------------------------------------------------

let receivableSubmission = {
  series: [
    {
      name: "",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "",
      data: [7, 8, 15, 15, 25, 13, 19]
    },
    {
      name: "",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
  chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Receivable and submission chart',
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Temperature'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
};

var chart = new ApexCharts(document.querySelector("#receivableSubmission"), receivableSubmission);
chart.render();


// ---------------------------------------------------------------------------------

let revenueReceived = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  },
  {
    name: "Desktops",
    data: [40, 31, 39, 21, 39, 62, 19, 91, 148]
  }],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'DSM Chart',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
};

var chart = new ApexCharts(document.querySelector("#revenueReceived"), revenueReceived);
chart.render();


// ---------------------------------------------------------------------------------


//Apexcharts Synchronized Line Charts Start

var publishedDataChart = {
  series: [{
    name: 'Gewicht',
    data: [10.09, 10.12, 10.12, 10.09, 10.13, 10.09, 10.08, 10.1, 10.09, 10.12, 10.11, 10.1, 10.07, 10.13, 10.11, 10.1, 10.11, 10.09, 10.1, 10.11, 10.19, 10.22, 10.22, 10.16, 10.13, 10.14, 10.18, 10.16, 10.11, 10.15, 10.16, 10.09, 10.11, 10.11, 10.11, 10.12, 10.09, 10.12, 10.13, 10.14, 10.11, 10.12,]
  }],
  chart: {
    id: 'fb',
    group: 'social',
    type: 'area',
  },
  colors: ['#B19CFE'],
  yaxis: {
    labels: {
      minWidth: 40
    },
    min: 9.5,
    max: 10.5,
    title: {
      text: 'Gewicht'
    },
  },
  tooltip: {
    y: {
      formatter: (value) => {
        return value + " kg"
      },
    },
    x: {
      format: "dd.MM.yyyy HH.mm 🕑",
    }
  }
};


var scheduledDataChart = {
  series: [{
    name: 'Temperatur',
    data: [21.56, 21.81, 21.87, 21.87, 21.87, 21.75, 21.62, 21.5, 21.43, 21.43, 21.37, 21.31, 21.31, 21.25, 21.18, 21.18, 21.12, 21.06, 21.06, 21.18, 20.43, 20.5, 20.68, 20.75, 20.81, 21.18, 21.43, 21.37, 21.31, 21.25, 21.18, 21.06, 21, 21, 20.93, 20.87, 20.81, 20.81, 20.93, 21, 21.06, 21.12, 21.06,]
  }],
  chart: {
    id: 'fb',
    group: 'social',
    type: 'area',
  },
  colors: ['#008FFB'],
  yaxis: {
    labels: {
      minWidth: 40
    },
    title: {
      text: 'Temperatur'
    },
  },
  tooltip: {
    y: {
      formatter: (value) => {
        return value + " °C"
      },
    },
    x: {
      format: "dd.MM.yyyy HH.mm 🕑",
    }
  }
};

var chart = new ApexCharts(document.querySelector("#publishedData"), publishedDataChart);
chart.render();

var chart = new ApexCharts(document.querySelector("#scheduledData"), scheduledDataChart);
chart.render();

//Apexcharts Synchronized Line Charts End------------------------------------------------------------------


//
let deviationGraph = {
  series: [{
    name: 'XYZ MOTORS',
    data: [60, 32, 45, 32, 34, 52, 41],
  }],
  chart: {
    type: 'area',
    stacked: false,
    height: 350,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  title: {
    text: 'Deviation graph (published vs Scheduled)',
    align: 'left'
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100]
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0);
      },
    },
    title: {
      text: 'Price'
    },
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0)
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#deviationGraph"), deviationGraph);
chart.render();

// ---------------------------------------------------------------------------------

let powerGraph = {
  series: [{
    name: 'XYZ MOTORS',
    data: [60, 32, 45, 32, 34, 52, 41],
  }],
  chart: {
    type: 'area',
    stacked: false,
    height: 350,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  title: {
    text: 'Power graph (published vs Scheduled)',
    align: 'left'
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100]
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0);
      },
    },
    title: {
      text: 'Price'
    },
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0)
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#powerGraph"), powerGraph);
chart.render();

// ---------------------------------------------------------------------------------

var deviationBand = {
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 360,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        floating: true,
        offsetX: 0,
        offsetY: 0,
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#deviationBand"), deviationBand);
chart.render();

// ---------------------------------------------------------------------------------

var deviationBand2 = {
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#deviationBand2"), deviationBand2);
chart.render();

// ---------------------------------------------------------------------------------

var publishedGeneration1 = {
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: 'Published Generation (Forecast vs Actual)'
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#publishedGeneration1"), publishedGeneration1);
chart.render();

// ---------------------------------------------------------------------------------

var publishedGeneration2 = {
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: 'Published Generation (Forecast vs Actual)'
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#publishedGeneration2"), publishedGeneration2);
chart.render();

// ---------------------------------------------------------------------------------

var publishedGeneration3 = {
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: 'Published Generation (Forecast vs Actual)'
    }
  },
  fill: {
    opacity: 1
  },

  legend: {
    position: 'top',
    horizontalAlign: 'center',
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#publishedGeneration3"), publishedGeneration3);
chart.render();


// ---------------------------------------------------------------------------------

let expoerImport = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'DSM Chart',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
};

var chart = new ApexCharts(document.querySelector("#expoerImport"), expoerImport);
chart.render();


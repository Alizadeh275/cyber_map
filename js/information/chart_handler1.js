// create data
var data = [
    ["ارتباطات و فناوری اطلاعات", 10],
    ["اقتصادی", 12],
    ["حقوقی-قضایی", 13],
    ["دفاعی-امنیتی", 10],
    ["سیاسی-اجتماعی", 9],
    ["علمی-نوآوری", 9],
    ["سیاست خارجی", 9],
    ["فرهنگی", 9],
    ["اختصاصی-تخصصی", 9],
];

// create a chart
chart = anychart.column();

// create a column series and set the data
var series = chart.column(data);

// set the container id
chart.container("barchart_container1");
chart.background().fill('#f8f9fa');

var state = series.normal();

// state.fill('#1481c0')
// x axix labels font setting
var xAxisLabels = chart.xAxis().labels();
xAxisLabels.fontFamily("vazir");

var yAxisLabels = chart.yAxis().labels();
yAxisLabels.fontFamily("vazir");

// allow labels overlapping
var xAxis = chart.xAxis();
xAxis.overlapMode("noOverlap");


// tooltip content font setting
var tooltip = chart.tooltip();
tooltip.fontFamily("vazir");

// tooltip title font setting
var title = chart.tooltip().title();
title.fontFamily("vazir");


var xAxis = chart.xAxis();
xAxis.title("موضوع");
xAxis.title().fontFamily('vazir');

var yAxis = chart.yAxis();
yAxis.title("مشارکت");
yAxis.title().fontFamily('vazir');
chart.yAxis().labels().format("٪{%value}");

chart.tooltip().hAlign('center').format("%{%value}");



// xAxisLabels.rotation(-45)

// initiate drawing the chart
chart.draw();
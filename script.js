'use strict'

// 要素取得
const headerButton = document.getElementById("headerButton");
const overlay = document.getElementById("overlay")
const modal = document.getElementById("modal")
const closeButton = document.getElementById("closeButton")
    const record = document.getElementById("record")
    const modalButton = document.getElementById("modalButton")
    const load = document.getElementById("load")
    const complete = document.getElementById("complete")
const footerButton = document.getElementById("footerButton")


// pcでヘッダーの記録・投稿をクリックしたらoverlay、モーダル、recordが表示される
// smでフッターの記録・投稿をクリックしたらoverlay、モーダル、recordが表示される
headerButton.addEventListener("click",function(){
    overlay.classList.add("active")
    modal.classList.add("active")
    record.classList.add("active")
});
footerButton.addEventListener("click",function(){
    overlay.classList.add("active")
    modal.classList.add("active")
    record.classList.add("active")
})
// モーダルで学習日をクリックしたらカレンダーが表示される

// モーダルで記録・投稿をクリックしたらローディングが１秒表示され、その後完了画面が表示される
modalButton.addEventListener("click", function(){
    record.classList.remove("active")
    load.classList.add("active")
    overlay.classList.add("disable")
    closeButton.classList.add("disable")
    setTimeout(function(){
        load.classList.remove("active")
        complete.classList.add("active")
        overlay.classList.remove("disable")
        closeButton.classList.remove("disable")
    },1000)
})
// モーダルで記録・投稿をクリックしたときエラーなら、エラー画面が表示される

// ×印もしくはoverlayがクリックされるとoverlayとモーダルが隠される
closeButton.addEventListener("click", function(){
    overlay.classList.remove("active")
    modal.classList.remove("active")
    complete.classList.remove("active")
})
overlay.addEventListener("click", function(){
    overlay.classList.remove("active")
    modal.classList.remove("active")
    complete.classList.remove("active")
})


// 後述のticks。偶数のみ配列に追加する。
const ticks = [];
for (let i=2; i<31; i=i+2){
    ticks.push(i)
};


// 棒グラフのデータ一覧
const bar_editor = [
    ['Day','Time'],
    [1,3],
    [2,4],
    [3,5],
    [4,3],
    [5,0],
    [6,0],
    [7,4],
    [8,2],
    [9,2],
    [10,8],
    [11,8],
    [12,2],
    [13,2],
    [14,1],
    [15,7],
    [16,4],
    [17,4],
    [18,3],
    [19,3],
    [20,3],
    [21,2],
    [22,2],
    [23,6],
    [24,2],
    [25,2],
    [26,1],
    [27,1],
    [28,1],
    [29,7],
    [30,8],
];

// 円グラフ（言語）のデータ一覧
const circle_lang_editor = [
    ["lang", "rate"],
    ["HTML",30],
    ["CSS",20],
    ["JavaScript",10],
    ["PHP",5],
    ["Laravel",5],
    ["SQL",20],
    ["SHELL",20],
    ["情報システム基礎知識（その他）",10],
];

// 円グラフ（コンテンツ）のデータ一覧
const circle_contents_editor = [
    ["contents", "rate"],
    ["ドットインストール", 40],
    ["N予備校", 20],
    ["POSSE課題", 40],
]
  
    //グラフ設定の読み込み
    google.charts.load('current', {packages: ['corechart']});

    //グラフ関数をセット
    google.charts.setOnLoadCallback(drawChart);

    //グラフ関数設定
    function drawChart() {
      //棒グラフデータ読み込み
      const bar_data = google.visualization.arrayToDataTable(bar_editor);
      //棒グラフオプション
      const bar_options = {
          title: '',
          // animation:{
          //     startup: true,
          //     duration: 800,
          //     easing: 'inAndOut'
          // },
          colors:["#0f72bd"],
          legend: {position: "none"},
          vAxis: {
              format:'#h',
              textStyle:{color: "#cbdce8"},
              gridlines: {
                  count: 0,
              }
          },
          hAxis: {
              title: "3月",
              textStyle:{color: "#cbdce8"},
              gridlines: {
                  count: 0,
                  color: "#fff"
              },
              ticks: ticks,
              textStyle:{fontSize: 8,}
          }
      }
      //棒グラフのDOMと紐付け
      const bar_chart = new google.visualization.ColumnChart(document.getElementById('barGraph'));
      //棒グラフ描画実行
      bar_chart.draw(bar_data, bar_options);  




      //円（言語）グラフデータ読み込み
      const circle_lang_data = google.visualization.arrayToDataTable(circle_lang_editor);
      //円（言語）グラフオプション
      const circle_lang_options = {
        legend: {position: "none"},
        colors: ["#1754ef", "#0f71bd", "#20bdde", "#3ccefe", "#b29ef3", "#6d46ec", "#4a17ef", "#3105c0"],
        pieHole: 0.4,
        pieSliceTextStyle: {
            fontSize: 8,
        },
      }
      //円（言語）グラフのDOMと紐付け
      const circle_lang_chart = new google.visualization.PieChart(document.getElementById('langGraph'));
      //円（言語）グラフ描画実行
      circle_lang_chart.draw(circle_lang_data, circle_lang_options);  




    
      //円（コンテンツ）グラフデータ読み込み
      const circle_contents_data = google.visualization.arrayToDataTable(circle_contents_editor);
      //円（コンテンツ）グラフオプション
      const circle_contents_options = {
        legend: {position: "none"},
        colors: ["#1754ef", "#0f71bd", "#20bdde"],
        pieHole: 0.4,
      }
      //円（コンテンツ）グラフのDOMと紐付け
      const circle_contents_chart = new google.visualization.PieChart(document.getElementById('contentGraph'));
      //円（コンテンツ）グラフ描画実行
      circle_contents_chart.draw(circle_contents_data, circle_contents_options);  



      // onReSizeイベント。レスポンシブ対応。
      window.onresize = function(){
          drawChart(); 
      }
    }  

// カレンダー


// ツイッター
'use strict'

// １．要素取得
const headerButton = document.getElementById("headerButton");
const overlay = document.getElementById("overlay")
const modal = document.getElementById("modal")
    const closeButton = document.getElementById("closeButton")
    const backButton = document.getElementById("backButton")
    const record = document.getElementById("record")
        const modalButton = document.getElementById("modalButton")
        const calendarBox = document.getElementById("calendarBox")
    const calendarWrapper = document.getElementById("calendarWrapper")
        const calendarButton = document.getElementById("calendarButton")
    const load = document.getElementById("load")
    const complete = document.getElementById("complete")
const footerDate = document.getElementById("footerDate")
const footerButton = document.getElementById("footerButton")

// ２．画面遷移
// pcでヘッダーの記録・投稿をクリックしたらoverlay、modal、record、closeButtonが表示される。
// smでフッターの記録・投稿をクリックしたらoverlay、モーダル、recordが表示される
headerButton.addEventListener("click",function(){
    overlay.classList.add("active")
    modal.classList.add("active")
    record.classList.add("active")
    closeButton.classList.add("active")
})
footerButton.addEventListener("click",function(){
    overlay.classList.add("active")
    modal.classList.add("active")
    record.classList.add("active")
    closeButton.classList.add("active")
})
// モーダルで学習日をクリックしたらカレンダー、backButtonが表示される
calendarBox.addEventListener("click",function(){
    record.classList.remove("active")
    closeButton.classList.remove("active")
    calendarWrapper.classList.add("active")
    backButton.classList.add("active")
})
// カレンダーで戻るボタンをクリックしたらrecordが表示される
backButton.addEventListener("click", function(){
    calendarWrapper.classList.remove("active")
    backButton.classList.remove("active")
    record.classList.add("active")
    closeButton.classList.add("active")
})


// モーダルで記録・投稿をクリックしたらローディングが３秒表示され、その後完了画面が表示される
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
    },5000)
})
// モーダルで記録・投稿をクリックしたときエラーなら、エラー画面が表示される

// どの画面の状態でも、×印もしくはoverlayがクリックされるとoverlayとモーダルが隠される
closeButton.addEventListener("click", function(){
    overlay.classList.remove("active")
    modal.classList.remove("active")
    closeButton.classList.remove("active")
    record.classList.remove("active")
    calendarWrapper.classList.remove("active")
    backButton.classList.remove("active")
    complete.classList.remove("active")
})
overlay.addEventListener("click", function(){
    overlay.classList.remove("active")
    modal.classList.remove("active")
    closeButton.classList.remove("active")
    record.classList.remove("active")
    calendarWrapper.classList.remove("active")
    backButton.classList.remove("active")
    complete.classList.remove("active")
})

// ３．グラフ
// グラフ関連の変数。後述のticks。偶数のみ配列に追加する。
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
          },
          chartArea:{width:"85%",height:"70%"}
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
        'chartArea': {'width': '95%', 'height': '95%'}
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
        'chartArea': {'width': '95%', 'height': '95%'}
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


// ４．カレンダー
// "今日"のデータ
const today = new Date();
// 曜日の配列
const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat",]
// recordの学習日に入るテキストを"今日"に設定
var calendarBoxHTML = `${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日`
calendarBox.innerHTML = calendarBoxHTML;
// topページのfooterの日付
var todayMonth = today.getMonth()+1
footerDate.innerHTML = `${today.getFullYear()}年　${todayMonth}月`


// 今日の月の１日というDateオブジェクトを取ってくる
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);
// console.log(showDate.getMonth()) //today.getMonth()なのに３が取得できる！？

// 前の月表示
function prev(){
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
}
// 次の月表示
function next(){
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
}

// カレンダー表示
function showProcess(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    document.getElementById('calDate').innerHTML = `${year}年${month+1}月`;

    var calendar = createProcess(year, month);
    document.getElementById('calendar').innerHTML = calendar;
}

function createProcess(year, month){
    //曜日
    var calendar = `<table><tr>`;
    for(let i=0; i<week.length; i++){
        calendar += `<th class="week">${week[i]}</th>`;
    }
    calendar += `</tr>`;

    var count = 0;
    //○月1日の曜日
    var startDayOfWeek = new Date(year, month, 1).getDay();
    // 月末の日付（=次の月の0日目）
    var endDate = new Date(year, month + 1, 0).getDate();
    // 先月末の日付（=今月の0日目）
    // var lastMonthEndDate = new Date(year, month, 0).getDate();
    // その月の列の数
    // Math.ceil = その数を超える最小の整数
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);

    // 縦列
    for(let i=0; i<row; i++){
        // まずtrを追加
        calendar += `<tr>`;
        // 横列
        for(let j=0; j<week.length; j++){
            // 1日の前日までは空のtdをつける
            if (i == 0 && j < startDayOfWeek) {
                calendar += `<td></td>`;
            }
            else if (count >= endDate) {
                // 末日以降、空のtdをつける
                count++;
                calendar += `<td></td>`;
            // 他の日付はcountで順番につけていく
            }
            else{
                count++;
                // 今日の日付にはtodayクラスをつける
                if(year == today.getFullYear()
                  && month == (today.getMonth())
                  && count == today.getDate()){
                    calendar += `<td id="${year}_${month+1}_${count}" class='date today selected' onclick="check(${year},${month},${count})">${count}</td>`;
                }else{
                    // それ以外の日付にはなんのクラスもつけない
                    calendar += `<td id="${year}_${month+1}_${count}" class='date other_date' onclick="check(${year},${month},${count})">${count}</td>`;
                }
            }
        }
        // 最後にtrで閉じる
        calendar += `</tr>`
    }
    // createProcess()のところに変数calenderが入る
    // returnの後ろの値があることでcreateProcess()に値が入る
    return calendar;
}
// 日付をクリックすると、recordに戻り、calendarBoxにその日付が入る
function check(year, month, date){
    const selectDate = document.getElementById(`${year}_${month+1}_${date}`);
    const everyDate = document.getElementsByClassName("date");
    for(let i=0; i<everyDate.length; i++){
        everyDate[i].classList.remove("selected")
    }
    selectDate.classList.add("selected")
    calendarBoxHTML = `${year}年${month+1}月${date}日`
}
calendarButton.addEventListener("click",function(){
    // recordに戻る
    calendarWrapper.classList.remove("active")
    backButton.classList.remove("active")
    record.classList.add("active")
    closeButton.classList.add("active")
    // calendarBoxの表示をクリックした日付にする
    calendarBox.innerHTML = calendarBoxHTML;
})
// 読み込まれた時点でcalendarを表示するためのjsを読み込む
calendarBox.addEventListener("click",showProcess(today))




// ５．ツイッター
// クリックしたらチェックの背景を青色にする。二回クリックしたら白に戻す。
// チェックの背景を変更する関数
function addCheck(number) {
    const checkItems = document.getElementsByName("check_item")
    checkItems[number].classList.toggle("active")
}

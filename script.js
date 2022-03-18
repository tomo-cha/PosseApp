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
})
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



// カレンダー


// ツイッター
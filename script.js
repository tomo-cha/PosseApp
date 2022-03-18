'use strict'

// pcでヘッダーの記録・投稿をクリックしたらoverlay、モーダル、recordが表示される
// smでフッターの記録・投稿をクリックしたらoverlay、モーダル、recordが表示される
const headerButton = document.getElementById("headerButton");
const overlay = document.getElementById("overlay")
const modal = document.getElementById("modal")
const record = document.getElementById("record")
headerButton.addEventListener("click",function(){
    overlay.classList.add("active")
    modal.classList.add("active")
    record.classList.add("active")
})
const footerButton = document.getElementById("footerButton")
footerButton.addEventListener("click",function(){
    overlay.classList.add("active")
    modal.classList.add("active")
    record.classList.add("active")
})
// モーダルで学習日をクリックしたらカレンダーが表示される

// モーダルで記録・投稿をクリックしたらローディングが１秒表示され、その後完了画面が表示される
const modalButton = document.getElementById("modalButton")
const load = document.getElementById("load")
const complete = document.getElementById("complete")

modalButton.addEventListener("click", function(){
    record.classList.remove("active")
    load.classList.add("active")
    setTimeout(function(){
        load.classList.remove("active")
        complete.classList.add("active")
    },1000)
})
// モーダルで記録・投稿をクリックしたときエラーなら、エラー画面が表示される

// ×印もしくはoverlayがクリックされるとoverlayとモーダルが隠される
const close = document.getElementById("close")
close.addEventListener("click", function(){
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
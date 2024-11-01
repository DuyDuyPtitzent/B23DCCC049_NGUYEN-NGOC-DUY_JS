//Thay đổi nội dung của nhiều phần tử
document.addEventListener("DOMContentLoaded", function updateParagraphs(){
let paragraphs = document.querySelectorAll("p")
paragraphs.forEach(function (paragraphs)//forEach lặp qua từng phần tử <p> và thay đổi nội dung văn bản bằng innerText.
{
    paragraphs.innerText="ĐẢNG CỘNG SẢN VIỆT NAM QUANG VINH MUÔN NĂM"
})
})
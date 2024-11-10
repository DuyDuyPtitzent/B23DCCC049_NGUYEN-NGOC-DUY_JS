//Ddems số lượng phần tử trong DOM
document.addEventListener("DOMContentLoaded", function(){
const divCountBtn = document.getElementById("divcountBtn")
divCountBtn.addEventListener("click", function(){
const divCount = document.querySelectorAll("div").length//.length được sử dụng để đếm số lượng phần tử trong NodeList.
alert("Số lượng div trên trang là: " + divCount)
})
})
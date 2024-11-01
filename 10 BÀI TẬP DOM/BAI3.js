//Thêm phần tử vào DOM 
document.addEventListener("DOMContentLoaded", function(){
    var ul = document.getElementById("list") 
    var li = document.createElement("li") 
    li.textContent ="Sinh viên UDU"
    ul.appendChild(li)
})
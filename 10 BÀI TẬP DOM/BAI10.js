//Thay đổi nội dung bằng cách thao tác với class
document.addEventListener("DOMContentLoaded", function(){
const items =document.querySelectorAll(".item")
items.forEach(function (item) {
    item.textContent = "Thông minh"
    
})

})
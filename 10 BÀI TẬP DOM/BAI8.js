//Tạo một bảng động 
document.addEventListener("DOMContentLoaded",function(){
//Tao bang
const table = document.createElement("table")
table.border = "1"
//Tao 3 hang
for (let i = 0; i < 3; i++){
    const row = document.createElement("tr")
//Tao 3 cot cho moi hang
for ( let j = 0; j < 3; j++){
    const cell = document.createElement("td")
        cell.textContent = "Nguyen Ngoc Duy"
    row.appendChild(cell)
}
//them hang vao bang
table.appendChild(row)

}
//them bang vao phan tu co id la table-container
const container = document.getElementById("table-container")
container.appendChild(table)
})
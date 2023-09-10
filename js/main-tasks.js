let categories = document.getElementById("Category_Id");
let categoriesData =[];
getCategories();
function getCategories(){
fetchText();
let categoryList = "";
for (const item of categoriesData) {
    categoryList+=`<option value="${item.Category_Id}">${item.Category_Name}</option>`;
}
categories.innerHTML = categoryList ;
}

async function fetchText() {
    let response = await fetch("/Categories/List");
    let Data = await response.json();
    categoriesData = Data;
}
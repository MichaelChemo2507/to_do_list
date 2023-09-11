let categories = document.getElementById("Category_Id");
let tableTbody = document.getElementsByTagName("tbody")[0];
let dataTable=[];

getCategories();
fetchText();
addRow();

async function fetchText() {
    let response = await fetch("http://localhost:2506/Tasks/List");
    let Data = await response.json();
    dataTable = Data;
    console.log(dataTable);
    addRow();
}
function addRow() {
    let rows = "";
    for (const i of dataTable) {
        rows += "<tr>";
        rows += `<td onclick=updateLine(${i.Mission_Id})> Edit </td>`;
        rows += `<td>${i.Mission_Id}</td>`;
        rows += `<td>${i.Missions_Name}</td>`;
        rows += `<td>${i.Owner_Id}</td>`;
        rows += `<td>${i.Due_Date}</td>`;
        rows += `<td>${i.Done_Date}</td>`;
        rows += `<td>${i.Category_Id}</td>`;
        rows += `<td>${i.Creator_Id}</td>`;
        rows += `<td onclick="deleteLine(${i.Mission_Id})"> Delete </td>`;
        rows += "</tr>";
    }
    tableTbody.innerHTML = rows; //  במקרה שלנו אני ארצה להוסיף שורות דרך הjs כי יצירת הטבלה תהיה דינמית ולא מקובעת
}
/*async function deleteLine(index) {
    let response = await fetch(`http://localhost:2506/Categories/Delete/${index}`,{
        method:'DELETE',
    });
    fetchText()
}
async function updateLine(index) {
    let name = document.getElementById("nameInp").value;
    let response = await fetch(`http://localhost:2506/Categories/Update`,{
        method:'PATCH',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
            name:name,row_id:index
        })
    });
    fetchText();
}*/
async function getCategories(){
    let response = await fetch("/Categories/List");
    let data = await response.json();
    console.log(data);
let categoryList = "";
for (const item of data) {
    categoryList+=`<option value="${item.Category_Id}">${item.Category_Name}</option>`;
}
categories.innerHTML = categoryList ;
}

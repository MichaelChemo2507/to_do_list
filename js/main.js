let tableTbody = document.getElementsByTagName("tbody")[0];
let dataTable=[];

fetchText();
addRow();


async function addLine() {
    let name = document.getElementById("nameInp").value;
    let response = await fetch('http://localhost:2506/Categories/Add',{
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
            name:name
        })
    });
    fetchText();
}
async function fetchText() {
    let response = await fetch("http://localhost:2506/Categories/List");
    let Data = await response.json();
    dataTable = Data;
    addRow();
}
function addRow() {
    let rows = "";
    for (const i of dataTable) {
        rows += "<tr>";
        rows += `<td onclick=updateLine(${i.Category_Id})> Edit </td>`;
        rows += `<td>${i.Category_Name}</td>`;
        rows += `<td>${i.Category_Id}</td>`;
        rows += `<td onclick="deleteLine(${i.Category_Id})"> Delete </td>`;
        rows += "</tr>";
    }
    tableTbody.innerHTML = rows; //  במקרה שלנו אני ארצה להוסיף שורות דרך הjs כי יצירת הטבלה תהיה דינמית ולא מקובעת
}
async function deleteLine(index) {
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
}
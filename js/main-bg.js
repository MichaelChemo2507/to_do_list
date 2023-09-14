let tableTbody = document.getElementsByTagName("tbody")[0];
let dataTable=[];

fetchText();
addRow();


async function fetchText() {
    let response = await fetch("http://localhost:2506/bg/List");
    let Data = await response.json();
    dataTable = Data;
    addRow();
}
function addRow() {
    let rows = "";
    for (const i of dataTable) {
        rows += `<tr style="background-color: ${i.bg_color};color: ${i.bg_text_color}" >`;
        rows += `<td id="update" onclick=updateLine(${i.id})><input form="tasksForm" type="submit" value="Edit"> </td>`;
        rows += `<td>${i.id}</td>`;
        rows += `<td>${i.bg_name}</td>`;
        rows += `<td>${i.bg_color}</td>`;
        rows += `<td>${i.bg_text_color}</td>`;
        rows += `<td onclick="deleteLine(${i.id})"> Delete </td>`;
        rows += "</tr>";
    }
    tableTbody.innerHTML = rows; //  במקרה שלנו אני ארצה להוסיף שורות דרך הjs כי יצירת הטבלה תהיה דינמית ולא מקובעת
}
async function deleteLine(index) {
    console.log(index)
    let response = await fetch(`http://localhost:2506/bg/Delete/${index}`,{
        method:'DELETE',
    });
    fetchText()
}
function updateLine(index) {
    document.getElementById("tasksForm").action = `http://localhost:2506/bg/Update/${index}`;
    fetchText();
}


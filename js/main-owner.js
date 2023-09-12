let tableTbody = document.getElementsByTagName("tbody")[0];
let dataTable=[];

fetchText();
addRow();


async function fetchText() {
    let response = await fetch("http://localhost:2506/owner/List");
    let Data = await response.json();
    dataTable = Data;
    addRow();
}
function addRow() {
    let rows = "";
    for (const i of dataTable) {
    console.log(i.Owner_id)
        rows += "<tr>";
        rows += `<td id="update" onclick=updateLine(${i.Owner_Id})><input form="tasksForm" type="submit" value="Edit"> </td>`;
        rows += `<td>${i.Owner_Id}</td>`;
        rows += `<td>${i.Owner_Name}</td>`;
        rows += `<td>${i.UserName}</td>`;
        rows += `<td>${i.Password}</td>`;
        rows += `<td onclick="deleteLine(${i.Owner_Id})"> Delete </td>`;
        rows += "</tr>";
    }
    tableTbody.innerHTML = rows; //  במקרה שלנו אני ארצה להוסיף שורות דרך הjs כי יצירת הטבלה תהיה דינמית ולא מקובעת
}
async function deleteLine(index) {
    console.log(index)
    let response = await fetch(`http://localhost:2506/owner/Delete/${index}`,{
        method:'DELETE',
    });
    fetchText()
}
async function updateLine(index) {
    document.getElementById("tasksForm").action = `http://localhost:2506/owner/Update/${index}`;
    fetchText();
}


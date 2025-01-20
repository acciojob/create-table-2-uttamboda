function createTable() {
    //Write your code here
	  const rows = prompt("Input number of rows");
    const cols = prompt("Input number of columns");

    const rowCount = parseInt(rows, 10);
    const colCount = parseInt(cols, 10);

    if (isNaN(rowCount) || isNaN(colCount) || rowCount <= 0 || colCount <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    const table = document.getElementById("myTable");

    table.innerHTML = "";

    for (let i = 0; i < rowCount; i++) {
        const row = table.insertRow(i); 
        for (let j = 0; j < colCount; j++) {
            const cell = row.insertCell(j);  
            cell.textContent = `Row-${i} Column-${j}`;  
        }
    }
  
}

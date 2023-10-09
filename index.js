$(document).ready(function () {
    
    $("#csvFileInput").change(function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const contents = e.target.result;
                parseCSV(contents);
            };
            reader.readAsText(file);
        }
    });

    function parseCSV(csv) {
        const lines = csv.split("\n");
        const headers = lines[0].split(",");
        csvData = [];

        for (let i = 1; i < lines.length; i++) {
            const currentLine = lines[i].split(",");
            if (currentLine.length === headers.length) {
                const row = {};
                for (let j = 0; j < headers.length; j++) {
                    row[headers[j]] = currentLine[j];
                }
                csvData.push(row);
            }
        }
        displayData();
    }
    
    function displayData() {
        const table = $("#csvTable");
        table.find("thead").empty();
        table.find("tbody").empty();
        if (csvData.length === 0) {
            table.append("<tr><td colspan='" + csvData.length + "'>No data available</td></tr>");
            return;
        }
        const headerRow = $("<tr>");
        for (const header in csvData[0]) {
            headerRow.append("<th>" + header + "</th>");
        }
        table.find("thead").append(headerRow);       
        csvData.forEach(function (row) {
            const rowElement = $("<tr>");
            for (const header in row) {
                rowElement.append("<td>" + row[header] + "</td>");
            }
            table.find("tbody").append(rowElement);
        });              
        $("#csvTable").dataTable();
    }
});

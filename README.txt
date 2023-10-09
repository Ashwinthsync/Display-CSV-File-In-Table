HTML
1.In html I link Bootstrap,Datatables.css.in header section
2.Created a input type file in order to upload a csv file, and mentioned id="csvFileInput" to call an event function from Javascript code.
3.In table tag I created an id="csvTable" This id connects a $("#csvTable").dataTable(); in javascript code for sorting , Pagination, Search, and to Show Entries . Finally class="display compact" for how HTML elements are to be displayed on screen.
4.Added a code source index.js alomg with latest Jquery package and dataTables.js to display csv file in a table in web Page.

Javascript
1.$(document).ready(function () { ... });: This is a jQuery function that ensures the enclosed code is executed when html is completely ready.
2.initializing an empty array that's because to store the parsed csv data
3.$("#csvFileInput").change(function () { ... });: This code selects an HTML element with the id attribute set to "csvFileInput" and attaches an event listener for the "change" event. This typically corresponds to an input element where the user can select a file.
4.function parseCSV(csv) {........} : This function takes a CSV string as input and parses it into an array of objects, where each object represents a row of the CSV data with the headers as keys. After parsing.
5.displayData(); After parsing the CSV data, this line calls a function displayData() which is presumably used to display or manipulate the parsed data. 
6.function displayData() {......} : The displayData function takes the parsed CSV data and dynamically generates an HTML table for displaying the data. If there's no data, it displays a message indicating that --no data is available--. 
7.$("#csvTable").dataTable();: I used a data table using a jQuery plugin called "dataTable." This plugin is used to enhance the functionality and interactivity of HTML tables for the table with enhanced features.

CSS
1.added a latest bootstrap (https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css) for framework and developing responsive, mobile-first websites.
2.added style for table like Hover,cell-border,striped rows,ordered column etc by adding this link in html (https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css).
3.In index.css style is added for body and head. 

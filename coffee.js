let id = 0;
//click adds an event and initiates the row
document.getElementById('add').addEventListener('click', () => {
//uses ID to add a row to the table  
 let table = document.getElementById('list');
  let row = table.insertRow(1);
  row.setAttribute('id', `item-${id}`);
  //uses ID's to add elements to specific rows
  row.insertCell(0).innerHTML = document.getElementById('coffee-size').value;
  row.insertCell(1).innerHTML = document.getElementById('coffee-flavor').value;
  row.insertCell(2).innerHTML = document.getElementById('coffee-temp').value;
  row.insertCell(3).innerHTML = document.getElementById('coffee-make').value;
  let actions = row.insertCell(4);
  //document.getElementById('coffee-order').value = '';
});
//adds color to background
document.body.style.backgroundColor= "lightblue";

divCards = document.getElementById("divCards");
divCards.hidden = true;

console.log("Vida" + divCards.hidden);

tableBody = document.getElementById("tableBody");
tableDescription = document.getElementById("tableDescription");

const img = document.createElement("img");
img.src = "https://lenguajejs.com/assets/logo.svg";
img.alt = "Logo Javascript";


i=0
json = getCards();
json.forEach(element => {
    i+=1
    tableBody.insertAdjacentHTML("beforeend", `<th scope='row'>${i}</th>
    <td>${element.name}</td>
    <td>${element.description}</td>
    <td>${element.invert}</td>`);
});

function clicked(){
    if(divCards.hidden == true){
        divCards.hidden = false;
    } else {
        divCards.hidden = true;
    }
}

function searchCard() {
    divCards.hidden = false;
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

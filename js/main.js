window.addEventListener("load", (event) => {
  divCards = document.getElementById("divCards");
  divCards.hidden = true;
  preload();
  readCards();
});

tableBody = document.getElementById("tableBody");
tableDescription = document.getElementById("tableDescription");


json = getCards();
const list = [];
const list2 = [];


function showTableCards() {
  if (divCards.hidden == true) {
    divCards.hidden = false;
  } else {
    divCards.hidden = true;
  }
}



function desordenarLista() {
  let temp;
  let elementa;
  for (i = 0; i <= list.length; i++) {
    elementa = generateRandom(list.length);
    temp = list[elementa];
    element2 = generateRandom(list.length);

    if (elementa != element2) {
      list[elementa] = list[element2];
      list[element2] = temp;
    }
  };
}

function eliminarCard(index) {
  list.splice(index, 1);
}

function readCards() {
  temp = 0;
  for (i = 1; i <= 10; i++) {
    let element = generateRandom(list.length);

    if (generateRandom(2) == 1) {
      list[element].invertida = false;
    }
    else {
      list[element].invertida = true;
    }

    list2.push(list[element]);
    eliminarCard(element);
  }
  list2.reverse();
  preloadabanico();
}



function interpretacion() {
  for (i = 0; i <= list2.length; i++) {
    switch (i) {
      case 1:
        console.log("La circustancia en el tiempo presente es:" + list2[i].name);
        if (list2[i].invertida == false) {
          console.log("Que significa: " + list2[i].description);
        } else {
          console.log("Que significa: " + list2[i].invert);
        }
        break;

      case 2:
        console.log("El pasado reciente:" + list2[i].name);
        if (list2[i].invertida == false) {
          console.log("Que significa: " + list2[i].description);
        } else {
          console.log("Que significa: " + list2[i].invert);
        }
        break;

      case 3:
        console.log("Tus actitudes en el pasado:" + list2[i].name);
        if (list2[i].invertida == false) {
          console.log("Que significa: " + list2[i].description);
        } else {
          console.log("Que significa: " + list2[i].invert);
        }
        break;

      case 4:
        console.log("Algo que probablemente ocurrira pronto:" + list2[i].name);
        if (list2[i].invertida == false) {
          console.log("Que significa: " + list2[i].description);
        } else {
          console.log("Que significa: " + list2[i].invert);
        }
        break;

        case 5:
          console.log("PINACULO: Resultado posible (si todo continua como está): " + list2[i].name);
          if (list2[i].invertida == false) {
            console.log("Que significa: " + list2[i].description);
          } else {
            console.log("Que significa: " + list2[i].invert);
          }
          break;

          case 6:
          console.log("Logoros que puedes obtener si se efectuan cambios: " + list2[i].name);
          if (list2[i].invertida == false) {
            console.log("Que significa: " + list2[i].description);
          } else {
            console.log("Que significa: " + list2[i].invert);
          }
          break;

          case 7:
          console.log("Lo que deberia cambiar o resolver: " + list2[i].name);
          if (list2[i].invertida == false) {
            console.log("Que significa: " + list2[i].description);
          } else {
            console.log("Que significa: " + list2[i].invert);
          }
          break;

          case 8:
          console.log("La persona que te ayudara en ese proceso: " + list2[i].name);
          if (list2[i].invertida == false) {
            console.log("Que significa: " + list2[i].description);
          } else {
            console.log("Que significa: " + list2[i].invert);
          }
          break;

          case 9:
          console.log("Los recursos que ya tienes: " + list2[i].name);
          if (list2[i].invertida == false) {
            console.log("Que significa: " + list2[i].description);
          } else {
            console.log("Que significa: " + list2[i].invert);
          }
          break;

          case 10:
          console.log("Los obstaculos que ya tienes: " + list2[i].name);
          if (list2[i].invertida == false) {
            console.log("Que significa: " + list2[i].description);
          } else {
            console.log("Que significa: " + list2[i].invert);
          }
          break;

          case 11:
          console.log("Resultado esperable al final del proceso: " + list2[i].name);
          if (list2[i].invertida == false) {
            console.log("Que significa: " + list2[i].description);
          } else {
            console.log("Que significa: " + list2[i].invert);
          }
          break;
    }
  };
}





function llenarLista(element) {
  list.push(element);
}


function preload() {
  i = 0;
  json.forEach(element => {
    i += 1
    tableBody.insertAdjacentHTML("beforeend", `<th scope='row'>${element.id + 1}</th>
      <td>${element.name}</td>
      <td>${element.description}</td>
      <td>${element.invert}</td>`);
    llenarLista(element);
  });
}


div = document.getElementById("padre");

function preloadabanico() {
  i=0;
  list2.forEach(element => {
    div.insertAdjacentHTML("beforeend", `<div class='pruebaCarta pruebaCarta${i+1}'>
      <p>${element.name}</p>
    </div>`);
    i+=1;
  });
}






function searchCard() {
  divCards.hidden = false;
  var input, filter, table, tr, td, th, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  th = table.getElementsByTagName("th");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    thh = th[i].getElementsByTagName("td")[0];

    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
    else if (thh) {
      txtValue = thh.textContent || thh.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


function generateRandom(max) {
  return parseInt((Math.random() * max), 10);
}
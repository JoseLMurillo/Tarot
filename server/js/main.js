window.addEventListener("load", (event) => {
    divCards = document.getElementById("divCards");
    cartas = document.getElementById("padre");
    divCards.hidden = true;
    preload();
  });
  
  function consola(elemento) {
    img = document.getElementById(elemento.id);
  
    list2.forEach(element => {
      if(element.name == elemento.id){
        img.src=`${element.img}`;
      }
    });
    }
  
  
  tableBody = document.getElementById("tableBody");
  tableDescription = document.getElementById("tableDescription");
  
  let interpretaciones = false;
  json = getCards();
  const list = [];
  const list2 = [];
  
  
  function showTableCards() {
    if (divCards.hidden == true) {
      divCards.hidden = false;
  
      if(cartas.hidden == false){
        showCards();
      }
  
    } else {
      divCards.hidden = true;
    }
  }
  
  
  function showCards() {
    if (cartas.hidden == true) {
      cartas.hidden = false;
  
      if(divCards.hidden == false){
        showTableCards();
      }
  
    } else {
      cartas.hidden = true;
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
    showCards();
  
    if(interpretaciones != true){
      temp = 0;
      for (i = 1; i <= 11; i++) {
        let element = generateRandom(list.length);
        numerito = generateRandom(2);
        if (numerito == 1) {
          list[element].invertida = false;
        }
        if(numerito != 1) {
          list[element].invertida = true;
        }
    
        list2.push(list[element]);
        eliminarCard(element);
      }
      list2.reverse();
      
      preloadabanico();
  
      interpretaciones = true;
    }
  }
  
  let significados = ["La circustancia en el tiempo presente", "El pasado reciente", "Tus actitudes en el pasado", "Algo que probablemente ocurrira pronto", "PINACULO: Resultado posible (si todo continua como está)", "Logoros que puedes obtener si se efectuan cambios", "Lo que deberia cambiar o resolver", "La persona que te ayudara en ese proceso", "Los recursos que ya tienes", "Los obstaculos que ya tienes", "Resultado esperable al final del proceso"]
  
  function interpretacion() {
    for (i = 0; i <= list2.length; i++) {
      switch (i) {
  
            case 11:
            console.log(": " + list2[i].name);
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
        <td><img src="${element.img}" alt="${element.name}"></td>
        <td>${element.name}</td>
        <td>${element.description}</td>
        <td>${element.invert}</td>`);
      llenarLista(element);
    });
  }
  
  
  div = document.getElementById("padre");
  
  
  
  
  function insertHtml(element, hijo, id){
  
    switch(hijo){
      case 1:
        div = document.getElementById("hijo");
        break;
  
      case 2:
        div = document.getElementById("hijo1");
        break;
  
      case 3:
        div = document.getElementById("hijo2");
        break;
  
      case 4:
        div = document.getElementById("hijo3");
        break;
  
      case 5:
        div = document.getElementById("hijo4");
        break;
  
      case 6:
        div = document.getElementById("hijo5");
        break;
  
      default:
        console.log("Error: No se pueden cargar los recursos.")
        break;
    }
  
    if(element.invertida == true){
      div.insertAdjacentHTML("beforeend", `
    <div id="card${i}" class="card mb-3 col" style="max-width: 540px;">
      <div class="row g-0">
        <div class="">
          <img onmouseover="consola(this)" id="${element.name}" style="transform: rotate(180deg);" src="https://tarotinteractivo.gratis/wp-content/uploads/2019/09/reverso-tarot-del-trabajo.jpg" class="img-fluid rounded-start" alt="${element.name}"> 
        </div>
        <div id="anime" class="col-md-8" style="z-index: 1;">
          <div class="card-body">
            <h5 class="card-title">${i}) ${element.name} INVERTIDA</h5>
            <p class="card-text">${element.invert}</p>
            <p class="card-text"><small class="text-light">${significados[id-1]}</small></p>
          </div>
        </div>
      </div>
    </div>`);
    }
  
    if(element.invertida == false) {
      div.insertAdjacentHTML("beforeend", `
    <div id="card${i}" class="card mb-3 col" style="max-width: 540px;">
      <div class="row g-0">
        <div class="">
          <img onmouseover="consola(this)" id="${element.name}" src="https://tarotinteractivo.gratis/wp-content/uploads/2019/09/reverso-tarot-del-trabajo.jpg" class="img-fluid rounded-start" alt="${element.name}"> 
        </div>
        <div id="anime" class="col-md-8" style="z-index: 1;">
          <div class="card-body">
          <h5 class="card-title">${i}) ${element.name}</h5>
          <p class="card-text">${element.description}</p>
            <p class="card-text"><small class="text-light">${significados[id-1]}</small></p>
          </div>
        </div>
      </div>
    </div>`);
    }
  }
  
  function preloadabanico() {
  
    i=0;
  
    list3 = [list2[0], list2[1]];
  
    list3.forEach(element => {
      i+=1;
      insertHtml(element, 1, i);
    });
  
  
    list3 = [list2[2], list2[3]];
  
    list3.forEach(element => {
      i+=1;
      insertHtml(element, 2, i);
    });
  
  
    list3 = [list2[4], list2[5]];
  
    list3.forEach(element => {
      i+=1;
      insertHtml(element, 3, i);
    });
  
  
    list3 = [list2[6], list2[7]];
  
    list3.forEach(element => {
      i+=1;
      insertHtml(element, 4, i);
    });
  
    list3 = [list2[8], list2[9]];
  
    list3.forEach(element => {
      i+=1;
      insertHtml(element, 5, i);
    });
  
    list3 = [list2[10], list2[10]];
  
    list3.forEach(element => {
      i+=1;
      insertHtml(element, 6, i);
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
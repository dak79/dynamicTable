let search = document.querySelector('#btnSearch');
let clear = document.querySelector('#btnClear');
let focus = document.querySelector('#search');
let create = document.querySelector('#btnCreate');


let city = ['Ankara', 'Istanbul', 'Bologna', 'Reggio Emilia', 'Cape Town', 'Londra', 'Ferrara', 'Rotterdam', 'Atene', 'Copenhagen', 'Budapest', 'Lisbona', 'Parigi', 'Beirut', 'Berlino', 'Sarajevo', 'Sebrenica', 'Yerevan', 'Belgrado', 'Skopje', 'Damasco', 'Çanakkale', 'Mitilene', 'Lubiana', 'Marrakesh', 'Weimar', 'Ohrid', 'Salonicco', 'Göreme', 'Diyarbakır']; //30

let name = ['Daniele', 'Gaye', 'Kaya', 'Ivan', 'Francesco', 'Giulia', 'Boran', 'Mario', 'Betul', 'Patrizia', 'Villiam', 'Andrea', 'Luca', 'Can', 'Atakan', 'Marco', 'Massimo', 'Ilic', 'Nazim', 'Michele', 'Ernesto', 'Anna', 'Marta', 'Aldo', 'Giuseppe', 'Eleonora', 'Sara', 'Alessia', 'Seçkin', 'Veli']; // 30

let surname = ['Campari', 'Çetinkaya', 'Pecorari', 'Bagni', 'Gentile', 'Güngör', 'Mannucci', 'Önaran', 'Panciroli', 'Sassi', 'Rosselli', 'Karacan', 'Akarsu', 'Negrello', 'Bonzi', 'Vezzosi', 'Comunale', 'Rinaldi', 'Bassi', 'Vitola', 'Pacifico', 'Baglio', 'Malatesta', 'Verdi', 'Bellotti', 'Marchi', 'Caner', 'Veli', 'Vorcelli', 'Venturelli']; //30

// Event Listener
focus.addEventListener('focus', clearField);
clear.addEventListener('click', clearSearch);
search.addEventListener('click', searchWord);
create.addEventListener('click', createTable);

//Costruire un oggetto con accostamenti casuali di città, nomi, cognomi.
class RandomList {
  constructor(name, surname, city) {
    this.name = name;
    this.surname = surname;
    this.city = city;
  }
}

function createTable() {
  let n = document.querySelector('#nbRows').value;
  let contact;
  for (i = 0; i < n; i++) {
    a = Math.round(Math.random() * 29);
    b = Math.round(Math.random() * 29);
    c = Math.round(Math.random() * 29);
    contact = new RandomList(name[a], surname[b], city[c]);
    let table = document.querySelector("#myTable");
    let row = table.insertRow();
    let cell1 = row.insertCell();
    cell1.innerHTML = name[a];
    let cell2 = row.insertCell();
    cell2.innerHTML = surname[b];
    let cell3 = row.insertCell();
    cell3.innerHTML = city[c];
  }

}

//search field function
function searchWord() {
  let searchedWord = document.querySelector('#search').value;
  let table = document.querySelector('#myTable');
  let test = document.querySelector('#btnClear');
  for (i = 0; i < table.rows.length; i++) {
    let cells = table.rows[i].cells.length;
    for (j = 0; j < cells; j++) {
      let cellsContent = table.rows[i].cells[j].innerHTML;
      if (searchedWord === cellsContent) {
        let high = table.rows[i];
        high.classList.add('find');
        test.classList.add('h');
      }
    }
  }
  if (test.matches('.h')) {

  } else {
    let warning = document.querySelector('#warning');
    warning.style.fontSize = "2em";
    warning.style.color = "red";
    warning.style.fontWeight = "bold";
    warning.innerHTML = "NOT FOUND";
  }
}

//clear search
function clearSearch() {
  let searchedWord = document.querySelector('#search').value;
  let table = document.querySelector('#myTable');
  let test = document.querySelector('#btnClear');

  for (i = 0; i < table.rows.length; i++) {
    let cells = table.rows[i].cells.length;
    for (j = 0; j < cells; j++) {
      let cellsContent = table.rows[i].cells[j].innerHTML;
      if (searchedWord === cellsContent) {
        let high = table.rows[i];
        high.classList.remove('find');
        test.classList.remove('h');
      }
    }
  }
  if (test.matches('.h')) {

  } else {
    let warning = document.querySelector('#warning');
    warning.innerHTML = "";
  }
}

//clear input field
function clearField() {
  return this.value = "";
}

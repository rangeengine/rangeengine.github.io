function searchBar() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase().replace(/^\s+|\s+$/g, '').split(' ');
  let x = document.getElementsByClassName('artigos');
  let y = document.getElementsByClassName('name-pdt');
  let z = document.getElementsByClassName('class-pdt');
  var noResults = document.getElementsByClassName('no-results');

  for (let i = 0; i < y.length; i++) {
    let yz = (y[i].innerHTML + ' ' + z[i].innerHTML).toLowerCase();
    if (input.some(word => !yz.includes(word))) {
      x[i].style.display="none";
    }
    else {
      x[i].style.display="inline-flex";
    }
  }
}
function writeTSB() {
  var searchBox = document.getElementById("searchbar");
  searchBox.value = "Template";
  searchBar()
}
function writeCSB() {
  var searchBox = document.getElementById("searchbar");
  searchBox.value = "Component";
  searchBar()
}
function writeASB() {
  var searchBox = document.getElementById("searchbar");
  searchBox.value = "Addon";
  searchBar()
}
function writeSSB() {
  var searchBox = document.getElementById("searchbar");
  searchBox.value = "Script";
  searchBar()
}
function writeSHSB() {
  var searchBox = document.getElementById("searchbar");
  searchBox.value = "Shader";
  searchBar()
}
function writeASSB() {
  var searchBox = document.getElementById("searchbar");
  searchBox.value = "Asset";
  searchBar()
}
function writeTUSB() {
  var searchBox = document.getElementById("searchbar");
  searchBox.value = "Tutorial";
  searchBar()
}

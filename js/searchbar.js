function searchBar() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase().replace(/^\s+|\s+$/g, '');
  let x = document.getElementsByClassName('artigos');
  let y = document.getElementsByClassName('namepdt');

  for (i = 0; i < y.length; i++) {
    if (!y[i].innerHTML.toLowerCase().includes(input)) {
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
}
function writeASB() {
  var searchBox = document.getElementById("searchbar");
  searchBox.value = "Addon";
}
function writeSSB() {
  var searchBox = document.getElementById("searchbar");
  searchBox.value = "Script";
}
function writeSHSB() {
  var searchBox = document.getElementById("searchbar");
  searchBox.value = "Shader";
}
function writeTUSB() {
  var searchBox = document.getElementById("searchbar");
  searchBox.value = "Tutorial";
}

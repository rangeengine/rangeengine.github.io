function searchBar() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('artigos');
  let y = document.getElementsByClassName('namepdt');
  let z = document.getElementsByClassName('descpdt');

  for (i = 0; i < y.length; i++) {
    if (!y[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display="none";
    }
    else {
      x[i].style.display="inline-flex";
    }
  }
  for (i = 0; i < z.length; i++) {
    if (!z[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display="none";
    }
    else {
      x[i].style.display="inline-flex";
    }
  }
}
function writeTSB() {
  var defaultText = "Template";
  var searchBox = document.getElementById("searchbar");
  searchBox.value = defaultText;
}
function writeASB() {
  var defaultText = "Addon";
  var searchBox = document.getElementById("searchbar");
  searchBox.value = defaultText;
}
function writeSSB() {
  var defaultText = "Script";
  var searchBox = document.getElementById("searchbar");
  searchBox.value = defaultText;
}
function writeSHSB() {
  var defaultText = "Shader";
  var searchBox = document.getElementById("searchbar");
  searchBox.value = defaultText;
}
function writeTUSB() {
  var defaultText = "Tutorial";
  var searchBox = document.getElementById("searchbar");
  searchBox.value = defaultText;
}

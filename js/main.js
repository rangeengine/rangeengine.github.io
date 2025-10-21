document.addEventListener('DOMContentLoaded', () => {

  const updateCopyrightYear = () => {
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  };

  function initFaqAccordion() {
    var coll = document.getElementsByClassName("clps-bt");
    if (coll.length === 0) {
      return;
    }
        
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active_clps");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          content.style.padding = '0px 15px';
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.padding = '10px 15px';
        }
      });
    }
  }

  const loadHTML = (selector, url, callback) => {
    const element = document.querySelector(selector);
    if (element) {
      fetch(url)
        .then(response => response.ok ? response.text() : Promise.reject('File not found.'))
        .then(data => {
          element.innerHTML = data;
          if (callback) {
            callback();
          }
        })
        .catch(error => {
          console.error(`Failed to load ${url}:`, error);
        });
    }
  };

  loadHTML('#header', 'header.html');
  loadHTML('#footer', 'footer.html', updateCopyrightYear);
  loadHTML('#faq', 'faqdiv.html', initFaqAccordion);
});
var portfolio = document.getElementById('js-portfolio');
var portfolioItems = document.getElementsByClassName('js-load-content');
var totalColumns = 3;
var lastLoad = '';

///////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////

function index(element){
  var sib = element.parentNode.childNodes;
  var n = 0;
  for (var i=0; i<sib.length; i++) {
    if (sib[i]==element) return n;
    if (sib[i].nodeType==1) n++;
  }
  return -1;
}

function findPosition(object) {
  // index needs to handle visibility
  var linkPosition = index(object);
  return linkPosition + (totalColumns - (linkPosition % totalColumns));
}

function activateContent(object) {
  object.classList.add('active');
  object.setAttribute("style","height:" + object.scrollHeight + "px");
}

function deactivateContent(object) {
  object.classList.remove('active');
  object.removeAttribute('style');
}

function insertContent(object, callback) {
  var contentElement = document.getElementById(object.getAttribute('href'));
  var contentPosition = findPosition(object);
  portfolio.insertBefore(contentElement, portfolio.children[contentPosition]);

  callback(contentElement);
}

function clearContent(object) {
  portfolio.appendChild(object);
}

function removeContent(object, callback) {
  var content = document.getElementById(object);

  deactivateContent(content);
  callback(content);
}

function loadContent(e) {
  e.preventDefault();

  if (lastLoad != '') {
    removeContent(lastLoad, clearContent);
  }

  if (lastLoad != this.getAttribute('href')) {
    insertContent(this, activateContent);
    lastLoad = this.getAttribute('href');
  } else {
    lastLoad = '';
  }
}

///////////////////////////////////////////////////////////
// Add click events to each portfolio piece
///////////////////////////////////////////////////////////

for (var i = 0; i < portfolioItems.length; i++) {
  portfolioItems[i].addEventListener('click', loadContent, false);
}

///////////////////////////////////////////////////////////
// Initialize Luminous
///////////////////////////////////////////////////////////

var luminousOptions = {
  captionAttribute: 'title',
};

var luminousGalleryOpts = {
  arrowNavigation: true,
};

new LuminousGallery(document.querySelectorAll('.luminous'), luminousGalleryOpts, luminousOptions);


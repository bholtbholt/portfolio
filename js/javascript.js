var portfolio = document.getElementById('portfolio');
var portfolioItems = document.getElementsByClassName('js-load-content');
var totalColumns = 3;
var lastLoad;

///////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////

function findPosition(object) {
  // index needs to handle visibility
  var linkPosition = index(object);
  return linkPosition + (totalColumns - (linkPosition % totalColumns));
}

function insertContent(object) {
  var contentElement = document.getElementById(object.getAttribute('href'));
  var contentPosition = findPosition(object);
  contentElement.className += ' js-active-content';
  portfolio.insertBefore(contentElement, portfolio.children[contentPosition]);
}

function index(element){
  var sib = element.parentNode.childNodes;
  var n = 0;
  for (var i=0; i<sib.length; i++) {
    if (sib[i]==element) return n;
    if (sib[i].nodeType==1) n++;
  }
  return -1;
}

function clearContent(className) {
  var content = document.getElementsByClassName(className);
  if (content.length > 0) {
    portfolio.appendChild(content[0]);
    content[0].classList.remove(className);
  }
}

function loadContent(e) {
  e.preventDefault();

  clearContent('js-active-content');

  if (lastLoad != this.id) {
    insertContent(this);
    lastLoad = this.id;
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
  // Which attribute to pull the caption from, if any.
  captionAttribute: 'title',
};

var luminousGalleryOpts = {
  arrowNavigation: true,
};

new LuminousGallery(document.querySelectorAll('.luminous'), luminousGalleryOpts, luminousOptions);


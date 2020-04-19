// Code to remove the DOM node 'main#main'
main.remove();
// or document.querySelector('main#main').remove();



const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'C is the champion';
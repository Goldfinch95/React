const div = document.getElementById('div');

//javascript : codigo imperativa, pasos a seguir...

const header = document.createElement('h1');
const headerText = document.createTextNode('preparando la pizza con receta 🍕');
header.appendChild(headerText)
div.appendChild(header)

//react : codigo declarativo, declaro lo que quiero mostrar 

ReactDOM.render(<h1>Pizza de peperoni  🍕</h1>, div);


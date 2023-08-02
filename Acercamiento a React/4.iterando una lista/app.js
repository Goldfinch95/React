const div = document.getElementById("div");

//utilizamos el prop como parametro.
function Header({ title }) {
  //utilizamos {} para trabajar la variable con js.
  return <h1>{title ? title : "default title"}</h1>;
}

function HomePage() {
  const names = ["Barba", "Juli", "Eze", "Facu"];
  //usamos array map para iterar sobre el array y la funcion flecha para asignar un nombre a un elemento de la lista.
  //!React nos dará una advertencia sobre un key. Esto se debe a que se necesita algo para identificar de forma única los elementos del array para que sepa qué elementos actualizar en el DOM.
  return (
    <div>
      <Header title="Pizza de peperoni 🍕" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<HomePage />, div);

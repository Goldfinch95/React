const div = document.getElementById("div");

//los componentes de React deben estar en mayúsculas para distinguirlos de HTML y JavaScript simples.
function Header() {
  return <h1>Pizza de peperoni 🍕</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
      <Header />
    </div>
  );
}
//usa los componentes de React de la misma manera que usaría las etiquetas HTML normales, con corchetes angulares
ReactDOM.render(<HomePage />, div);

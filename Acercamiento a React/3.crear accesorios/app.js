const div = document.getElementById("div");

//utilizamos el prop como parametro.
function Header({ title }) {
  //utilizamos {} para trabajar la variable con js.
  return <h1>{title ? title : "default title"}</h1>;
}

function HomePage() {
  //agregamos un prop title
  return (
    <div>
      <Header title="React 💙" />
      <Header title="a new title" />
    </div>
  );
}

ReactDOM.render(<HomePage />, div);

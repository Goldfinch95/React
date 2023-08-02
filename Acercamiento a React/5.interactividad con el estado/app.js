const div = document.getElementById("div");

function HomePage() {
  //useState()devuelve un array.
  //El primer elemento del array es value, se le puede dar cualquier nombre descriptivo.
  //El segundo elemento de la matriz es una función del update, se le puede dar cualquier nombre descriptivo, pero es común ponerle el prefijo set seguido del nombre de la variable de estado que estás actualizando:
  //valor inicial 0.
  const [likes, setLikes] = React.useState(0);
  function handleClick() {
    //sumas los likes
    setLikes(likes + 1);
  }
  return (
    // verificar que el estado inicial esté funcionando usando la variable de estado dentro de su componente.
    //se llama a la función que hace el conteo de me gustas.
    <div>
      <button onClick={handleClick}>Me Gusta({likes})</button>
    </div>
  );
}

ReactDOM.render(<HomePage />, div);

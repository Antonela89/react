//Empleo de funciones flecha:
//La función luego se asigna a un variable constante App(será el nombre del componente)
//Los nombres de los componentes de React deben iniciar con mayúscula
//El contenido de un componente de React (normalmente) debe contener un elemento raíz (contenedor), usando fragments (<> </>), es decir, envolviendo los elementos que el componente devolverá con un elemento vacío y ya no genera un div adicional.

const A_1 = () => {
  //código JS
  //console.log('Hola desde el componente App...')
  //código que define el componente:
    return (
    <div>
        <p>Hello world</p>
    </div>
    )
}

//exportación de la constante
export default A_1
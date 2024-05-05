//JSX:
const A_2 = () => {

    const now = new Date()
    const a = 10
    const b = 20
    console.log(now, a+b)

    return (
    //Cualquier código de JavaScript entre llaves es evaluado y el resultado de esta evaluación se incrusta en el lugar definido en el HTML producido por el componente.
    //El diseño de los componentes de React se escribe principalmente usando JSX. Aunque se parece a HTML, en realidad estamos tratando con una forma de escribir JavaScript. Bajo el capó, el JSX devuelto por los componentes de React se compila en JavaScript. 
    //La compilación está a cargo de Babel.
    //En la práctica, JSX se parece mucho a HTML con la distinción de que con JSX puede incrustar fácilmente contenido dinámico escribiendo JavaScript apropiado entre llaves. La idea de JSX es bastante similar a muchos lenguajes de plantillas.
    //JSX es similar a XML, lo que significa que todas las etiquetas deben cerrarse.
    <div>
        <p>Hello world, it is {now.toString()}</p>
        <p>
            {a} plus {b} is {a + b}
        </p>
    </div>
    )
}

export default A_2
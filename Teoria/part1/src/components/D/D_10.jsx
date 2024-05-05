// import { useState }  from 'react';

// // Este es lugar correcto para definir un componente
// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const D_10 = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = newValue => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//   // No defina componentes adentro de otro componente
//   const Display = props => <div>{props.value}</div>

//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="reset" />
//       <Button handleClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }

// export default D_10;

// La aplicación todavía parece funcionar, pero ¡no implementes componentes como este! Nunca definas componentes dentro de otros componentes. El método no proporciona beneficios y da lugar a muchos problemas desagradables. Los mayores problemas se deben al hecho de que React trata un componente definido dentro de otro componente como un nuevo componente en cada render. Esto hace imposible que React optimice el componente.

import { useState }  from 'react';

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const D_10 = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default D_10;
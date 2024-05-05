import C_1 from './C_1';
import C_2 from './C_2';
import C_3 from './C_3';
import C_4 from './C_4';
import C_5 from './C_5';
import C_6 from './C_6';
import C_7 from './C_7';
import C_8 from './C_8';

const C = () => {
    return (
        <div>
            <h1>Estado del componente, controladores de eventos</h1>
            <>
                <h2>Funciones auxiliares del componente</h2>
                <C_1/>
            </>
            <>
                <h2>Destructuración</h2>
                <C_2/>
            </>
            <>
                <h2>Componente con estado</h2>
                <C_3/>
            </>
            <>
                <h2>Manejo de eventos</h2>
                <C_4/>
            </>
            <>
                <h2>Un controlador de eventos es una función</h2>
                <C_5/>
            </>
            <>
                <h2>Pasando el estado a componentes hijos</h2>
                <C_6/>
            </>
            <>
                <h2>Los cambios en el estado provocan re-renderizado</h2>
                <C_7/>
            </>
            <>
                <h2>Refactorización de los componentes</h2>
                <C_8/>
            </>
        </div>
    )
}

export default C;

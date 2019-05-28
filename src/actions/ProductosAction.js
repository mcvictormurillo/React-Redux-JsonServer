import {MOSTRAR_PRODUCTOS,CREAR_PRODUCTOS} from './types';

import axios from 'axios';

//en las acciones ejecutamos axios

export const mostrarProductos = () => async dispatch =>{

//const respuesta = await axios.get('http://localhost:3000/productos');
const respuesta = await axios.get('https://my-json-server.typicode.com/mcvictormurillo/React-Redux-dbJson/productos');
//console.log(respuesta)
    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
    })
    
}


export const guardarProductoAxios = (producto) => async dispatch =>{

    //const respuesta = await axios.post('http://localhost:3000/productos',producto);
    const respuesta = await axios.post('https://my-json-server.typicode.com/mcvictormurillo/React-Redux-dbJson/productos',producto);
    //console.log(respuesta)
        dispatch({
            type: CREAR_PRODUCTOS,
            payload: respuesta.data
        })
        
    }
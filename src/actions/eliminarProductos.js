import {ELIMINAR_PRODUCTOS} from './types';

import axios from 'axios';




export const eliminarProducto = (id) => async dispatch=>{

    console.log('ACTION ELIMINAR_PRODUCTOS!!!')
    //const respuesta = await axios.delete('http://localhost:3000/productos/'+id);
    const respuesta = await axios.delete('https://my-json-server.typicode.com/mcvictormurillo/React-Redux-dbJson/productos/'+id);
    console.log('repsuesta delete axio',respuesta)
    console.log('id a eliminar',id)
    dispatch({
        type: ELIMINAR_PRODUCTOS,
        payload: id
    })
}

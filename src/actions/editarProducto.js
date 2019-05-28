import {EDITAR_PRODUCTOS} from './types';
import axios from 'axios';
export const editarProducto = (producto,id) => async dispatch =>{
    //const respuesta = await axios.put('http://localhost:3000/productos/'+id,producto);
    const respuesta = await axios.put('https://my-json-server.typicode.com/mcvictormurillo/React-Redux-dbJson/productos/'+id,producto);
    console.log(respuesta)
    console.log('producto a modificar',producto)
        dispatch({
            type: EDITAR_PRODUCTOS,
            payload: {
                id:id,
                producto: producto

            }
        })
        
    }
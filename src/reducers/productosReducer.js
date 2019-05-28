import {MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTOS, CREAR_PRODUCTOS, EDITAR_PRODUCTOS,BUSCAR_PRODUCTO} from '../actions/types'

const estadoInicial = {
    productos : []
}

export default function (state = estadoInicial, action){
    switch(action.type){
        case MOSTRAR_PRODUCTOS:
            //console.log(action.payload)
            return {...state,productos:action.payload};

        case ELIMINAR_PRODUCTOS:
         console.log('cantidad de productos antes: ',state.productos.length)
            const nuevoEstado = state.productos.filter((item)=>{
                if(item.id!=action.payload){
                    //console.log(`Encontrado ${item.id} y payload ${action.payload} y nombre: ${item.nombre} `)
                    return item
                }
            })
            console.log('despues de eliminar: ',nuevoEstado.length)
            const obj = {
                productos: nuevoEstado
            }
            return obj;

        case EDITAR_PRODUCTOS:
            let copia = state
            const newEstado =  copia.productos.map((item)=>{
                if(item.id==action.payload.id){
                    item.nombre = action.payload.producto.nombre
                    item.precio = action.payload.producto.precio
                    
                }
                return item
            })
            //console.log('estado despues de editar',newEstado)
            return {...state, productos: newEstado}
     
        case CREAR_PRODUCTOS:
            return {...state, productos: [...state.productos,action.payload]}
       
        default:
            return state;
      
    }
}



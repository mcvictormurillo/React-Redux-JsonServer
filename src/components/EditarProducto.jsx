import React, { Component } from 'react'
import Producto from './Producto';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {editarProducto} from '../actions/editarProducto'
import {eliminarProducto} from '../actions/eliminarProductos';
import {mostrarProductos} from '../actions/ProductosAction'

 class EditarProducto extends Component {

    
    render() {
        let nombre = React.createRef();
        let precio = React.createRef();
        let producto = {
            nombre:'nombre',
            precio:0

        };     

        if(this.props.productos){
            producto = this.props.productos.filter((item)=>{
                if(this.props.id == item.id){
                    return item
                }
            })[0]
        }
        
        console.log('producto encontrado',producto)

        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4 card card-shadow" style={{'height':'18rem','marginTop':'3rem','padding':'1rem'}} >
                    <form className="mt-8">
                        <h3 class="text-center">Editar Producto</h3>
                        <div className="form-group ">
                            <label >Nombre</label>
                            <input ref={nombre} type="text" className="form-control"   placeholder={producto.nombre} />
                        </div>
                        <div className="form-group">
                            <label >Precio</label>
                            <input ref={precio} type="number" className="form-control" placeholder={producto.precio} />
                        </div>
                        <Link to="/"><button type="button" className="btn btn-info mr-3"  onClick={
                            ()=>{
                                
                                const producto = {
                                    id: Date.now(),
                                    nombre : nombre.current.value,
                                    precio : precio.current.value
                                }
                                this.props.editarProducto(producto,this.props.id)
                                
                                
                            }
                        }>Actualizar</button>
                        </Link>
                        <Link to="/"><button type="button" className="btn btn-danger" onClick={
                            ()=>{
                                console.log('eliminar a',producto.id)
                                this.props.eliminarProducto(producto.id)
                            }
                        }>Eliminar </button>
                        </Link>
                    </form>
                    
                    </div>
                    <div className="col-5 offset-1">
                            
                    </div>
                   
                </div>
            </div>
        )
    }
}
const mapStateToProp = (state)=>{
    //console.log('estado',state)
    return {
        productos: state.productos.productos,
        
    }
}

export default connect(mapStateToProp,{editarProducto,eliminarProducto,mostrarProductos})(EditarProducto)
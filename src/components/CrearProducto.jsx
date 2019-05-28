import React, { Component } from 'react'
import {connect} from 'react-redux';
import {agregarProducto} from '../actions/agregarProducto';
import {Link} from 'react-router-dom'
import {guardarProductoAxios} from '../actions/ProductosAction';

class CrearProducto extends Component {

    state = {
        nombre:'',
        precio:0
    }

    changeInput =  (e) =>{
        console.log(e.target.value);
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    guardarCambios= ()=>{
        console.log('guardando el producto');
        this.props.guardarProductoAxios(this.state).then(()=>{
            this.props.history.push("/")
        });
        
    }

    volver= ()=>{
        
            this.props.history.push("/")
      
        
    }
    render() {
      
        return (
            <div className="container">
                
                <div className="row">
                    <div className="col-6 offset-3 card card-shadow" style={{'height':'18rem','marginTop':'3rem','padding':'1rem'}}>
                    <h3 class="text-center">Nuevo producto</h3>
                    <form >
                        <div className="form-group">
                            <label >Nombre</label>
                            <input   onChange={this.changeInput} name="nombre" type="text" className="form-control"   placeholder="Ej: Cafe, Arroz" />
                        </div>
                        <div className="form-group">
                            <label >Precio</label>
                            <input  onChange={this.changeInput} name="precio" type="number" className="form-control" placeholder="$." />
                        </div>
       
                        

                        <button type="button" className="btn btn-primary mr-2" style={{'width':'7rem'}} onClick={this.guardarCambios} >save</button>
                        <button type="button" className="btn btn-danger" style={{'width':'7rem'}} onClick={this.volver} >Volver</button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default  connect(null,{agregarProducto,guardarProductoAxios})(CrearProducto);
























/*

<Link to="/productos"><button type="button" className="btn btn-primary" onClick={
                            ()=>{
                                
                                const producto = {
                                    id: Date.now(),
                                    nombre : nombre.current.value,
                                    precio : precio.current.value
                                }
                                this.props.agregarProducto(producto)
                                
                            }
                        }>Crear Producto</button>
                        </Link>

*/
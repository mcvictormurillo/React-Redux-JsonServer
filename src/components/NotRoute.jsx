import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class NotRoute extends Component {
    render() {
        return (
            <div className="container " style={{'marginTop':'8rem'}}>
                <div className="row">
                    <div className="col-4 offset-4 text-center">
                    
                        <h1>404</h1>
                        <h3>No encontramos la ruta</h3>
                        <Link to="/">
                        <button className="btn btn-warning">Listar Productos</button>
                        </Link>
                    </div>
                </div>
            </div>
           
        )
    }
}

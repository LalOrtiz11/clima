import React from 'react'
import './counter.css'
//? PARA USAR CLASES SE DEBE DE USAR EL EXTENDS
class Counter extends React.Component{
    constructor(props){
        super(props)
    this.state = {
        count: props.initCount // Count es el valor del contador
    }
    //el state se va a encargar de modificar el dom por nosotros
    // lo que react hace es detectar los cambios en el state y los deja en la interfaz de usuario
    }
    //aqui se trabaja con el render
    render(){
       return(
        //todo el HTML
      
        <div className="counter-main">
        <h5>{this.state.count}</h5> {/* LAS LLAVES EN MI JSX REPRESENTAN CÓDIGO DE JAVASCRIPT  */}
        <div className="counter-button"> {/* ELEMENTO PADRE  */}
        {/*  this.setState el único que puede cambiar el estado de mi componente */}

                {/* ELEMENTOS HIJOS */}
                <button 
                onClick={()=> this.setState({count: this.state.count+1})}
                > 
                Agregar
                </button>
                <button 
                onClick={()=> this.setState({count: this.state.count-1})}
                > 
                Disminuir 
                </button>
                
        </div>
    </div>
       )
       
       }
    }
export default Counter

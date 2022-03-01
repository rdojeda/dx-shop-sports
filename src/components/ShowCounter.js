import { Link } from "react-router-dom"

export const ShowCounter = ({count, show }) => {
   
    const text = count === 1 ? 'producto' : 'productos';
    return (
        
        <div className="container"> 
            <div className="d-flex justify-content-center">
                <div className="alert alert-dismissible alert-secondary">
                <button
                    type="button"           
                    className="close btn btn-danger"
                    data-dismiss="alert"
                    onClick={show}
                >
                &times;
                </button>
                <strong>Agregaste {count} {text} al {''}</strong> 
                <Link to="/cart" className="alert link" onClick={show}>Carrito</Link>
                </div>
            
            </div>
       
        </div>
      
  )
}

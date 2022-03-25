import { Link } from "react-router-dom"

export const ShowCounter = ({count, show }) => {
   
    const text = count === 1 ? 'producto' : 'productos';
    return (
        
        <div className="container"> 
            <div className="d-flex justify-content-center">
                <div className="alert alert-dismissible alert-secondary">
            
                <strong className="p-3">Agregaste {count} {text} {''}</strong> 
                    <Link to="/cart" className="btn btn-success" onClick={show}>Finalizar Compra</Link>
                <button className="btn btn-close" data-dismiss="alert" onClick={show}></button>
                </div>
            
            </div>
       
        </div>
      
  )
}

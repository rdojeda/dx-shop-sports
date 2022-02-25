import { Link } from 'react-router-dom';
export const Item = ({id, title, pictureUrl, price}) => {

     return (
       <>
         <div className="col-lg-4 mb-3 d-flex align-items-stretch">
           <div className="card h-100">
             <img src={pictureUrl} className="card-img-top" alt={title} />
             <div className="card-body">
               <h5 className="card-title text-uppercase">{title}</h5>
               <h2>$ {price}</h2>
             </div>
             <hr></hr>
             <div className="card-footer">
               <Link to={`/ItemDetail/${id}`} className="btn bt-primary">
                 <button className="btn btn-primary">Ir al Carrito</button>
               </Link>
             </div>
           </div>
         </div>
       </>
     );
}

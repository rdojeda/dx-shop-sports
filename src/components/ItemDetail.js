import { ItemCount } from "./ItemCount";
import { ShowCounter } from "./ShowCounter";
import { useCartContext } from "../Context/Context";
import { useState } from "react";

export const ItemDetail = ({productos}) => {
  const [count, setCount] = useState(0);
  const { addItem, show, handleShow } = useCartContext();

  const handleAdd = () => {
     setCount(count + 1);
   }

  const handleSub = () => {
     setCount(count - 1);
  }
  
 return (
    <>
      <hr />
      <div className="card mb-3 mw-card">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={productos.pictureUrl}
              className="img-fluid rounded-start"
              alt={productos.title}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-text">{productos.category}</h5>
              <h2 className="card-title text-uppercase">{productos.title}</h2>
              <p className="card-text">{productos.description}</p>

              <h3>$ {productos.price}</h3>
              <hr />
              <h5 className="mt-5">Disponible: {productos.stock}</h5>
            </div>
          </div>
        </div>
      </div>

    <div className=" d-flex mt-2 mb-5 justify-content-center">
            <ItemCount
                    count={count}
                     sub={handleSub}
                     add={handleAdd}
                     show={handleShow}
                     condition={show}
                     stock={productos.stock}
           />
                 
    </div>  
                  
            <button className="btn btn-primary w-25 mb-5"
                    type="button"  onClick={()=> addItem(productos, count)}
                    disabled={show || count === 0}
                  >Agregar Producto
            </button>
            {show && <ShowCounter show={handleShow} count={count} />}
      
    </>
  );
};

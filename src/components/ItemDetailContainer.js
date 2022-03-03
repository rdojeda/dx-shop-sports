import { useParams } from "react-router-dom";
import { ItemDetail } from './ItemDetail';
import { useEffect, useState } from "react";
import { productos } from "../data/productos";
import { ItemCount } from "./ItemCount";
import { ShowCounter } from "./ShowCounter";
import { CartShoppingWidget } from "./CartShoppingWidget";
import { useCartContext } from "../Context/Context";

export const ItemDetailContainer = () => {
  
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0)

  const { addItem, show, handleShow } = useCartContext()
  
  const { id } = useParams();

  const handleAdd = () => {
    setCount(count + 1);
  }
 
  const handleSub = () => {
    setCount(count - 1);
  }


  const getItemDetail = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000)
  })

  useEffect(() => {
    if (show) handleShow();

    getItemDetail.then((data) => {
      let getItemId = data.find((elem) => {
        return elem.id === parseInt(id);
      })
      setDetail(getItemId)
      setIsLoading(false)
    })


 }, [id])
    
  return (
    <>
      {isLoading ? (
        <h1 className="text-center mt-2">Cargando....</h1>
      ) : (
        <>
          <div className="container mt-5">
              <div className="row justify-content-center mt-5">
                  <ItemDetail {...detail} />

                  <div className=" d-flex mt-2 mb-5 justify-content-center">
                     <ItemCount
                    count={count}
                    sub={handleSub}
                    add={handleAdd}
                    show={handleShow}
                    condition={show}
                    stock={detail.stock}
                  />
                  <CartShoppingWidget count={count}/>
                </div>  
                  
                  <button
                    className="btn btn-primary w-25 mb-5"
                    type="button"
                  onClick={()=> addItem(detail, count)}
                    disabled={show || count === 0}
                  >
                    Agregar Producto
                  </button>
                  {show && <ShowCounter show={handleShow} count={count} />}
                
                  </div>
              </div>
          
        </>
      )}
    </>
  );
};



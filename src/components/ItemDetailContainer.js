import { useParams } from "react-router-dom";
import { ItemDetail } from './ItemDetail';
import { useEffect, useState } from "react";
import { productos } from "../data/productos";
import { ItemCount } from "./ItemCount";
import { ShowCounter } from "./ShowCounter";

export const ItemDetailContainer = () => {
  
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false);
  
  const handleShow = () => setShow((prev) => !prev);
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
                </div>  
                  
                  <button
                    className="btn btn-primary w-25 mb-5"
                    type="button"
                    onClick={handleShow}
                    disabled={show || count === 0}
                  >
                    Agregar al Carrito
                  </button>
                  {show && <ShowCounter show={handleShow} count={count} />}
                  {/* pensar un ternario para ocultar o mostrar  */}
                  </div>
              </div>
          
        </>
      )}
    </>
  );
};



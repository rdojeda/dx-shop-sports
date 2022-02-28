import { useParams } from "react-router-dom";
import { ItemDetail } from './ItemDetail';
import { useEffect, useState } from "react";
import { productos } from "../data/productos";

export const ItemDetailContainer = () => {
  
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
 
 
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

    })


 }, [])
    
  return(
    <>
      {isLoading ? (
        <h1 className="text-center mt-2">Cargando....</h1>
      ) : (
        <>
          
          <div className="container mt-5">
              <ItemDetail {...detail} />
          </div>
        </>
      )}
    </>
  );
};



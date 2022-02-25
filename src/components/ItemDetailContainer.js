import { useParams } from "react-router-dom";
import { ItemDetail } from './ItemDetail';

import { useEffect, useState } from "react";
import { obtenerProductos } from "../data/productos";

export const ItemDetailContainer = () => {
  
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();
  
  useEffect(() => {
    obtenerProductos
       .then((res) => {
          setDetail(res);
          setIsLoading(false);
      })
      .catch((error) => {
          console.log("Error", error);
      });
    
  }, [id]);
  
  const getItem = (id) => {
    let item = productos.find(element => element.id === id)
    setProducto(item) 
   
  }

  return (
    <>
      {isLoading ? (
        <h1 className="text-center mt-2">Cargando....</h1>
      ) : (
        <>
          <h1>{title}</h1>
          <div className="container mt-5">
              <ItemDetail {...detail.getItem(id)} />
          </div>
        </>
      )}
    </>
  );
};



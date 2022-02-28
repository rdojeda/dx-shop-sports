import { ItemList } from "./ItemList";
import { useEffect, useState } from 'react';
import { productos } from "../data/productos";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const[items, setItems] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    
    let params = useParams();
     
  const getProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
    },2000)
  })
      
 useEffect(() => {
   getProductos.then((data) => {
     if (params.category === undefined) {
       setItems(data)
       setIsLoading(false)
     } else {
       
       let filtro = data.filter((elem) => elem.category === params.category);
       setItems(filtro);
       setIsLoading(false);
     }
     
   })
     .catch(error => { console.log('Error', error) })
           
  }, [items]);
    
    return (
      <>
        {isLoading ? (
          <h1 className="text-center mt-2">Cargando....</h1>
        ) : (
          <>
           
            <div className="container mt-5 bg-light pt-5 pb-5 shadow-sm">
              <div className="row">
                <ItemList productos={items} />
              </div>
            </div>
          </>
        )}
      </>
    );
  
};




import { ItemList } from "./ItemList";

import { useEffect, useState } from 'react';
import { obtenerProductos } from '../data/productos';

export const ItemListContainer = ({ title }) => {
    const[productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
      obtenerProductos
        .then((res) => {
          setProductos(res);
          setIsLoading(false);
        })
         .catch((error) => {
          console.log('Error', error);
        });

        
  }, []);
    
    return (
      <>
        {isLoading ? (
          <h1 className="text-center mt-2">Cargando....</h1>
        ) : (
          <>
            <h1>{title}</h1>
            <div className="container mt-5 bg-light pt-5 pb-5 shadow-sm">
              <div className="row">
                <ItemList productos={productos} />
              </div>
            </div>
          </>
        )}
      </>
    );
  
};



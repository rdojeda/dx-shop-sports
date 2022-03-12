import { doc, getDoc } from 'firebase/firestore';
import { db } from "../utils/firebase";
import { useParams } from "react-router-dom";
import { ItemDetail } from './ItemDetail';
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {
  
  const [selectedItem, setSelectedItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
     
  const { id } = useParams();

  const getSelected = async () => {
      try {
        const document = doc(db, "bdProductos", id);
        const response = await getDoc(document);
        const result =  { id: response.id, ...response.data() }
        setSelectedItem(result);
        setIsLoading(false);
      } catch (error) {
        console.log("Error", error);
      }
  }

  useEffect(() => {
    getSelected()

  }, [id])
  
    
  return (
    <>
      {isLoading ? (
        <h1 className="text-center mt-2">Cargando....</h1>
      ) : (
        <>
          <div className="container mt-5">
              <div className="row justify-content-center mt-5">
                  <ItemDetail productos={selectedItem} />
              
              </div>
      
              </div>
          
        </>
      )}
    </>
  );
};



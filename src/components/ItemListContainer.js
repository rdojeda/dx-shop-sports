import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { Spinner } from "./Spinner";


export const ItemListContainer = () => {
    const[items, setItems] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    
  let {category} = useParams();
     
    const getData = async () => {
      try {
        const itemsCollection = collection(db, "bdProductos")
        const col = await getDocs(itemsCollection)
        const result = col.docs.map((doc)=> doc = {id:doc.id, ...doc.data()})
        setItems(result)
        setIsLoading(false)
      } catch(error) {
        console.log('Error', error);
      }
  }
  
  const getDataCategory = async () => {
    try {
      const itemsCollection = collection(db, "bdProductos")
      const col = await getDocs(itemsCollection)
      const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
      setItems(result.filter(e => e.category === category))
      setIsLoading(false)
    } catch (error) {
      console.log('Error', error)
    }
  }

  useEffect(() => {
    category?getDataCategory():getData()

  },[category])
  
  console.log('items', items)

    return (
      <>
        {isLoading ? (
            <Spinner />
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




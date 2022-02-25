
import { Item } from './Item';

export const ItemList = ({productos}) => {


  return (
      <>
         
          {productos.map((producto) => (<Item {...producto} key={producto.id}/>) )}
         
        </>
  
  )
}

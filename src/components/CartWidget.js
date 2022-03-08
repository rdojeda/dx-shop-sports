import { useCartContext } from "../Context/Context";

export const CartWidget = () => {

  const { cartItems } = useCartContext()

  return (
    <>
      <div>
        <i className="text-white fas fa-cart-shopping fa-2x"> </i>;
         <span className="h5 text-white">
        {cartItems.reduce((ac, item) => ac + item.quantity, 0)}
      </span>
      </div>

     
    </>
  );
 
  
};



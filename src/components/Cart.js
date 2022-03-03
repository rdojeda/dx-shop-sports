import { useCartContext } from "../Context/Context";

export const Cart = () => {
  const { cartItems } = useCartContext()
  return (
    <>
      {cartItems.length === 0 ? (
        <p>Carrito vacio</p>
      ) : (
        cartItems.map((i) => {
          return (
            <>
              <div className="container">
                <div className="row justify-content-center mt-5">
                 <div className=" d-flex mt-2 mb-5 justify-content-center">
               <p>
                {i.title} x {i.quantity} = ${i.quantity * i.price}
              </p>
              <img src={i.pictureUrl} style={{ width: 200 }} />
              </div>
                </div>
                </div>
            </>
          );
        })
      )}
    </>
  );
}

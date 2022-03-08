import { useCartContext } from "../Context/Context";
import { Link } from 'react-router-dom'
export const Cart = () => {
  const { cartItems, clearAll, deleteItem } = useCartContext()
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="text-center mt-5 mb-5">
          <h2>Carrito vacio - Comience a Comprar!</h2>
          <Link to="/">Ir a Catálogo</Link>
        </div>
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
                  <div className="text-center">
                    <button
                      className="btn btn-warning"
                      onClick={() => deleteItem(i.id)}
                    >
                      Eliminar Producto
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
      <hr />
      <div className="text-center h4">
        {`Total: $ ${cartItems.reduce(
          (ac, item) => ac + item.price * item.quantity,
          0
        )}`}
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-danger" onClick={clearAll}>
          Vaciar Carrito
        </button>
      </div>
    </>
  );
}

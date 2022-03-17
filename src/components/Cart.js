import { useCartContext } from "../Context/Context";
import { Link } from 'react-router-dom';
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

export const Cart = () => {
  const { cartItems, clearAll, deleteItem } = useCartContext()
  
  const sendOrder = async (e) => {
    e.preventDefault();
    let order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      items: cartItems,
      total: cartItems.reduce((ac, items) => (ac + (items.price * items.quantity)), 0),
    };
    order.date = Timestamp.fromDate(new Date());
    const queryCollection = collection(db, "orders");
    console.log("order", order);
    try {
      const docRef = await addDoc(queryCollection, order);
      console.log('docRef', docRef.id);
      clearAll()
      order.buyer.name = e.target.reset() 
      order.buyer.phone = e.target.reset(); 
      order.buyer.email = e.target.reset(); 

    } catch (error) {
      console.log("Error", error);
    }
  };
     
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="text-center mt-5 mb-5">
          <h2>Carrito vacio - Comience a Comprar!</h2>
          <Link className="btn btn-primary" to="/">
            Ir a Catálogo
          </Link>
        </div>
      ) : (
        <div className="container mt-5">
          {cartItems.map((i) => {
            return (
              <>
                <div className="card mb-5 p-2">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={i.pictureUrl} alt={i.title} className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                      <h2 className="card-title mt-3">{i.title}</h2>
                      <p className="card-text h5">Cantidad: {i.quantity}</p>
                      <p className="card-text h5">
                        Importe: $ {i.quantity * i.price}
                      </p>
                      <button
                        className="btn btn-warning mx-5 mt-5"
                        onClick={() => deleteItem(i.id)}
                      >
                        Eliminar Producto
                      </button>
                   
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}

      <div className="text-center mt-5 mb-5">
        <button className="btn btn-danger" onClick={clearAll}>
          Vaciar Carrito
        </button>
      </div>

      <div className="container mb-5">
        <div className="card d-flex">
          <div className="card-header bg-dark bg-gradient text-light">
            <h4 className="text-center">Orden de Compra</h4>
          </div>
          <div className="card-body">
            <div className="text-center">
              <div className="text-center h4 mt-5">
                {`Cantidad: ${cartItems.reduce(
                  (ac, item) => ac + item.quantity,
                  0
                )}`}
              </div>

              <div className="text-center h4 mt-3">
                {`Total: $ ${cartItems.reduce(
                  (ac, item) => ac + item.price * item.quantity,
                  0
                )}`}
              </div>
            </div>
            <form className="w-50 mx-auto mt-5" onSubmit={sendOrder}>
              <legend className="mb-5">Completar con tus datos para finalizar la compra</legend>
              <div className="mb-3 mt-5">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Ingrese su nombre"
                  required
                />
                <div className="valid-feedback">Campo válido!</div>
                <div className="invalid-feedback">Campo Incorrecto!</div>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Teléfono
                </label>
                <input
                  type="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Ingrese su teléfono"
                  required
                />
                <div className="valid-feedback">Campo válido!</div>
                <div className="invalid-feedback">Campo Incorrecto!</div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Ingrese su email"
                  required
                />
                <div className="valid-feedback">Campo válido!</div>
                <div className="invalid-feedback">Campo Incorrecto!</div>
              </div>

              <button className="btn btn-primary mt-5" type="submit">
                Enviar Orden
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

import { ItemCount } from "./ItemCount";
import { useParams } from "react-router-dom";
import { productos } from "../data/productos";

export const ItemDetail = () => {
  let { id } = useParams();

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="card mb-3 mw-card">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={productos[id].pictureUrl}
                className="img-fluid rounded-start"
                alt={productos[id].title}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-text">{productos[id].category}</h5>
                <h2 className="card-title text-uppercase">{productos[id].title}</h2>
                <p className="card-text">{productos[id].description}</p>
                <h3>$ {productos[id].price}</h3>
                <hr></hr>
              </div>
              <div className="card-footer">
                <ItemCount stock={productos[id].stock} initial={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};            
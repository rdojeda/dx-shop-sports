import { ItemCount } from "./ItemCount";

export const ItemDetail = ({title, pictureUrl,description,price, stock, category }) => {
 

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="card mb-3 mw-card">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={pictureUrl}
                className="img-fluid rounded-start"
                alt={title}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-text">{category}</h5>
                <h2 className="card-title text-uppercase">{title}</h2>
                <p className="card-text">{description}</p>
                <h3>$ {price}</h3>
                <hr></hr>
              </div>
              <div className="card-footer">
                <ItemCount stock={stock} initial={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};            
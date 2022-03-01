export const ItemDetail = ({title, pictureUrl,description,price, stock, category }) => {
 

  return (
    <>
      <hr />
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
              <hr />
              <h5 className="mt-5">Disponible: {stock}</h5>
            </div>
          </div>
        </div>
      
       
      </div>
    </>
  );
};            
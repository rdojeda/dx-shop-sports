
export const ItemCount = ({ count, add, sub, condition, stock  }) => {

  return (
    <>
          
      <div className="row mt-5">
        <div className="col d-flex justify-content-center">
          <button
            className="btn btn-danger"
            type="button"
            onClick={sub}
            disabled={condition || count === 0}
          > - </button>
        </div>
        <div className="col d-flex justify-content-center">
          <h3> {count} </h3>

        </div>
        <div className="col d-flex justify-content-center">
          <button
            className="btn btn-success"
            type="button"
            onClick={add}
            disabled={condition || count >= stock}
          
          > + </button>
        </div>
      </div>
    </>
  );
};

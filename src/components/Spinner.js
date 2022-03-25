export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
      <h2 className="mx-5">Cargando...</h2>
    </div>
  );
};

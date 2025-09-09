import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
// styles globaux importés via src/styles/main.scss

function PageError() {
  const error = useRouteError();
  const status = (isRouteErrorResponse(error) && error.status) || error?.status || 404;
  const message = (isRouteErrorResponse(error) && error.statusText) || error?.message || "Oups! La page que vous demandez n'existe pas.";
  return (
    <div className="error-page">
      <h2 className="error-page__code">{status}</h2>
      <p className="error-page__message">{message}</p>
      <Link className="error-page__cta" to="/user">Retourner au tableau de bord</Link>
    </div>
  );
}

export default PageError;

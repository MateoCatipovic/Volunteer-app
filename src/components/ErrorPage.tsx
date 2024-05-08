import { memo } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col h-screen justify-center " id="error-page">
      <h1 className="text-3xl font-bold m-9">Oops!</h1>
      <p className="m-4">Sorry, an unexpected error has occurred.</p>
      <p>
        <b>{error.status} </b>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

const ErrorPageMemo = memo(ErrorPage);
export default ErrorPageMemo;

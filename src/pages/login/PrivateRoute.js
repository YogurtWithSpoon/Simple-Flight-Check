import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  // Если запись есть в LocalStorage , то редирект
  let auth = localStorage.getItem("auth");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

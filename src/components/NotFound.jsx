import { Route, Link } from "react-router-dom";

function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
}

const NotFound = () => {
  return (
    <Status code={404}>
      <div>
        <h1>Sorry, can’t find that.</h1>
        <Link to='/'>Back to home</Link>
      </div>
    </Status>
  );
};

export default NotFound;

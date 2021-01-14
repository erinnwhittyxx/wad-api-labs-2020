import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "./authContext";

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <div className="row">
      <div className="col-6 offset-3">
        <h2>
          Welcome {context.userName}! 
        </h2>
        <p>
        <button onClick={() => context.signout()}>Sign out</button>
        </p>
        </div>
      </div>
      ):(
        <p>
          You are not logged in{" "}
          <button onClick={() => history.push("/login")}>Login</button>
        </p>
  );
};

export default withRouter(BaseAuthHeader);

import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { googleSignIn } = useFirebase();
  return (
    <div>
      <h1>This is login</h1>
      <button className="btn btn-danger" onClick={googleSignIn}>
        Google sign in
      </button>
    </div>
  );
};

export default Login;

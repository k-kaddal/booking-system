import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../store/StoresProvider";

interface IProps {
  setStage: any;
}

const Lobby = (props: IProps) => {
  const { userStore } = useStores();

  const [loggingUser, setLoggingUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let validUser = await userStore.loginUser(loggingUser);

    if (!validUser) return setError("Invalid User");
    props.setStage(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inner">
        <h2>Login</h2>
        {error ? <h3>{error}</h3> : null}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={loggingUser.email}
            onChange={(e) =>
              setLoggingUser({ ...loggingUser, email: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="pasword"
            id="password"
            value={loggingUser.password}
            onChange={(e) =>
              setLoggingUser({ ...loggingUser, password: e.target.value })
            }
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
};

export default observer(Lobby);

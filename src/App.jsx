import "./App.css";

import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("user", user);
  return (
    <div>
      {isAuthenticated && (
        <div>
          Hello <b>{user.name}</b>
        </div>
      )}

      {isAuthenticated ? (
        <button type="button" onClick={(e) => logout()}>
          Logout
        </button>
      ) : (
        <button onClick={(e) => loginWithRedirect()}>
          Login with redirect
        </button>
      )}
    </div>
  );
}

export default App;

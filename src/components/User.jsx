import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/FakeAuthContext";

import styles from "./User.module.css";

// const FAKE_USER = {
//   name: "Jack",
//   email: "jack@example.com",
//   password: "qwerty",
//   avatar: "https://i.pravatar.cc/100?u=zz",
// };

function User() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  function handleClick(e) {
    e.preventDefault();
    logout();
    navigate("/", { replace: true });
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

/*
CHALLENGE

1) checked -- Add `AuthProvider` to `App.jsx`
2) checked -- In the `Login.jsx` page, call `login()` from context
3) checked -- Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/

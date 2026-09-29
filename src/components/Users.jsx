import { Link } from "react-router-dom";

function Users() {
  return (
    <div>
      <h1>Users</h1>

      <Link to="/users/101">User 101</Link>
      <br />

      <Link to="/users/102">User 102</Link>
      <br />

      <Link to="/users/103">User 103</Link>
    </div>
  );
}

export default Users;
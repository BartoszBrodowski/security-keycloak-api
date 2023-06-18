import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to="/reviews">My Reviews</Link>
      <Link to="/login">Login</Link>
      <button>Log Out</button>
    </div>
  );
};

export default Menu;

import { Link } from "react-router-dom";

const Menu = ({ client }) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <Link to="/movielist">Movie List</Link>
      <Link to="/reviews">My Reviews</Link>
      <button onClick={() => client.logout()}>Log Out</button>
    </div>
  );
};

export default Menu;

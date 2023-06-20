import "./App.css";
import useAuth from "./hooks/useAuth";
import { Routes, Route } from "react-router-dom";
import Protected from "./components/Protected";
import Public from "./components/Public";
import Reviews from "./components/Reviews";
import MovieList from "./components/MovieList";

function App() {
  const [isLogin, token, client] = useAuth();
  console.log(token);
  return (
    <div>
      {isLogin ? (
        <Routes>
          <Route
            path="/"
            element={<Protected token={token} client={client} />}
          />
          <Route path="/reviews" element={<Reviews token={token} />} />
          <Route path="/movielist" element={<MovieList token={token} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Public client={client} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

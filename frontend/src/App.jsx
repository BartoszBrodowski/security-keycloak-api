import { useState } from "react";
import "./App.css";
import useAuth from "./hooks/useAuth";

function App() {
  const isLogin = useAuth();

  return <>{isLogin ? <div>Protected</div> : <div>Public</div>}</>;
}

export default App;

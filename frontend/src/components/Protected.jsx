import { useEffect, useRef } from "react";
import axios from "axios";
import Menu from "./Menu";

const Protected = ({ client }) => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <h1 className="font-lg font-semibold">Protected Menu</h1>
      <Menu client={client} />
    </div>
  );
};

export default Protected;

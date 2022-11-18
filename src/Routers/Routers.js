import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Pages/Home";
import Live from "../Pages/Live";
import Push from "../Pages/Push";
import Note from "../Pages/Note";
import Link from "../Pages/Link";
import Shop from "../Pages/Shop";
import Pack from "../Pages/Pack";
import Help from "../Pages/Help";
import More from "../Pages/More";
import TryLive from "../Pages/TryLive";
import Register from "../Pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="live" element={<Live />} />
      <Route path="push" element={<Push />} />
      <Route path="note" element={<Note />} />
      <Route path="link" element={<Link />} />
      <Route path="shop" element={<Shop />} />
      <Route path="pack" element={<Pack />} />
      <Route path="help" element={<Help />} />
      <Route path="more" element={<More />} />
      <Route path="trylive" element={<TryLive />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default Routers;

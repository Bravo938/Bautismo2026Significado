import { Routes, Route } from "react-router-dom";
import Baptism from "../Page/Baptism";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Baptism />} />
      <Route path="*" element={<Baptism />} />
    </Routes>
  );
}
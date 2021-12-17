import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/navbar";

import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
import "./App.css";
import Main from "./components/Main";
import MurexEOD from "./components/MurexEOD";
import NettingStatus from "./components/NettingStatus";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <SideBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/murexeod" element={<MurexEOD />} />
        <Route path="/nettingstatus" element={<NettingStatus />} />
      </Routes>
    </>
  );
}

export default App;

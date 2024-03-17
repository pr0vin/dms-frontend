import { Route, Routes } from "react-router-dom";
import Index from "./layouts/Index";
import DataEntryForm from "./pages/DataEntry/DataEntryForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Index} />
        <Route path="/data-entry/form" Component={DataEntryForm} />
      </Routes>
    </>
  );
}

export default App;

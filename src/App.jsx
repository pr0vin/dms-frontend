import { Route, Routes } from "react-router-dom";
import Index from "./layouts/Index";
import DataEntryForm from "./pages/DataEntry/DataEntryForm";
import DataEntryList from "./pages/DataEntry/DataEntryList";
import DataEntryIndex from "./pages/DataEntry/DataEntryIndex";
import Dashboard from "./layouts/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Index}>
          <Route index Component={Dashboard} />
          <Route path="/data-entry" Component={DataEntryIndex}>
            <Route index Component={DataEntryList} />

            <Route path="/data-entry/form" Component={DataEntryForm} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

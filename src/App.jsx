import { Route, Routes } from "react-router-dom";
import DataEntryForm from "./pages/DataEntry/DataEntryForm";
import DataEntryList from "./pages/DataEntry/DataEntryList";
import DataEntryIndex from "./pages/DataEntry/DataEntryIndex";
import Index from "./pages/home/Index";
import Dashboard from "./pages/home/Dashboard";
import DataEntryFormIndex from "./pages/DataEntry/DataEntryFormIndex";
import DataVoucherForm from "./pages/DataEntry/voucherType/DataVoucherForm";
import SettingIndex from "./pages/settings/SettingIndex";
import ProfileSetting from "./pages/settings/ProfileSetting";
import CompanySetting from "./pages/settings/CompanySetting";

import FiscalYearIndex from "./pages/fiscal-years/FiscalYearIndex";
import FiscalYearForm from "./pages/fiscal-years/FiscalYearForm";
import FileTypeIndex from "./pages/file-types/FileTypeIndex";
import BranchIndex from "./pages/branch/BranchIndex";
import DataVoucherList from "./pages/DataEntry/voucherType/DataVoucherList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Index}>
          <Route index Component={Dashboard} />
          <Route path="/data-entry" Component={DataEntryIndex}>
            <Route index Component={DataEntryList} />
            <Route
              path="/data-entry/voucher/list"
              Component={DataVoucherList}
            />

            <Route path="/data-entry/form" Component={DataEntryFormIndex}>
              <Route index Component={DataEntryForm} />
              <Route
                exact
                path="/data-entry/form/:regId"
                Component={DataEntryForm}
              />

              <Route
                exact
                path="/data-entry/form/voucher"
                Component={DataVoucherForm}
              />
              <Route
                exact
                path="/data-entry/form/voucher/:vId"
                Component={DataVoucherForm}
              />
            </Route>
          </Route>

          <Route path="/dashboard/settings" Component={SettingIndex}>
            <Route index Component={ProfileSetting} />
            <Route
              path="/dashboard/settings/company"
              Component={CompanySetting}
            />

            <Route
              path="/dashboard/settings/config/fiscal-year"
              Component={FiscalYearIndex}
            >
              <Route
                path="/dashboard/settings/config/fiscal-year/:id"
                Component={FileTypeIndex}
              />
            </Route>
            <Route
              path="/dashboard/settings/config/file-categories"
              Component={FileTypeIndex}
            >
              <Route
                path="/dashboard/settings/config/file-categories/:id"
                Component={FileTypeIndex}
              />
            </Route>

            <Route
              path="/dashboard/settings/config/branch"
              Component={BranchIndex}
            >
              <Route
                path="/dashboard/settings/config/branch/:id"
                Component={BranchIndex}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

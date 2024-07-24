import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import GetStarted from "./pages/GetStarted"
import AccountType from "./pages/AccountType"
import VerifyAccount from "./pages/VerifyAccount"
import SelectCareerStatus from "./pages/SelectCareerStatus"
import ProfileSetUp from "./pages/ProfileSetUp"

function App() {

  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-account" element={<GetStarted/>} />
        <Route path="/account-type" element={<AccountType />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/select-career-status" element={<SelectCareerStatus />} />
        <Route path="/profile-set-up" element={<ProfileSetUp />} />
      </Routes>
    </div>
  )
}

export default App

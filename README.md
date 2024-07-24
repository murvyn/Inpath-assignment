# Inpath Assignment

## Project Setup

This project uses Vite with React and TypeScript. To get started, follow the instructions below.

### Installation

1. Clone the repository:

```sh
git clone <repository-url>
```

2. Navigate to the project directory:

```sh
cd <project-directory>
```

3. Install dependencies:

```sh
npm install
```

4. Start the development server:

```sh
npm run dev
```

### Build for production

To create a production build, run:

```sh
npm run build
```

### Preview the production build

To preview the production build locally, run:

```sh
npm run serve
```

## Project Routes

This project includes the following routes, which can be accessed to test different parts of the application:

- `/` - Landing page
- `/create-account` - Get Started page
- `/account-type` - Account Type selection page
- `/verify-account` - Verify Account page
- `/select-career-status` - Select Career Status page
- `/profile-set-up` - Profile Set Up page

These routes are defined in the `App.tsx` file:

```tsx
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
        <Route path="/create-account" element={<GetStarted />} />
        <Route path="/account-type" element={<AccountType />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/select-career-status" element={<SelectCareerStatus />} />
        <Route path="/profile-set-up" element={<ProfileSetUp />} />
      </Routes>
    </div>
  )
}

export default App
```

## Instructions for Examiners

To test the different functionalities of the application, please follow the steps below:

1. **Start the Development Server**: Ensure that the development server is running by executing `npm run dev` in the terminal.
2. **Access the Routes**: Use a web browser to navigate to the different routes listed above.
3. **Test the Functionality**: Interact with the pages and forms to test the application's features.

For any issues or questions, please refer to the project documentation or contact the developer.

---

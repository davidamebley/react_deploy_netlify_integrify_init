
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import Users from "./Pages/Users/Users";
import User from "./Pages/User/User";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

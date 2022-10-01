import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/dashboard/Users";
import Rooms from "./pages/dashboard/Rooms";
import Hotels from "./pages/dashboard/Hotels";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import NewUser from "./pages/dashboard/newUser/NewUser";
import NewHotel from "./pages/dashboard/NewHotel/NewHotel";
import NewRoom from "./pages/dashboard/newRoom/NewRoom";
import Profile from "./pages/dashboard/Profile/Profile";
import ListHotels from "./pages/listHotel/ListHotels";
import Navbar from "./components/navbar/Navbar";
import ProtectedRoute from "./ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProfile } from "./redux/actions/userActions";
import Reservations from "./pages/dashboard/Reservations";

function App() {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(state => state.currentUser)
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (token) {
      dispatch(fetchProfile())
    }
  }, [dispatch, token])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={currentUser?.isAdmin ? <Dashboard /> : <Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/hotels" element={<ListHotels />} />
        <Route exact path="/profile" element={<ProtectedRoute component={<Profile />} />} />
        <Route exact path="/dashboard" element={currentUser?.isAdmin ? <Dashboard /> : <Navigate to={'/'} />} />
        <Route exact path="/hotels/:id" element={<Hotel />} />
        <Route exact path="/dashboard/users" element={currentUser?.isAdmin ? <Users /> : <Navigate to={'/'} />} />
        <Route exact path="/dashboard/users/newUser" element={currentUser?.isAdmin ? <NewUser /> : <Navigate to={'/'} />} />
        <Route path="/dashboard/hotels" element={<Hotels />} />
        <Route path="/dashboard/hotels/newHotel" element={currentUser?.isAdmin ? <NewHotel /> : <Navigate to={'/'} />} />
        <Route path="/dashboard/rooms" element={<Rooms />} />
        <Route path="/dashboard/rooms/newRoom" element={<ProtectedRoute component={currentUser?.isAdmin ? <NewRoom /> : <Navigate to={'/'} />} />} />
        <Route exact path="/dashboard/reservations" element={currentUser?.isAdmin ? <Reservations /> : <Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

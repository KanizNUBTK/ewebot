import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import Home from "./pages/Home/Home"
import AdminRoute from "./pages/Login/AdminRoute/AdminRoute";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route
              path="/appointment"
              element={
                <PrivateRoute>
                  <Appointment></Appointment>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<DashboardHome></DashboardHome>}>

              </Route>
              <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin></MakeAdmin>
                  </AdminRoute>
                }
              >

              </Route>

            </Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

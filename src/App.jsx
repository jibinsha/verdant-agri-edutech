import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home
import Home from "./pages/Home/Home";

// Courses
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/Courses/CourseDetails";

// Mock Tests
import MockHome from "./pages/MockTests/MockHome";
import LiveExams from "./pages/MockTests/LiveExams";
import PYQBundles from "./pages/MockTests/PYQBundles";
import PYQDetails from "./pages/MockTests/PYQDetails";
import SeriesBundles from "./pages/MockTests/SeriesBundles";
import AttemptTest from "./pages/MockTests/AttemptTest";
import SeriesDetails from "./pages/MockTests/SeriesDetails";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Courses */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />

        {/* Mock Tests */}
        <Route path="/mocktests" element={<MockHome />} />
        <Route path="/mocktests/live" element={<LiveExams />} />
        <Route path="/mocktests/pyq" element={<PYQBundles />} />
        <Route path="/mocktests/pyq/:id" element={<PYQDetails />} />
        <Route path="/mocktests/series" element={<SeriesBundles />} />
        <Route path="/attempt-test" element={<AttemptTest />} />
        <Route path="/mocktests/series/:id" element={<SeriesDetails />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}
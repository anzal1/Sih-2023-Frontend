import ProtectedRoute from "@/components/protected-routes/protected-route";
import { Providers } from "@/lib/providers/providers";
import Organization from "@/pages/Organization/OrganizationHome";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import socketIO from "socket.io-client";
import { FacialAuthRegister } from "./components/ai-validation/facial-auth-register";
import { LandingPage } from "./pages/Landing";
import ViewProctors from "./pages/Organization/ViewProctors";
import { ws } from "./lib/socket/ws";
import { Join } from "./components/meet/join";
import Room from "./components/meet/room";
import Exam from "./pages/Organization/Exam";
import Questions from "./pages/Organization/questions";
import Students from "./pages/Organization/students";
import ProctorStreamPanel from "./pages/Proctor/proctor-stream-pannel";
import StudentExam from "./pages/Student/student-exam";
import SystemPermissionCheck from "./pages/Student/system-permission-check";
import { useToast } from "./components/ui/use-toast";
// import OrgProfile from "./pages/Organization/profile";
import StdProfile from "./pages/Student/profile";
import AllStudentExams from "./pages/Student/allexams";
import Results from "./pages/Student/results";
import FacialRegister from "./components/ai-validation/facial-register";
import ProctorAllExams from "./pages/Proctor/viewExams";

// TODO: Routes Seperated into different files according to the access level
function App() {
  useEffect(() => {
    ws.on("connect", () => {
      console.log("connected");
    });
  }, []);
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LandingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/proctor/:id/stream"
            element={
              <ProtectedRoute>
                <ProctorStreamPanel />
              </ProtectedRoute>
            }
          />
          <Route path="/student/facial-register" element={<FacialRegister />} />
          <Route
            path="/exam/:id/system-check"
            element={
              <ProtectedRoute>
                <SystemPermissionCheck />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exam/:id/start"
            element={
              <ProtectedRoute>
                <StudentExam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organization/dashboard"
            element={
              <ProtectedRoute>
                <Organization />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organization/exams"
            element={
              <ProtectedRoute>
                <Exam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organization/questions"
            element={
              <ProtectedRoute>
                <Questions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organization/students"
            element={
              <ProtectedRoute>
                <Students />
              </ProtectedRoute>
            }
          />
          <Route
            path="/check"
            element={
              <ProtectedRoute>
                <FacialAuthRegister />
                {/* <Detection /> */}
              </ProtectedRoute>
            }
          />
          <Route
            path="/organization/allProctors"
            element={
              <ProtectedRoute>
                <ViewProctors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/account/profile"
            element={
              <ProtectedRoute>
                <StdProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/account/allexams"
            element={
              <ProtectedRoute>
                <AllStudentExams />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/account/results"
            element={
              <ProtectedRoute>
                <Results />
              </ProtectedRoute>
            }
          />
          <Route
            path="/proctor/activeExams"
            element={
              <ProtectedRoute>
                <ProctorAllExams />
              </ProtectedRoute>
            }
          />
          {/* created nested routes for meet and meet id */}
          <Route path="/join" element={<Join />} />
          <Route path="/room/:id" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;

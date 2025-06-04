import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/landing/Home';
import AboutPage from './pages/landing/About';

import SignIn from './pages/auth/SignIn';
// import Signup from './pages/auth/Signup';
import ChooseRolePage from './pages/auth/ChooseRolePage';
import CandidateSignUpPage from './pages/auth/candidate/SignUp';
import EmployerSignUpPage from './pages/auth/employer/SignUp';
import EmailVerifiedPage from './pages/auth/EmailVerifiedPage';
import ForgotPassword from './pages/auth/ForgotPassword';
import EmailSentPage from './pages/auth/EmailSentPage';
import ResetPassword from './pages/auth/ResetPassword';

// import AuthGuard from './AuthGuard';
import Dashboard from './pages/main/employer/Dashboard';
import PostJob from './pages/main/employer/PostJob';
import ManageJobs from './pages/main/employer/ManageJobs';
import Applicants from './pages/main/employer/Applicants';
import RotationScheduler from './pages/main/employer/RotationScheduler';
import Analytics from './pages/main/employer/Analytics';
import InterviewScheduler from './pages/main/employer/InterviewScheduler';
import CandidateSearch from './pages/main/employer/CandidateSearch';
import ComplianceTracking from './pages/main/employer/ComplianceTracking';
import TeamManagement from './pages/main/employer/TeamManagement';
import Settings from './pages/main/employer/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/signup/choose" element={<ChooseRolePage />} />
        <Route path="/signup/candidate" element={<CandidateSignUpPage />} />
        <Route path="/signup/employer" element={<EmployerSignUpPage />} />
        <Route path="/email-verified" element={<EmailVerifiedPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-sent" element={<EmailSentPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected Employer Routes */}
        <Route path="/employer/dashboard" element={<Dashboard />} />
        <Route path="/employer/post-job" element={<PostJob />} />
        <Route path="/employer/manage-jobs" element={<ManageJobs />} />
        <Route path="/employer/applicants" element={<Applicants />} />
        <Route path="/employer/scheduler" element={<InterviewScheduler />} />
        <Route path="/employer/candidates" element={<CandidateSearch />} />
        <Route path="/employer/analytics" element={<Analytics />} />
        <Route path="/employer/rotation" element={<RotationScheduler />} />
        <Route path="/employer/compliance" element={<ComplianceTracking />} />
        <Route path="/employer/team" element={<TeamManagement />} />
        <Route path="/employer/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App

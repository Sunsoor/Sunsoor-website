// App.js
import React from 'react';
import { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import TermsAndConditions from './pages/Terms&Conditons';
import PrivacyPage from './pages/PrivacyPage';
import Footer from './components/Footer';
import DownloadNow from './pages/DownloadNow'
import { SignIn } from './pages/SignIn';
import { BasicInfo } from './pages/BasicInfo';
import OtpPage from './pages/OtpPage';
import AppTermsAndConditions from './pages/AppTermsAndConditions ';
import InsideNavBar from './components/InsideNavBar';
import Post from './pages/Post';
import Home from './pages/Home';
import CompanyDetails from './pages/CompanyDetails';
import JobDetails from './pages/JobDetails';
import SubscriptionScreen from './pages/SubscriptionScreen';
import DeliveryBoy from './pages/DeliveryBoy';
import CompanyProfile from './pages/CompanyProfile';
import TeachersProfile from './pages/TeachersProfile';
import TeachersSubscription from './pages/TeachersSubscription';
import Payment from './pages/Payment';
import YourProfile from './pages/YourProfile';
import CourseDetails from './pages/CourseDetails';
import UploadVideo from './pages/UploadVideo';
import UploadVideoOne from './pages/UploadVideoOne';
import YourProfileTwo from './pages/YourProfileTwo';
import ElearningThree from './pages/ElearningThree';
import UnlockCourse from './pages/UnlockCourses';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">


      {isLoggedIn ? <InsideNavBar /> : <Navbar />}
      <Routes>
        {isLoggedIn ? <Route path="/" element={<Home />} /> : <Route path="/" element={<LandingPage />} />}

        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/download-now" element={<DownloadNow />} />
        <Route path="/sign-in" element={<SignIn setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/otp-page" element={<OtpPage />} />
        <Route path="/basic-info" element={<BasicInfo />} />
        <Route path="/Login_T&C" element={<AppTermsAndConditions setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/post" element={<Post />} />
        <Route path="/company-details" element={<CompanyDetails />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/subscription-screen" element={<SubscriptionScreen />} />
        <Route path="/delivery-boy" element={<DeliveryBoy />} />
        <Route path="/company-Profile" element={<CompanyProfile />} />
        <Route path="/teacher-Profile" element={<TeachersProfile />} />
        <Route path="/teacher-subscription" element={<TeachersSubscription />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/your-profile" element={<YourProfile />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/upload-video" element={<UploadVideo />} />
        <Route path="/upload-video-one" element={<UploadVideoOne />} />
        <Route path="/your-profile-two" element={<YourProfileTwo />} />
        <Route path="/element-three" element={<ElearningThree />} />
        <Route path="/unlock-courses" element={<UnlockCourse />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

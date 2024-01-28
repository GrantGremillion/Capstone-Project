
// Used to create routes between different pages in website by assigning a path to each .js file
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// importing all web pages
import AccountSelection from './Pages/AccountSelection';
import UserProfile from './Pages/UserProfile';
import UserAccountSettings from './Pages/UserAccountSettings';
import CreateStudentAccount from './Pages/CreateStudentAccount';
import Login from './Pages/Login';
import RecoverPassword from './Pages/RecoverPassword'; 
import CreateClass from './Pages/CreateClass';
import JoinClass from './Pages/JoinClass';
import CreateTeacherAccount from './Pages/CreateTeacherAccount';
import ChatInterface from './Pages/ChatInterface';
import Home from './Pages/Home';

// Root Component for React App
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* The / indicates that this is the default/home page for the website */}
          <Route path="/" element={<AccountSelection />} />
          
          {/* If someone were to add the path below to their url, they would be redirected to the UserProfile page */}
          <Route path="/UserProfile" element={<UserProfile />} />
       
          <Route path="/UserAccountSettings" element={<UserAccountSettings />} />
       
          <Route path="/CreateStudentAccount" element={<CreateStudentAccount />} />

          <Route path="/CreateTeacherAccount" element={<CreateTeacherAccount />} />

          <Route path="/Login" element={<Login/>} />

          <Route path="/RecoverPassword" element={<RecoverPassword/>} />

          <Route path="/CreateClass" element={<CreateClass />} />

          <Route path="/ChatInterface" element={<ChatInterface />} />
       
          <Route path="/JoinClass" element={<JoinClass />} />

          <Route path="/Home" element={<Home />} />
        </Routes>
          
      </div>
    </Router> 
  );
}
export default App;

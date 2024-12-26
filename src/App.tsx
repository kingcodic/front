import './App.css';
import Nav from './components/Nav';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from './components/Footer';
import Main from './pages/Main';
import MangaDetails from './pages/MangaDetails';
import MangaViewer from './pages/MangaViewer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import BackToTop from './components/BackToTop';
import Profile from './pages/Profile';
import CreateManga from './pages/CreateManga';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import { useAuth } from './hooks/useAuth';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const AppContent = () => {
  return (
    <div className="App">
      <Nav />
      <BackToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Main />} />
        <Route path="/manga" element={<Main />} />
        <Route path="/manga/:id" element={<MangaDetails />} />
        <Route path="/manga/:id/chapter/:chapterNumber" element={<MangaViewer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-manga"
          element={
            <PrivateRoute>
              <CreateManga />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-manga/:id"
          element={
            <PrivateRoute>
              <CreateManga isEditing={true} />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <AppContent />
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
};

export default App;

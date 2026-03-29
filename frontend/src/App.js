import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/ui/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PredictionPage from './pages/PredictionPage';
import TestPage from './pages/TestPage';
import RoadmapPage from './pages/RoadmapPage';
import ResultPage from './pages/ResultPage';
import CareerGuidePage from './pages/CareerGuidePage';

function Spinner() {
  return (
    React.createElement('div', {
      style: { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vw', background: 'var(--bg)' }
    },
      React.createElement('div', {
        style: {
          width: 48, height: 48, borderRadius: '50%',
          border: '3px solid var(--brand-light)',
          borderTopColor: 'var(--brand)',
          animation: 'spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite'
        }
      })
    )
  );
}

function PrivateRoute(props) {
  var auth = useAuth();
  if (auth.loading) return React.createElement(Spinner);
  if (!auth.user) return React.createElement(Navigate, { to: '/login', replace: true });
  return props.children;
}

function GuestRoute(props) {
  var auth = useAuth();
  if (auth.loading) return null;
  if (auth.user) return React.createElement(Navigate, { to: '/dashboard', replace: true });
  return props.children;
}

function AppInner() {
  var auth = useAuth();
  return (
    React.createElement(React.Fragment, null,
      auth.user && React.createElement(Navbar, null),
      React.createElement(Routes, null,
        React.createElement(Route, { path: '/', element: React.createElement(LandingPage) }),
        React.createElement(Route, { path: '/login',
          element: React.createElement(GuestRoute, null, React.createElement(LoginPage)) }),
        React.createElement(Route, { path: '/register',
          element: React.createElement(GuestRoute, null, React.createElement(RegisterPage)) }),
        React.createElement(Route, { path: '/dashboard',
          element: React.createElement(PrivateRoute, null, React.createElement(DashboardPage)) }),
        React.createElement(Route, { path: '/predict',
          element: React.createElement(PrivateRoute, null, React.createElement(PredictionPage)) }),
        React.createElement(Route, { path: '/test',
          element: React.createElement(PrivateRoute, null, React.createElement(TestPage)) }),
        React.createElement(Route, { path: '/roadmap',
          element: React.createElement(PrivateRoute, null, React.createElement(RoadmapPage)) }),
        React.createElement(Route, { path: '/career-guide',
          element: React.createElement(CareerGuidePage) }),
        React.createElement(Route, { path: '/result/:id',
          element: React.createElement(PrivateRoute, null, React.createElement(ResultPage)) }),
        React.createElement(Route, { path: '*', element: React.createElement(Navigate, { to: '/', replace: true }) })
      )
    )
  );
}

export default function App() {
  React.useEffect(function() {
    var id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    if (!id || id.includes('your_google_client_id')) {
      console.warn('⚠️ Google OAuth is NOT configured yet. Get your Client ID from Google Cloud Console and paste it into /frontend/.env');
    }

    // Silence "play() request was interrupted" errors
    var handler = function(event) {
      if (event.reason && event.reason.name === 'AbortError' && event.reason.message.includes('play()')) {
        event.preventDefault();
      }
    };
    window.addEventListener('unhandledrejection', handler);
    return function() { window.removeEventListener('unhandledrejection', handler); };
  }, []);

  return (
    React.createElement(BrowserRouter, null,
      React.createElement(GoogleOAuthProvider, { clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID },
        React.createElement(AuthProvider, null,
          React.createElement(Toaster, {
          position: 'top-right',
          toastOptions: {
            duration: 4000,
            style: {
              background: '#ffffff',
              color: 'var(--text)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '12px 16px',
              fontSize: '0.9rem',
              fontWeight: 600,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              fontFamily: 'Inter, sans-serif'
            }
          }
        }),
        React.createElement(AppInner)
      )
    )
  )
);
}

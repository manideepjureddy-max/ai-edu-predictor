import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/ui/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PredictionPage from './pages/PredictionPage';
import TestPage from './pages/TestPage';
import RoadmapPage from './pages/RoadmapPage';
import ResultPage from './pages/ResultPage';

function Spinner() {
  return (
    React.createElement('div', {
      style: { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }
    },
      React.createElement('div', {
        style: {
          width: 44, height: 44, borderRadius: '50%',
          border: '3px solid rgba(108,99,255,0.2)',
          borderTopColor: '#6C63FF',
          animation: 'spin 0.9s linear infinite'
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
        React.createElement(Route, { path: '/result/:id',
          element: React.createElement(PrivateRoute, null, React.createElement(ResultPage)) }),
        React.createElement(Route, { path: '*', element: React.createElement(Navigate, { to: '/', replace: true }) })
      )
    )
  );
}

export default function App() {
  return (
    React.createElement(BrowserRouter, null,
      React.createElement(AuthProvider, null,
        React.createElement(Toaster, {
          position: 'top-right',
          toastOptions: {
            style: {
              background: '#16161E',
              color: '#F0F0FF',
              border: '1px solid rgba(108,99,255,0.3)',
              fontFamily: 'Space Grotesk, sans-serif'
            }
          }
        }),
        React.createElement(AppInner)
      )
    )
  );
}

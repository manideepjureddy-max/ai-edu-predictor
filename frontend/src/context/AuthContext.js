import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

var API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

var AuthContext = createContext(null);

export function AuthProvider(props) {
  var [user, setUser] = useState(null);
  var [token, setToken] = useState(localStorage.getItem('edu_token') || '');
  var [loading, setLoading] = useState(true);

  useEffect(function() {
    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      axios.get(API + '/auth/me')
        .then(function(res) { setUser(res.data.user); })
        .catch(function() {
          localStorage.removeItem('edu_token');
          setToken('');
          delete axios.defaults.headers.common['Authorization'];
        })
        .finally(function() { setLoading(false); });
    } else {
      setLoading(false);
    }
  }, [token]);

  function login(email, password) {
    return axios.post(API + '/auth/login', { email: email, password: password })
      .then(function(res) {
        localStorage.setItem('edu_token', res.data.token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
        setToken(res.data.token);
        setUser(res.data.user);
        return res.data;
      });
  }

  function register(data) {
    return axios.post(API + '/auth/register', data)
      .then(function(res) {
        localStorage.setItem('edu_token', res.data.token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
        setToken(res.data.token);
        setUser(res.data.user);
        return res.data;
      });
  }

  function googleLogin(credential) {
    return axios.post(API + '/auth/google', { credential: credential })
      .then(function(res) {
        localStorage.setItem('edu_token', res.data.token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
        setToken(res.data.token);
        setUser(res.data.user);
        return res.data;
      });
  }

  function logout() {
    localStorage.removeItem('edu_token');
    delete axios.defaults.headers.common['Authorization'];
    setToken('');
    setUser(null);
  }

  return React.createElement(AuthContext.Provider, {
    value: { user: user, token: token, loading: loading, login: login, register: register, googleLogin: googleLogin, logout: logout }
  }, props.children);
}

export function useAuth() {
  return useContext(AuthContext);
}

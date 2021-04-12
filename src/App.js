import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import "./App.css";
import Feed from './components/feed/Feed';
import Login from './components/login/Login';
import { auth } from './firebase';
import Widgets from './components/widgets/Widgets';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => {
    return state.user.user;
  });
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User Logged In
        dispatch({
          type: "LOGIN",
          payload: {
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          }
        })
      }
      else {
        // User Logged Out
        dispatch({
          type: "LOGOUT"
        })
      }
    })
  }, [])
  return (
    <div className="app">
      <Header />
      {!user ? <Login /> : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  )
}

export default App

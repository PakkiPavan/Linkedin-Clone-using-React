import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import "./Login.css";

const Login = () => {
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const loginToApp = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch({
                    type: "LOGIN",
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL
                })
            }).catch(error => {
                alert(error);
            });
    };
    // User123/123123
    const register = () => {
        if (!name) {
            return alert("Please Enter Full Name");
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch({
                            type: "LOGIN",
                            payload: {
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic
                            }
                        })
                    })
            })
            .catch((error) => {
                alert(error.message);
            })
    };
    return (
        <div className="login">
            <img
                src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
                alt=""
            />
            <form>
                <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Full name (requried if registering)" />
                <input value={profilePic} onChange={(event) => setProfilePic(event.target.value)} type="text" placeholder="Profile Pic URL (optional)" />
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>
                Not a member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login

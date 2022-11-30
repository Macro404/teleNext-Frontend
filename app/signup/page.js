"use client"
import { useSession } from "next-auth/react";
import { useRef } from "react";
import { useRouter } from 'next/navigation';
import '../../styles/signup.css'

export default function SignUp(){
    const { data: session } = useSession();
    const router = useRouter();

    const nameRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('');
    const phoneNumberRef = useRef('');
    const personalNumberRef = useRef('');

    const signUp = (event) => {
        event.preventDefault();
        const User = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
            phoneNumber: phoneNumberRef.current.value,
            personNumber: personalNumberRef.current.value
        }
        fetch('https://doubleshot-app.azurewebsites.net/api/users',
        {
            method: 'POST',
            body: JSON.stringify(User),
            headers:{
                'Content-Type': 'application/json',
                'web_token': process.env.JWT_SECRET
            }
        });
        router.push('/checkout')
    }

    if(session){
        return <form onSubmit={signUp} className="signup-container">
            <input type ="text" value={session.user.name} ref={nameRef} className="signup-input" disabled ></input>
            <input type ="text" value={session.user.email} ref={emailRef} className="signup-input" disabled ></input>
            <input type ="text" placeholder="Address" ref={addressRef} className="signup-input"></input>
            <input type ="text" placeholder="Phone Number" ref={phoneNumberRef} className="signup-input"></input>
            <input type ="text" placeholder="Personal Number" ref={personalNumberRef} className="signup-input"></input>
            <input type="submit" value="Sign up" className="signup-button"></input>
        </form>
    }
    return <form></form>
    
}
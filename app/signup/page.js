"use client"
import { useSession } from "next-auth/react";
import { useRef } from "react";

export default function SignUp(){
    const { data: session } = useSession();

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
        console.log(process.env.JWT_SECRET);
    }

    if(session){
        return <form onSubmit={signUp}>
            <input type ="text" value={session.user.name} disabled ref={nameRef}></input>
            <input type ="text" value={session.user.email} disabled ref={emailRef}></input>
            <input type ="text" placeholder="Address" ref={addressRef}></input>
            <input type ="text" placeholder="Phone Number" ref={phoneNumberRef}></input>
            <input type ="text" placeholder="Personal Number" ref={personalNumberRef}></input>
            <input type="submit" value="Sign up"></input>
        </form>
    }
    return <form onSubmit={signUp}>
        <input type ="text" placeholder="name" ref={nameRef}></input>
        <input type ="text" placeholder="name" ref={emailRef}></input>
        <input type ="text" placeholder="Address" ref={addressRef}></input>
        <input type ="text" placeholder="Phone Number" ref={phoneNumberRef}></input>
        <input type ="text" placeholder="Personal Number" ref={personalNumberRef}></input>
        <input type="submit" value="Sign up"></input>
    </form>
}
import React from 'react';
import SignIn from './SignIn';
import LogOut from './LogOut';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
const style = {
  nav: `bg-gray-800 h-17 flex justify-between items-center p-4 rounded-bl-2xl rounded-br-2xl`,
  heading: `text-white text-2xl`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <>
      {user ? (
        <div className={style.nav}>
          <h1 className={style.heading}>Chat App</h1>
          {user ? <LogOut /> : <SignIn />}
        </div>
      ) : (
        <div className="h-[100vh] flex justify-around items-center flex-col ">
          <div className="capitalize text-xl md:text-2xl lg:text-3xl text-white">
            welcome to, we chat App 👋️
          </div>
          {user ? <LogOut /> : <SignIn />}
        </div>
      )}
    </>
  );
};

export default Navbar;

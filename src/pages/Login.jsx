import { useState } from "react";
import appFirebase from "../credentials";
import {useNavigate} from "react-router-dom"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import 'firebase/auth';
import { useSelector, useDispatch } from "react-redux";
import { isLogin, setUserStar,setIsUserLogin } from "../features/starships/starAuthSlice";

const auth = getAuth(appFirebase);

const Login = () => {
  const { isRegister, userStar } = useSelector((state) => state.starAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleIsRegister = () => {
    dispatch(isLogin(!isRegister));
  };

  const aunthenticate = async (e) => {
    e.preventDefault();
    dispatch(setUserStar(user));
    if (user.email === "" || user.password === "") {
      setError("Please fill out all fields.");
    } else {
      setError("");
    }

    if (!isRegister) {
      try {
        await createUserWithEmailAndPassword(auth, user.email, user.password)
        dispatch(setIsUserLogin(true))
        navigate("/")
      

      } catch (error) {
        switch (error.code) {
          case "auth/weak-password":
            setError("Password should be at least 6 characters");
            break;
          case "auth/invalid-email":
            setError("Invalid email");
            break;
          case "auth/email-already-in-use":
            setError("This email is already in use.");
            break;
          // Manejar otros casos de error según sea necesario
        }
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, user.email, user.password);
        dispatch(setIsUserLogin(true))
        navigate("/")
      
      } catch (error) {
      
        console.log(error);
        switch (error.code) {
          case "auth/invalid-email":
            setError("Invalid Email");
        
            break;
          case "auth/invalid-credential":
            setError("The password or email provided are incorrect");
         
            break;
        }
     
      }
    }
  };

  return (
    <section className="h-screen">
      <div className="mx-4 md:mx-32 lg:w-[450px] lg:mx-auto mt-10 bg-gray-900 p-10 rounded shadow">
        <form onSubmit={aunthenticate} noValidate className="grid grid-cols-1">
          <label>Email</label>
          <input
            className="my-1 py-1 px-3 rounded bg-black text-blue-500"
            id="email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            className="my-1 py-1 px-3 rounded bg-black text-blue-500"
            id="password"
            placeholder="******"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <button className=" font-bold text-white py-1 px-3 rounded bg-blue-500 my-3  hover:text-blue-500 hover:bg-black ">
            {isRegister ? "Login" : "Register"}
          </button>
        </form>
        <div className="grid grid-cols-2 items-center">
          <p className="">
            {isRegister ? "Don't have account?" : "Have an account?"}
          </p>
          <button
            onClick={handleIsRegister}
            className=" font-bold py-1 px-3 rounded bg-blue-500 my-3 text-white hover:text-blue-500 hover:bg-black "
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </div>
      </div>
      {error !== "" && (
        <div className="mx-4 md:mx-32 mt-10 lg:w-[450px] lg:mx-auto bg-red-400 rounded">
          <p className="p-2 text-center text-black">{error}</p>
        </div>
      )}
    </section>
  );
};

export default Login;

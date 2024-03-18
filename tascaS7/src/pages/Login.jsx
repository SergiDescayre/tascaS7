import { useState } from "react";
import appFirebase from "../credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { isLogin, setUserStar,isUserLogin } from "../features/starships/starAuthSlice";

const auth = getAuth(appFirebase);

const Login = () => {
  const { isRegister, userStar } = useSelector((state) => state.starAuth);
  const dispatch = useDispatch();

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
    console.log(user);
    dispatch(setUserStar(user));
    console.log(userStar);
    if (user.email === "" || user.password === "") {
      setError("Please fill out all fields.");
    } else {
      setError("");
    }

    if (!isRegister) {
      try {
        await createUserWithEmailAndPassword(auth, user.email, user.password);
        dispatch(isUserLogin(true))
      } catch (error) {
        switch (error.code) {
          case "auth/weak-password":
            setError("Password should be at least 6 characters");
            break;
          case "auth/invalid-email":
            setError("Invalid email");
            break;
          // Manejar otros casos de error según sea necesario
        }
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, user.email, user.password);
        dispatch(isUserLogin(true))
      } catch (error) {
        console.log(error);
        switch (error.code) {
          case "auth/invalid-email":
            setError("Invalid Email");
            break;
          case "auth/invalid-credential":
            setError("The password provided is incorrect");
            break;
        }
      }
    }
  };

  return (
    <section className="h-screen">
      <div className="w-[350px] mx-auto mt-10 bg-gray-900 p-10 rounded shadow">
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
          <button className=" py-1 px-3 rounded bg-blue-500 my-3 text-black hover:text-blue-500 hover:bg-black ">
            {isRegister ? "Login" : "Register"}
          </button>
        </form>
        <div className="grid grid-cols-3 items-center">
          <p className="col-span-2">
            {isRegister ? "Don't have account?" : "Have an account?"}
          </p>
          <button
            onClick={handleIsRegister}
            className=" py-1 px-3 rounded bg-blue-500 my-3 text-black hover:text-blue-500 hover:bg-black "
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </div>
      </div>
      {error !== "" && (
        <div className="w-[350px] mx-auto mt-10 bg-red-400 rounded">
          <p className="p-2 text-center text-black">{error}</p>
        </div>
      )}
    </section>
  );
};

export default Login;

import { useSelector, useDispatch } from "react-redux";
import { setIsUserLogin } from "../features/starships/starAuthSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import appFirebase from "../credentials";
import NetWorks from "./NetWorks";
import ButtonHeader from "./ButtonHeader";
import LogoHeader from "./LogoHeader";

const Header = () => {
  const dispatch = useDispatch();
  const auth = getAuth(appFirebase);
  const navigate = useNavigate();
  const { isUserLogin, userStar } = useSelector((state) => state.starAuth);


  const handleLogOut = async () => {
    localStorage.removeItem("user")
    navigate("/login");
    dispatch(setIsUserLogin(false));
    await signOut(auth);
  };

  return (
    <header className="grid grid-cols-1 md:grid-cols-3 items-center">
      <NetWorks />
      <LogoHeader />
      <div className=" flex flex-col items-center">
        {isUserLogin ? (
          <ButtonHeader title={"LOGOUT"} handleButton={handleLogOut} />
        ) : (
          <ButtonHeader title={"SIGN UP"}/>
        )}
        {isUserLogin && (
          <span className="text-blue-500 mb-3">{userStar.email}</span>
        )}
      </div>
    </header>
  );
};

export default Header;

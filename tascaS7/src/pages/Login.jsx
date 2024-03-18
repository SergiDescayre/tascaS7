import { useState } from "react"
import { useSelector } from "react-redux";

const Login = () => {
  const { auth }  = useSelector((state) => state.starAuth);
  console.log(auth)

    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log(user)
      
    }

    const handleChange =(e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }


  return (
    <section className="h-screen">
      <div className="w-[350px] mx-auto mt-10 bg-gray-900 p-10 rounded shadow">
      <form onSubmit={handleSubmit} className="grid grid-cols-1">
        <label>Email</label>
        <input  className="my-1 py-1 px-3 rounded bg-black text-blue-500" type="email" name="email" value={user.email} onChange={handleChange}/>
        <label>Password</label>
        <input  className="my-1 py-1 px-3 rounded bg-black text-blue-500" placeholder="******" type="password" name="password" value={user.password} onChange={handleChange}/>
        <button type="submit" className=" py-1 px-3 rounded bg-blue-500 my-3 text-black hover:text-blue-500 hover:bg-black ">Login</button>
        <button type="submit" className=" py-1 px-3 rounded bg-blue-500 my-3 text-black hover:text-blue-500 hover:bg-black ">Register</button>
      </form>
    </div>
    </section>
  )
 
  
}

export default Login

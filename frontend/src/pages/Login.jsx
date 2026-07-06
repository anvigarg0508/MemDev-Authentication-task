import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
      <h1 className="text-4xl font-bold text-center mb-6">
        Login
      </h1>

      <input className="w-full border border-gray-300 rounded-md p-2 mb-4"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
/>

      <input className="w-full border border-gray-300 rounded-md p-2 mb-4"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
/>
      

      
     <button
  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
  onClick={async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      if (data.success) {
          alert("Login Successful");
          localStorage.setItem("token", data.token);
          console.log(data.token);
          navigate("/dashboard");
         
    } else {
          alert(data.message);
    }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }}
>
  Login
</button>
<p className="text-center mt-4">
  Don't have an account?{" "}
  <Link to="/signup"
  classNamee="text-blue-600 hover:underline">Sign Up</Link>
</p>
    </div>
    </div>
  )
}

export default Login
import { useState } from "react";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-4xl font-bold mb-6">
        Login
      </h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      
     <button
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
      alert(data.token);

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }}
>
  Login
</button>
    </div>
  )
}

export default Login
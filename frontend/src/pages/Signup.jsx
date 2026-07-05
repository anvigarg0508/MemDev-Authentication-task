import { useState } from "react";
function Signup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="flex flex-col items-center mt-20">
      <h1 className="text-4xl font-bold mb-6">
        Signup
      </h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
      type = "email"
      placeholder = "Email"
      value = {email}
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
        "http://localhost:8000/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);
      alert(data.message);

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }}
>
  Sign up
</button>
      
        </div>
    )

}
export default Signup
import { useNavigate } from "react-router-dom"
function Dashboard(){
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem("token");
        navigate("/login");
    }
    return(
        <div className = "flex flex-col items-center mt-20">
            <h1 className = "text=4xl font-bold">
                Welcome!
            </h1>
            <p className= "mt-4">
                You are successfully logged in.
            </p>
            <button onClick = {handleLogout}>
                Logout
            </button>
        </div>
    );
}
export default Dashboard;
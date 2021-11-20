import FirebaseReactBlog from "../../utils/FirebaseReactBlog";

const Login = () => {
    
    const app = new FirebaseReactBlog()

    return (
        <div className="flex justify-center">
            <div className="bg-green-500 w-full max-w-xs p-3">
                <div className="mb-5">
                    <h1 className="text-white text-5xl">Login</h1>
                </div>
                <div>
                    <button className="bg-blue-500 p-3 rounded-lg" onClick={()=>{app.googleAuth()}}>
                        Sign In / Sign Up with Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import FirebaseReactBlog from "../../utils/FirebaseReactBlog";

const MenuBar = () => {
    
    const app = new FirebaseReactBlog();
    const [isUserSignedIn, setIsUserSignedIn] = useState(app.isUserSignedIn());
    useEffect(() => {
        app.auth.onAuthStateChanged(user => {
            setIsUserSignedIn(user != null);
        });
    })
    
    return (
        <div className="bg-green-500 flex justify-between">
            <div className="flex flex-row">
                <div className="m-2">
                    <Link to="/" className="text-white text-3xl">
                        Home
                    </Link>
                </div>
                <div className="m-2">
                    <Link to="/blog" className="text-white text-3xl">
                        Blog
                    </Link>
                </div>
            </div>
            <div className="flex flex-row">
                {
                isUserSignedIn ? (
                    <div className="m-2">
                        <Link 
                            to="/" 
                            className="text-white text-3xl"
                            onClick={()=>{app.googleSignOut()}}
                        >
                            Logout
                        </Link>
                    </div>
                    
                ) : (
                    <div className="m-2">
                        <Link to="/login" className="text-white text-3xl">
                            Login/Sign Up
                        </Link>
                    </div>
                )
                    
                }
            </div>
        </div>
    )
}

export default MenuBar;
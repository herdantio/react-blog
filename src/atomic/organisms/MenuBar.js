import {Link} from "react-router-dom";

const MenuBar = () => {

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
            <div>
                <div className="m-2">
                    <Link to="/login" className="text-white text-3xl">
                        Login/Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MenuBar;
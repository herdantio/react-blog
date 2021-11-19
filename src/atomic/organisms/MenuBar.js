import {Link} from "react-router-dom";

export default function MenuBar() {

    return (
        <div className="bg-green-500 flex flex-row">
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
    )
}
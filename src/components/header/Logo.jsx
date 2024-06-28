import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link to={"/"}>
            <img className="logo-app" src="./public/images/logo.png" alt="logoPizza"/>
        </Link>
    );
};

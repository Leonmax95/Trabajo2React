import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link to={"/"}>
            <img className="logo-app" src="./images/logo.png" alt="logoPizza"/>
        </Link>
    );
};

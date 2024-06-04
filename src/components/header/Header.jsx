import NavBar from "./NavBar";
import Carrito from "./Carrito";
import { Logo } from "./Logo";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <NavBar />
            <Carrito />
        </header>
    );
};

export default Header;

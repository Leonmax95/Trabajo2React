

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import categories from '../../data/categorias.json';
import pizzaImage from '../../../public/images/logo_i_love_pizza.png';

const NavbarContainer = styled.nav`
background-image: url(${pizzaImage});
background-size: cover;
    background-position: center;
    padding-top: 3.7em;
    display: flex;
    padding-bottom: 3.8em;
    justify-content: space-between;
    align-items: center;
`;

const NavMenu = styled.div`
    display: flex;
    gap: 1rem;
`;

const NavItem = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    background-color: rgb(255 0 0 / 50%);
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgb(189 0 0 / 50%);
        box-shadow: 0px 0px 8px 4px #1eec10;
    }
`;

const HomeLink = styled(NavItem)`
    display: flex;
    align-items: center;
    color: white;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavMenu>
                <HomeLink to="/">Inicio</HomeLink>
                {categories.map((categoria) => (
                    <NavItem key={categoria.id} to={`/category/${categoria.id}`}>
                        {categoria.nombre}
                    </NavItem>
                ))}
            </NavMenu>
        </NavbarContainer>
    );
};

export default Navbar;

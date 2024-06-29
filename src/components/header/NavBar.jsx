import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import styled from 'styled-components';
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

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
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

export const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoriasRef = collection(db, "categorias");
        getDocs(categoriasRef)
            .then((res) => {
                setCategories(res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                }));
            });
    }, []);

    return (
        <NavbarContainer>
            <NavMenu>
                <li>
                    <HomeLink to="/">Inicio</HomeLink>
                </li>
                {categories.map((category) => (
                    <li key={category.id}>
                        <NavItem to={`/category/${category.id}`}>
                            {category.nombre}
                        </NavItem>
                    </li>
                ))}
            </NavMenu>
        </NavbarContainer>
    );
};

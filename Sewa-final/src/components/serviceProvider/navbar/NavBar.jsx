import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styles from "./NavBar.module.scss";
import { useSelector } from 'react-redux';

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const NavBar = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className={styles.spnavbar}>
            <div className={styles.user}>
                <FaUserCircle size={40} color="#fff" />
                <h4>{user && user.email}</h4>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/serviceprovider/home" className={activeLink}>
                            Home
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
}

export default NavBar
import React from 'react';
import styles from './Navbar.module.css';
import logo from './../../assets/Images/logo.png';
import strings from '../../assets/Context/strings.ts';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <img className={styles.logo} src={logo} alt="company logo" />
                <div className={styles.navbarHeader}>{strings.navBarHeader}</div>
                <ul>
                    <li>{strings.navBarHome}</li>
                    <li>{strings.navBarAbout}</li>
                    <li>{strings.navBarServices}</li>
                    <li>{strings.navBarContact}</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
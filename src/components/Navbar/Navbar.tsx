import strings from './../../assets/context/strings';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <header>
            <nav className={styles.navbar_container}>
                <ul>
                    <li>{strings.navBarHome}</li>
                    <li>{strings.navBarAbout}</li>
                    <li>{strings.navBarServices}</li>
                    <li>{strings.navBarContact}</li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
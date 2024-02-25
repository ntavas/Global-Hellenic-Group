import styles from './Navbar.module.css';
import logo from './../../assets/Images/logo.png';
import strings from '../../assets/Context/strings.ts';

const Navbar = (props: any) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.section}>
                    <img className={styles.logo} src={logo} alt="company logo" />
                    <div className={styles.navbarHeader}>{strings.navBarHeader}</div>
                    <ul>
                        <li onClick={() => props.handleNavigation('home')}>
                            {/*<button onClick={() => props.handleNavigation('home')}>*/}
                                {strings.navBarHome}
                            {/*</button>*/}
                        </li>
                        <li onClick={() => props.handleNavigation('about')}>
                            {/*<button onClick={() => props.handleNavigation('about')}>*/}
                                {strings.navBarAbout}
                            {/*</button>*/}
                        </li>
                        <li onClick={() => props.handleNavigation('work')}>
                            {/*<button onClick={() => props.handleNavigation('work')}>*/}
                                {strings.navBarServices}
                            {/*</button>*/}
                        </li>
                        <li onClick={() => props.handleNavigation('contact')}>
                            {/*<button onClick={() => props.handleNavigation('contact')}>*/}
                                {strings.navBarContact}
                            {/*</button>*/}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
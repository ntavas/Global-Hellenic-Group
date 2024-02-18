import React from 'react';
import Navbar from "../Navbar/Navbar.tsx";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.section}>
            <Navbar />
            <div className={styles.container}>
            Home
            </div>
        </div>
    );
};

export default Home;
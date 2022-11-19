import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'

import logo from '../../MidiasCarv/logo/logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Carvalheira" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/eventos">Eventos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className={styles.item} >
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
                <Link to="/">
                    <button className={styles.btn}>
                        INGRESSOS
                    </button>
                </Link>
            </Container>
        </nav>
    )
}
export default Navbar;
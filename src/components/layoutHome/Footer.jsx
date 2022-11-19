import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import Container from './Container'
import logo from '../../MidiasCarv/logo/logo.png'


import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
function Footer() {
    return (

        <footer>

            <div className={styles.footer}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="Carvalheira" />
                    </Link>
                </div>

                <div className={styles.menu}>
                    <h2>Informações:</h2>
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
                </div>
                <div className={styles.information}>
                    <h2>Contato:</h2>
                    <Link to="/">
                        <li className={styles.item}><FaMapMarkerAlt />  Av. Sul Gov. Cid Sampaio, 4921 - Imbiribeira, Recife - PE, 50770-011</li>
                    </Link>
                    <Link to="/">
                        <li className={styles.item}><FaInstagram /> @Carvalheira</li>
                    </Link>
                    <Link to="/">
                        <li className={styles.item}><FaTiktok /> Carvalheira - TikTok</li>
                    </Link>
                    <Link to="/">
                        <li className={styles.item}><FaTwitter /> Twitter</li>
                    </Link>
                    <Link to="/">
                        <li className={styles.item}><FaYoutube /> Canal Carvalheira</li>
                    </Link>
                    <Link to="/">
                        <li className={styles.item}><FaEnvelope /> Email</li>
                    </Link>
                </div>

            </div>
            <div className={styles.text}>
                <p>© 2022 Carvalheira. Todos os direitos reservados.</p>
            </div>
        </footer>

    )
}

export default Footer;
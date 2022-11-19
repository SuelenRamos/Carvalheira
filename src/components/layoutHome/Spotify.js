import styles from './Spotify.module.css'
import logoSpotify from '../../imagens/img1.png'
import capaCarvalheira from '../../imagens/img2.png'
import qrCode from '../../imagens/img3.png'
import { useState } from 'react';
function Spotify(){
    const [link, setLink] = useState('https://open.spotify.com/user/padraocarvalheira');


    return(
        <section className={styles.containerSpotify}>
                  <div className={styles.col1}>
                     <p><span id={styles.font}>OUÇA</span> nossa<br></br> playlist no <br></br><span id={styles.font}>SPOTIFY</span> <br></br>
                        e sinta um pouco dessa <br></br>experiência.</p>

                  </div>
                  <div className={styles.col2}>
                     <div className={styles.playlist}>
                        <img id={styles.image1}src={logoSpotify} alt="Logo do Spotify" />
                        <img id={styles.image2} src={capaCarvalheira} alt="Capa do Carvalheira"/>
                        <a id={styles.btnPlay} href={link}>OUÇA NOSSA PLAYLIST   </a>
                        <img id={styles.image3} src={qrCode} al="QrCode para o Spotify"/>
                     </div>
                  </div>
               </section>
    )
}

export default Spotify;
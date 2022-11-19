import styles from '../cssPages/Home.module.css'
import videoCarvalheira from '../../MidiasCarv/media/carvideo.mp4'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsSpotify } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import Container from '../layoutHome/Container'
import ContainerJogo from '../layoutHome/ContainerJogo'
import SobreCarv from '../layoutHome/SobreCarv'
import NumerosCarv from '../layoutHome/NumerosCarv'
import MelhoresMomentos from '../layoutHome/MelhoresMomentos'
import Spotify from '../layoutHome/Spotify'
import Final from '../layoutHome/Final'

function Home() {
   return (
      <Container>
         <section className="containerVideo">
            <video autoPlay muted loop id={styles.videoCarvalheira} className={styles.videoBody}>
               <source src={videoCarvalheira} type="video/mp4" />
            </video>

            <div id={styles.wrapperVideo}>
               <div id={styles.containerIconsVideo}>
                  <div class={styles.instagramIcon} id={styles.iconV}>
                     <BsInstagram />
                  </div>
                  <div class={styles.facebookIcon} id={styles.iconV} >
                     <BsFacebook />
                  </div>
                  <div class={styles.spotifyIcon} id={styles.iconV}>
                     <BsSpotify />
                  </div>
                  <div class={styles.youtubeIcon} id={styles.iconV}>
                     <BsYoutube />
                  </div>
               </div>

               <div id={styles.containerGeralVideo}>
                  <div id={styles.headerBox}>
                     <h1>CREATING MEMORIES</h1>
                  </div>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil porro impedit molestiae commodi at autem unde corporis.
                  </p>
                  <button id={styles.ingressoBtnVideo} >INGRESSOS</button>
               </div>
            </div>
         </section>

           <ContainerJogo />
           <SobreCarv />
           <NumerosCarv />
           <MelhoresMomentos />
           <Spotify />
           <Final />
      </Container>
   )
}

export default Home;
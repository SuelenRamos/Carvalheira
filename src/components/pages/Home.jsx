import styles from '../cssPages/Home.module.css'
import videoCarvalheira from '../../MidiasCarv/media/carvideo.mp4'


import Container from '../layoutHome/Container'
import VideoIntro from '../layoutHome/VideoIntro'
import ContainerJogo from '../layoutHome/ContainerJogo'
import SobreCarv from '../layoutHome/SobreCarv'
import NumerosCarv from '../layoutHome/NumerosCarv'
import MelhoresMomentos from '../layoutHome/MelhoresMomentos'
import Spotify from '../layoutHome/Spotify'
import Final from '../layoutHome/Final'


function Home() {
   return (
      <Container>
           <VideoIntro />
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
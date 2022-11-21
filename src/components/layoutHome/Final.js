import styles from './Final.module.css'
import galeria1 from '../../imgsFinais/img1.png'
import galeria2 from '../../imgsFinais/img2.png'
import galeria3 from '../../imgsFinais/img3.png'
import galeria4 from '../../imgsFinais/img4.png'
import { Link } from 'react-router-dom'

function Final(){
    return(
        <section className={styles.containerFinal}>
        <div className={styles.final}>
           <div className={styles.text}>
              <p id={styles.textfinal}>E aí? <br></br>
                 <span id={styles.pink}>Curtiu?</span>
              </p>
              <div className={styles.buttonFinal}>
                 <Link to="/Eventos" ><button id={styles.btnFinal} type="button">Confira nossos eventos!</button> </Link>
              </div>
           </div>
           <div className={styles.galeriaFinal}>
              <div className={styles.galeriaLine1}>
                 <img src={galeria1} id={styles.img01} alt="Imagem dos momentos do Carvalheira"/>
                 <img src={galeria2} id={styles.img02}alt="Imagem dos momentos do Carvalheira" />

              </div>
              <div className={styles.galeriaLine2}>
                 <img src={galeria3} id={styles.img03} alt="Imagem dos momentos do Carvalheira"/>
                 <img src={galeria4} id={styles.img04} alt="Imagem dos momentos do Carvalheira"/>
              </div>
           </div>
        </div>
     </section>
    )
}


export default Final;
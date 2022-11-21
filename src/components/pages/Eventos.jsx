import styles from '../cssPages/Eventos.module.css'
import logoBaile from '../../imagens/logo_baile.png'
import logoCarva from '../../imagens/logo_carva.png'
import logoSaoJoao from '../../imagens/logoSaoJoao.png'
import logoBikini from '../../imagens/logo_bikini.png'



function Eventos(){
    return(
      
         <section className={styles.divEventos}>
                <div className={styles.square}>
                     
                     <ul className={styles.logos}>
                            <li>
                            <img src={logoBaile} alt="" />
                            </li>
                            <li>
                            <img src={logoBaile} style={styles.img2} alt="" />
                            </li>
                            <li>
                            <img src={logoCarva} alt="" />
                            </li>
                            <li>
                            <img src={logoSaoJoao} alt="" />
                            </li>
                            <li>
                            <img src={logoCarva}  style={styles.img5} alt="" />
                            </li>
                            <li>
                            <img src={logoBikini} style={styles.img6} alt="" />
                            </li>
                       </ul>             
                     </div>
                       
                
        </section>
       
    )
}

export default Eventos;
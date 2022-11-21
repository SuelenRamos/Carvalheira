import styles from '../cssPages/Contato.module.css'
import creatingMemories from '../../imagens/creatingMemories.png'
function Contato(){
    return(
        <div className={styles.contaienrContato}>
        <div className={styles.contatoWrapper}>
        <div className={styles.contatoHeading}>
            <h1>Envie sua <span className={styles.contatoEnfase}>mensagem</span> ou venha nos <span className={styles.ContatoHeadingEnfase}>visitar!</span> </h1>
        </div>

        <div className={styles.formulario}>
            <form action="/" id={styles.form} >

                <input type="text" name="Nome" id={styles.nomeForm} className={styles.contatoElementoForm} placeholder="Nome" aria-label="Nome" required/>
                <input type="email" name="Email" id={styles.emailForm} className={styles.contatoElementoForm} placeholder="Email" aria-label="Email" required/>
                <input type="text" name="Assunto" id={styles.assuntoForm} className={styles.contatoElementoForm} placeholder="Assunto" aria-label="Assunto" required/>
                <input type="text" name="Mensagem" id={styles.msgForm} className={styles.contatoElementoForm} placeholder="Mensagem" aria-label="Mensagem" required/>
                <div className={styles.btnForm}>
                    <button className={styles.submit} type="submit">Enviar</button>
                </div>
                
                
            </form>
            <div className={styles.contatoImg}>
                <img src={creatingMemories} alt="Imagem Carvelheira - Creating Memories"/>
            </div>
        </div>
        </div>
        </div>


 
    )
}

export default Contato;
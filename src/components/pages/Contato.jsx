import styles from '../cssPages/Contato.module.css'
import creatingMemories from '../../imagens/creatingMemories.png'
function Contato(){
    return(
        <div className={styles.contaienrContato}>
        <div className={styles.contatoWrapper}>
        <div className={styles.contatoHeading}>
            <h1>Envie sua <span className={styles.contatoEnfase}>mensagem</span> ou venha nos <span className="contato-heading-enfase">visitar!</span> </h1>
        </div>

        <div className={styles.formulario}>
            <form action="/" id="form" >

                <input type="text" name="Nome" id={styles.nomeForm} className="contato-elemento-form" placeholder="Nome" aria-label="Nome" required/>
                <input type="email" name="Email" id={styles.emailForm} className="contato-elemento-form" placeholder="Email" aria-label="Email" required/>
                <input type="text" name="Assunto" id={styles.assuntoForm} className="contato-elemento-form" placeholder="Assunto" aria-label="Assunto" required/>
                <input type="text" name="Mensagem" id={styles.msgForm} className="contato-elemento-form" placeholder="Mensagem" aria-label="Mensagem" required/>
                <button className={styles.submit} type="submit">Enviar</button>
                
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
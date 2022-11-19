import styles from './ContainerJogo.module.css';
import garrafa from '../../imagens/garrafa.png'
import imagem1 from '../../imagens/numanice.jpg'
import imagem2 from '../../imagens/amore.jpg'
import imagem3 from '../../imagens/bikini.jpg'
import imagem4 from '../../imagens/carvladeira.png'
import Post from '../../imagens/post.png'
import { useState } from 'react';
import Container from './Container'
 



function ContainerJogo() {
    const [link, setLink] = useState('https://open.spotify.com/user/padraocarvalheira');
    let spin = document.getElementById('buttle');
    const position = [989.873, 722.352, 898.749, 810.372]
    let number = 0;
    const [random, setRandom] = useState(0);
    const [image, setImage] = useState(imagem1);
    const [title, setTitle] = useState('Numanice');
    const [text, setText] = useState('Chegou a vez da gente pagodear forte, esquecer os problemas e ficar 100% nice com as canetadas da @ludmilla. E o pass pra você não perder esse dia por NA-DA está disponível a partir de JÁ.  O comentário é fod@, é o #Numanice na cidade! #AlguémMeBelisca? ');
    const [ingresso, setIngresso] = useState('https://www.ingresse.com/numanice-recife')
    
  
 
    const trocarImg1 = () => {
 
       setImage(imagem1)
       setTitle("Numanice")
       setText("Chegou a vez da gente pagodear forte, esquecer os problemas e ficar 100% nice com as canetadas da @ludmilla. E o pass pra você não perder esse dia por NA-DA está disponível a partir de JÁ.  O comentário é fod@, é o #Numanice na cidade! ")
       setIngresso('https://www.ingresse.com/numanice-recife')
       spin.style.transform = `rotate(${position[1]}deg)`
 
    }
 
    const trocarImg2 = () => {
       setImage(imagem2)
       setTitle("Amoré")
       setText("Em dezembro, a gente se encontra na Praia de Maracaípe, no Balneário de Porto de Galinhas-PE, para viver 5 dias e noites de muita diversão e receber 2023 com todo o amor do mundo.")
       setIngresso('https://www.ingresse.com/reveillon-amore-23')
       spin.style.transform = `rotate(${position[0]}deg)`
    }
 
    const trocarImg3 = () => {
       setImage(imagem3)
       setTitle("Bikini")
       setText("Tão inseparáveis quanto o mar e a areia e a gente e a resenha, é a abertura da melhor estação + o melhor feriado do ano. E se o verão tá pra brotar a gente já sabe que a previsão é de B!K!N!!!!!! E aí, brotos: partiu #BikiniMemories?")
 
       setIngresso('https://www.ingresse.com/bikini-memories')
       spin.style.transform = `rotate(${position[3]}deg)`
    }
 
    const trocarImg4 = () => {
       setImage(imagem4)
       setTitle("Carvalheira na ladeira")
       setText("No ritmo da vontade de viver esses dias e pra fazer jus à terra dos gigantes. Com vocês, o line-up do #CarvalheiraNaLadeira2023. Dos dias 18 a 21/02 vamos viver o melhor CARNAVAL da história!")
 
       setIngresso('https://www.ingresse.com/carvalheira-na-ladeira-23')
       spin.style.transform = `rotate(${position[2]}deg)`
    }
 
    function mudarCartaz() {
 
       if (number === 0) {
          setTitle("Amoré");
          setImage(imagem2);
          setText("Em dezembro, a gente se encontra na Praia de Maracaípe, no Balneário de Porto de Galinhas-PE, para viver 5 dias e noites de muita diversão e receber 2023 com todo o amor do mundo.")
          setIngresso('https://www.ingresse.com/reveillon-amore-23')
       }
       else if (number === 1) {
          setTitle("Numanice");
          setImage(imagem1);
          setText("Chegou a vez da gente pagodear forte, esquecer os problemas e ficar 100% nice com as canetadas da @ludmilla. E o pass pra você não perder esse dia por NA-DA está disponível a partir de JÁ.  O comentário é fod@, é o #Numanice na cidade! #AlguémMeBelisca? ")
          setIngresso('https://www.ingresse.com/numanice-recife')
 
       } else if (number === 2) {
          setTitle("Carvalheira na ladeira");
          setImage(imagem4);
          setText("No ritmo da vontade de viver esses dias e pra fazer jus à terra dos gigantes.  Com vocês, o line-up do #CarvalheiraNaLadeira2023. E é assim, que a gente pode dizer sem medo de errar, dos dias 18 a 21/02 vamos viver o melhor CARNAVAL da história! ");
          setIngresso('https://www.ingresse.com/carvalheira-na-ladeira-23')
 
       } else if (number === 3) {
          setTitle("Bikini");
          setImage(imagem3);
          setText("Tão inseparáveis quanto o mar e a areia e a gente e a resenha, é a abertura da melhor estação + o melhor feriado do ano. E se o verão tá pra brotar a gente já sabe que a previsão é de B!K!N!!!!!! E aí, brotos: partiu #BikiniMemories?")
          setIngresso('https://www.ingresse.com/bikini-memories')
       }
    }
 
    function girarGarrafa() {
 
       number = number + Math.floor(Math.random() * 4); // number recebe número aleatório
 
       while (true) {
          if (number == random) { // verifica se number é igual a random (sendo que random recebeu o valor de number)
             number = Math.floor(Math.random() * 4); // se for igual number recebe outro valor e se for diferente ele quebra o laço
          } else {
             break
          }
       }
       setRandom(number) //random (variavél que está fora da função) recebe o mesmo valor de number
       spin.style.transform = `rotate(${position[number]}deg)`
       mudarCartaz();
 
    }

    return (
        <section className={styles.containerJogo}>

            <div className={styles.quadrado}>

                <div className={styles.coluna1}>
                    <button class="arrow-left control" aria-label="Previous image">◀</button>
                    <button class="arrow-right control" aria-label="Previous image">▶</button>
                    <img id={styles.imgCartaz} class={styles.item} src={image} width="500" height="600" alt="Imagem do evento escolhido" />
                    <div className={styles}>

                        <h3 id={styles.textoTitulo}>{title}</h3>

                        <p id={styles.textoSlide}>{text}</p>


                        <a href={ingresso} id={styles.btnSlide}>INGRESSO</a>
                    </div>
                </div>

                <div className={styles.coluna2}>

                    <div className={styles.eventos}>
                        <div className={styles.eventosProximos}>
                            <h2>PRÓXIMOS <span id={styles.rosa}>   EVENTOS</span></h2>
                        </div>
                        <img onClick={girarGarrafa} id={styles.buttle} src={garrafa} width="120" alt="Imagem da garrafa" />
                        <img onClick={trocarImg1} id={styles.img1} src={imagem1} width="100" height="100" alt="evento do jogo" />
                        <img onClick={trocarImg2} id={styles.img2} src={imagem2} width="100" height="100" alt="evento do jogo" />
                        <img onClick={trocarImg3} id={styles.img3}src={imagem3} width="100" height="100" alt="evento do jogo" />
                        <img onClick={trocarImg4} id={styles.img4}src={imagem4} width="100" height="100" alt="evento do jogo" />
                    </div>
                </div>

            </div>
            <div className={styles.post}>
                    <img id="banner"src={Post} alt="Mais de 120 mil pessoas vivem nossa experiência" width="100%" height="500px"/>
               </div>
        </section>
    )
}

export default ContainerJogo;
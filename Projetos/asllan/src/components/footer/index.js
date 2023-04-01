
import styles from './footer.module.scss';


function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.box01}>
          <div>
            <h1>Asllan</h1>
            <a>Sobre</a>
            <a>Nossos Principios</a>
          </div>
          <div>
            <h1>Atendimento</h1>
            <a>Dúvidas Frequentes</a>
            <a>(61)9999-9999</a>
            <a>email@mail.com</a>
          </div>
          <div>
            <h1>Horário de atendimento</h1>
            <p>Sábado - 08:00 às 19:00</p>
            <p>Domingo - Fechado</p>
            <p>Segunda-feira - 08:00 às 19:00</p>
            <p>Terça-feira - 08:00 às 19:00</p>
            <p>Quarta-feira - 08:00 às 19:00</p>
            <p>Quinta-feira - 08:00 às 19:00</p>
            <p>Sexta-feita - 08:00 às 19:00</p>
          </div>
        </div>
        <div className={styles.box_media}>
            <div>Redes</div>
            <ul>
              <li>ins</li>
              <li>face</li>
              <li>whats</li>
              <li>tel</li>
            </ul>
        </div>
    </div>
  );
}

export default Footer;
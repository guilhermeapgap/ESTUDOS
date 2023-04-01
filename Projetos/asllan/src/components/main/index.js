import styles from './main.module.scss'
import Carousel1 from '../bootstrap/carousel';


function Main(){
    return(
        <div className={styles.container}>       
            <div className={styles.banner}></div>
            <ul>
                <li>
                    <h2>free shipping</h2>
                    <p>lorem daf  dsafkj sdadjç dfkjdçsf </p>
                </li>
                <li>
                    <h2>free shipping</h2>
                    <p>lorem daf  dsafkj sdadjç dfkjdçsf </p>
                </li>
                <li>
                    <h2>free shipping</h2>
                    <p>lorem daf  dsafkj sdadjç dfkjdçsf </p>
                </li>
            </ul>
            <div className={styles.box2}>
                <h1>lorem Ipsun louad meixn cindra optios</h1>    
                <div>                
                    <p>lorem Ipsun </p>
                    <p>lorem Ipsun </p>
                    <p>lorem Ipsun </p>
                </div>
            </div>
            
            <div>
                <Carousel1/>
            </div>

        </div>
    )
}

export default Main;
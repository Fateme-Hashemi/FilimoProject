import React, {useState} from 'react';
import styles from "../styles/Rate.module.css";


//images 
import arrowdown from "../img/Icon.png";
import arrowup from "../img/Iconup.png";

const Rate = ({selectedRating, onRatingChange}) => {

    const [icon, setIcon] = useState(false);
    const [menu, setMenu] = useState(false);
 
     return (
     
<div className={styles.catMainContainer}>
            <div className={styles.inputcontainer} onClick={() => setMenu(!menu)}>
                <div className={styles.innerInputContainer}>
              
                    <div className={styles.input}  onClick={() => setIcon(!icon)} >
                        <span> امتیاز فیلم</span>
                        {icon ? <img src={arrowup} alt="img alt" /> : <img src={arrowdown} alt="img alt" />}
                    </div>
                </div>
            </div>

                <div  className={`${styles.catContainer} ${menu ? styles.catContainerVisible : ''}`}>

             <div className={styles.RateContainer}>

                <div className={styles.col}>            
                <div>
                <input
                    type="checkbox"
                    checked={selectedRating === 'ascending'}
                    onChange={(e) => onRatingChange('ascending')}
                    name="rate"
    />
                    <span>بالاترین امتیاز</span>
             </div>

    
                <div>
                    <input 
                    checked={selectedRating === 'descending'}
                    onChange={(e) => onRatingChange('descending')}
                    name='rate'
                    type='checkbox'
                  
                       />
                <span>پایین ترین امتیاز</span>
            </div>
            </div>
            </div>
            </div>
            </div>

    );
};

export default Rate;
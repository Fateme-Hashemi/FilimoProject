import React, {useState} from 'react';

//style
import styles from "../styles/Category.module.css";

//images 
import arrowdown from "../img/Icon.png";
import arrowup from "../img/Iconup.png";

const Category = ({ onGenreChange, selectedGenre }) => {
    let array = [
        {
            key: "درام", value: "drama"
        },
        {
            key: "کمدی", value: "comedy"
        },
        {
            key: "اکشن", value: "action"
        },

        {
            key: "علمی-تخیلی", value: "sci-fi"
        },


    ]
     
    const [icon, setIcon] = useState(false);
    const [menu, setMenu] = useState(false);

    return (
        <>


            <div  className={styles.catMainContainer} >
            <div className={styles.inputcontainer} onClick={() => setMenu(!menu)}>
                <div className={styles.innerInputContainer}>
              
                    <div className={styles.input}  onClick={() => setIcon(!icon)} >
                        <span>ژانر فیلم</span>
                        {icon ? <img src={arrowup} /> : <img src={arrowdown} />}
                    </div>
                </div>
            </div>

                 <div className={`${styles.catContainer} ${menu ? styles.catContainerVisible : ''}`}>

                {
                    array.map((el, index) => {

                        return <div> <input
                            value={el.value}
                            checked={selectedGenre.includes(el.value)}
                            onChange={(e) => onGenreChange(e.target.value)}
                            type='checkbox'

                        />
                            <span> {el.key} </span>
                        </div>
                    })
                }
            </div>




            </div>
          


        </>
    );
};

export default Category;
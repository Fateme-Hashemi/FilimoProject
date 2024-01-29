//style 
import styles from "../styles/Card.module.css";

//img 
import like from "../img/like.png";





const Cards = ({selectedGenre, selectedRating, selectedAscending, movies}) => {

  return (
    <>
      <div className={styles.maincontainer}>
      
        <div className={styles.titlecontainer}>
          <h2 className={styles.title}>لیست تمامی فیلم و سریال ها</h2>
        </div>
        <div className={styles.cardmainContainer}>
          <div className={styles.cardcontainer}>
            { movies?.map((card, key) => {
                return (
                  <div className={styles.boxcontainer} key={key}>
                    <div className={styles.box}>
                      <div>
                        <img
                          src={card?.pic?.movie_img_s || card?.pic?.movie_img_m || card?.pic?.movie_img_b}
                          alt="MoviePic"
                        />
                      </div>
                      <div className={styles.contentcontainer}>
                        <span className={styles.movietitle}>
                          {card.movie_title}
                        </span>
                        <span className={styles.rate}>
                          امتیاز: {card.rate_avrage}
                        </span>
                      </div>
                      <div className={styles.hovercontent}>
                        <div className={styles.hover}>
                          <span className={styles.likes}>
                            <img
                              src={like}
                              style={{ width: "16px", height: "16px" }}
                              alt="MoviePic"
                            />
                            {card.avg_rate_label}
                          </span>
                          <span className={styles.movietitleH}>
                            {card.movie_title}
                          </span>
                          <span className={styles.categories}>
                            {card.categories.map((category, index) => (
                              <span key={category.link_key}>
                                {index > 0 && "-"}
                                {category.title}
                              </span>
                            ))}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;



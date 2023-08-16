import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
//style
import styles from "../styles/Home.module.css";

//images
import banner from "../img/Collage-tile-tiles-music-rap-hip-hop-wallpaper-1920x1080- 1.png";

//data
import movieData from "../data/data.json";

//components
import Cards from './Cards';
import Category from './Category';
import Rate from "./Rate";



const Home = ({ handleChange }) => {
    let history = useHistory();

    const [selectedGenre, setSelectedGenre] = useState([]);
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedAscending, setSelectedAscending] = useState(false);



    useEffect(() => {
        const storedGenre = localStorage.getItem('selectedGenre');
        const storedRating = localStorage.getItem('selectedRating');
        const storedAscending = localStorage.getItem('selectedAscending');
    
        if (storedGenre) {
          setSelectedGenre(JSON.parse(storedGenre));
        }
    
        if (storedRating) {
          setSelectedRating(JSON.parse(storedRating));
        }
    
        if (storedAscending) {
          setSelectedAscending(JSON.parse(storedAscending));
        }
      }, []);
    
      //QueryStringAndLocalStorage
      useEffect(() => {
        const queryParams = new URLSearchParams();
      
        if (selectedGenre.length > 0) {
          queryParams.set('selectedGenre', selectedGenre.join(','));
        }
      
        if (selectedRating !== null) {
          if (selectedAscending) {
            queryParams.set('sorts[rating]', 'asc');
          } else {
            queryParams.set('sorts[rating]', 'desc');
          }
        }
      
        const queryString = queryParams.toString();
      
        if (queryString) {
          history.push({ search: queryString });
        } else {
          history.push({ search: '' }); // This line removes the query string
        }
      
        localStorage.setItem('selectedGenre', JSON.stringify(selectedGenre));
        localStorage.setItem('selectedRating', JSON.stringify(selectedRating));
        localStorage.setItem('selectedAscending', JSON.stringify(selectedAscending));
      }, [selectedGenre, selectedRating, selectedAscending, history]);
      

      //filterByGenre
      const handleGenreChange = (value) => {
        if (selectedGenre && selectedGenre.includes(value)) {
          setSelectedGenre(selectedGenre.filter((i) => i !== value));
        } else {
          setSelectedGenre([...selectedGenre, value]);
        }
      };

      

    //lowestSorting
    const handleRatingChange = (value) => {
      setSelectedRating(value === selectedRating ? null : value);
    };
    

    //highestSorting
      const handleAscendingChange = (value) => {
        setSelectedAscending(value);
      };


 //filteringAndSorting
    const filterMovies = movieData
    .filter(
      (movie) =>
        !selectedGenre.length ||
        movie.categories.findIndex((cat) => selectedGenre.includes(cat.title_en)) !== -1
    )
    .sort((a, b) => {
      if (selectedRating === 'descending') {
        return a.rate_avrage - b.rate_avrage;
      } else if (selectedRating === 'ascending') {
        return b.rate_avrage - a.rate_avrage;
      } else {
     
        return 0;
      }
    });

   
    return (
        <>


            <div className={styles.container}>
                
                <img className={styles.banner} src={banner} />
                <div className={styles.filtercontainer}>

                  <div >
                    <Category 
                     selectedGenre={selectedGenre} 
                     onGenreChange={handleGenreChange}
                      />
               </div>
  

                 <div>
                 <Rate
                       selectedRating={selectedRating}
                       onRatingChange={handleRatingChange}
                   />               
                 </div>

               </div>
              

                <Cards
                    movies={filterMovies}
                    selectedGenre={selectedGenre}
                    selectedRating={selectedRating}
                    setSelectedAscending={setSelectedAscending}
                    selectedAscending={selectedAscending}

                />
            </div>


        </>
    );
};

export default Home;


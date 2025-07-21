
import React from 'react';

function ListRestaurants() {

    const[restaurants, setRestaurants] = useState([])
  
  useEffect(() => {
    axios.get(BASE_URL + "/restaurants.json")
      .then((response) => {
        console.log(response.data);
        setRestaurants(response.data);
      })
      .catch((e) => console.log("Error", e));
  }, []);

  return (
    <div className="homepage-box">
      <h1>This is the List or Restaurants</h1>
    </div>
  );
}

export default ListRestaurants;

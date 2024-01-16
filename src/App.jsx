import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  let [isLoading, setIsloading] = useState(true);
  let [tours, setTours] = useState([]);

  const removeTour = (id) => {
    console.log("Clickedd");
    console.log(id);
    let newTours = tours.filter((tour) => tour.id !== id);
    console.log(newTours);
    setTours(newTours);
  };

  const fetchData = async () => {
    setIsloading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);

      console.log(tours);
    } catch (error) {
    }
    setIsloading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (isLoading) {
    return <main>
      <Loading />
    </main>
  }
  if (tours.length == 0) {
    return (
      <section>
        <div className='title'>
          <h2>No more tours to show</h2>
          <div className='title-underline '></div> <br />
        
        <button className="btn" style={{marginTop:'2 rem'}} onClick={()=>fetchData()}>Refresh</button>
        </div>
      </section>

    )
  }

// return <Loading/>

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )


};
export default App;

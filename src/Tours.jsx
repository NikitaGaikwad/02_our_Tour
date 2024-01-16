import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
    return (
        <section>
            <div className='title'>
                <h2>Our Tour</h2>
                <div className='title-underline '></div>
            </div>
            <div className='tours'>
                {tours.map((tour) => {
                    console.log(tour);
                    return <Tour key={tour.id} id={tour.id} image={tour.image} info = {tour.info} name={tour.name} price={tour.price} removeTour={removeTour}/>;
                })}
            </div>
        </section>
    )
}

export default Tours;

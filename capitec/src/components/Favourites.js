import "./Favourites.css";
const Favourites = ({favourites}) => {
    return ( 
        <div className="favourites_wrapper">
            {
                favourites.map(favourite => (
                    <div className="favourite_item card" key={favourite.id}>
                        <div className="card-content">
                            <p>{favourite.name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}
export default Favourites;
import "./Favourites.css";
const Favourites = ({favourites}) => {
    return ( 
        <div className="row favourites_wrapper center">
            {
                favourites.map(favourite => (
                    <div className="white col s6 center favourite_item card" key={favourite.id}>
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
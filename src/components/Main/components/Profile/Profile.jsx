import "./Profile.css";

const Profile = () => {
     return (  
          <section className="traveler-profile site__section">
          <img className="traveler-profile__image" src="./images/icon__user.png" alt="Avatar" />
          <div className="traveler-profile__details">
            <h1 className="traveler-profile__name">Valeria Naranjo</h1>
            <button
              aria-label="Edit traveler profile"
              className="traveler-profile__edit-btn"
              type="button"
            >X</button>
            <p className="traveler-profile__bio">IT Student</p>
          </div>
          <button
            aria-label="Add new place"
            className="traveler-profile__add-place-btn"
            type="button"
          >X</button>
        </section>
     );
}
 
export default Profile;
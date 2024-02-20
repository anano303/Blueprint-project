import "./Home.css";
import photo from "../Assets/პოლიგრაფია.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <h1> რა არის შენი ცხოვრების მთავარი ბლუპრინტი?</h1>
        <p>
          You plan your vision, you plan your purpose =that's we call your life
          blueprint
        </p>
      </div>
      <h2 className="home-h2">
        CONTACT <span>US</span>
      </h2>

      <img className="poto" src={photo} alt="photo" />
    </div>
  );
};

export default Home;

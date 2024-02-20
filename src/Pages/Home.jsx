import "./Home.css";
import photo from "../Assets/პოლიგრაფია.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <h1 className="fadeInTitle">
          {" "}
          რა არის შენი ცხოვრების მთავარი ბლუპრინტი?
        </h1>
        <p className="fadeInParagraph">
          You plan your vision, you plan your purpose{" "}
          <span> that's we call your life blueprint</span>
        </p>
      </div>

      {/* <img className="poto" src={photo} alt="photo" /> */}
    </div>
  );
};

export default Home;

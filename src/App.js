import Heading from "./component/Heading/Heading";
import Highlights from "./component/Highlights/Highlights";
import NavBar from "./component/navbar/NavBar";
import Slider from "./component/Slider/Sider";
import data from "./data/samsung.json";

import "./App.css";
import ClickSlideShow from "./component/AllClickSlider/ClickSlide1";
import ClickSlideShow2 from "./component/AllClickSlider/ClickSlide2";
import ClickSlideShow3 from "./component/AllClickSlider/ClickSlide3.js";
import SearchBox from "./component/SearchBox/SearchBox";
import Footer from "./component/Footer/Footer";


function App() {
  return (
    <>
      <NavBar logo={data.logo} />
      <Slider slider={data.slider} video={data.video} />

      <Heading heading="This Week's Highlights" />
      <Highlights LeftCover={data.Highlights.LeftCover} NewIn={data.Highlights.NewIn} Mobile={data.Highlights.Mobile} tv={data.Highlights.tv}
        Appliances={data.Highlights.Appliances} GalaxyEcosystem={data.Highlights.GalaxyEcosystem} />

      <Heading heading="show case slider" />
      <ClickSlideShow Slide1Item={data.clickSlideFirst} />

      <Heading heading="TV & AV" />
      <ClickSlideShow2  Slide1Item={data.clickSlide2} />

      <Heading heading="Home Appliances" />
      <ClickSlideShow3 Slide1Item={data.clickSlide3} />

      <Heading heading="Looking for something else?" />
      <SearchBox />

      <Footer />
    </>
  );
}

export default App;

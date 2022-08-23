import imgDesktop from "images/desktop-1x.webp";
import imgTablet from "images/tablet-1x.webp";
import imgMobile from "images/mobile-1x.webp";

import { HomePage, HomeTitle } from "pages/Home/Home.styled";

const Home = () => {

  return (
    <HomePage>
      <picture>
        <source srcSet={imgDesktop}
          media="(min-width: 1200px)" width="800px"/>
        <source srcSet={imgTablet}
            media="(min-width: 768px)" width="400px"/>
        <source srcset={imgMobile}
              media="(min-width: 320px)" width="280px"/>
        <img src={imgMobile} alt="Calmar" />
      </picture>
      <HomeTitle>WELCOME TO CONTACTS APP</HomeTitle>
    </HomePage>
  );
};

export default Home;
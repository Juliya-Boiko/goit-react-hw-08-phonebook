import imgDesktop from "images/desktop-1x.webp";
import imgTablet from "images/tablet-1x.webp";
import imgMobile from "images/mobile-1x.webp";
import { HeroTitle, HeroText } from "./Hero.styled";

export const Hero = () => {
  return (
    <>
      <picture>
        <source srcSet={imgDesktop}
          media="(min-width: 1200px)" width="800px"/>
        <source srcSet={imgTablet}
            media="(min-width: 768px)" width="400px"/>
        <source srcSet={imgMobile}
              media="(min-width: 320px)" width="280px"/>
        <img src={imgMobile} alt="Calmar" />
      </picture>
      <HeroTitle>WELCOME TO CONTACTS APP</HeroTitle>
      <HeroText>This application created for saving youre contacts</HeroText>
      <HeroText>You always can add new contacts, edit or delete already existing contacts</HeroText>
  </>);
};
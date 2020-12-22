import React from "react";
import ButtonLink from "../ButtonLink";
import MouseImage from "../MouseImage";
import * as Styles from "./styles";

const Hero = () => (
  <Styles.Wrapper className="hero" data-testid="hero">
    <div className="hero__container">
      <Styles.Logo>
        <img src="/images/ivdm-logo.svg" width={271} height={300} alt="Isto Vai Dar Merda logo" />
      </Styles.Logo>
      <Styles.Intro>
        <h1 className="hero__title" aria-label="Isto Vai Dar Merda" data-testid="hero-title">
          <svg xmlns="http://www.w3.org/2000/svg" width={498} height={85}>
            <text x={0} y={65}>
              Isto Vai Dar
            </text>
          </svg>
          Merda
        </h1>
        <p className="hero__description" data-testid="hero-description">
          O <i>Isto Vai Dar Merda</i> é um evento que materializa a máxima “quem avisa, amigo é”, pensado para abordar
          temas que estão no “tipping point” de dar merda mas que ainda podem ser salvos de tão triste fado.
        </p>
        <Styles.CallToAction className="hero__call-to-action">
          <ButtonLink url="/#schedule" value="Agenda" label="Consulta a Agenda" />
          <ButtonLink url="/#hein" value="Hein?!" label="Sabe mais sobre o evento" />
        </Styles.CallToAction>
      </Styles.Intro>
    </div>

    <MouseImage className="mouse" />
  </Styles.Wrapper>
);

export default Hero;
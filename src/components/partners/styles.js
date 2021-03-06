import styled from "styled-components";
import { rem } from "polished";
import { device } from "../../../utils/breakpoints";

export const Wrapper = styled.section`
  background-color: var(--yellow);
  padding: ${rem("30px")};
  text-align: center;

  h2 {
    font-size: ${rem("40px")};
  }

  @media ${device.s} {
    padding: ${rem("50px")};

    h2 {
      font-size: ${rem("64px")};
    }
  }
`;

export const Logos = styled.div`
  --itemWidth: ${rem("125px")};
  --borderRadius: ${rem("15px")};
  margin: ${rem("35px")} auto 0 auto;

  ul {
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
  }

  @media ${device.l} {
    --itemWidth: ${rem("250px")};
    --borderRadius: ${rem("50px")};
  }
`;

export const Logo = styled.li`
  list-style: none;
  position: relative;
  margin: 10px;
  border-radius: var(--borderRadius);
  background-color: ${({ bg }) => bg || "var(--light)"};
  width: var(--itemWidth);
  height: var(--itemWidth);

  &:before {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    border-radius: var(--borderRadius);
    opacity: 0.5;
    box-shadow: 0 0 ${rem("50px")} rgba(33, 33, 33, 0.5);
    width: 100%;
    height: 100%;
    transition-duration: 500ms;
    transition-property: opacity;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      --maxSize: 70%;
      width: 100%;
      height: auto;
      max-width: var(--maxSize);
      max-height: var(--maxSize);
    }
  }

  &:hover,
  &:focus {
    &:after {
      opacity: 1;
    }
  }

  @media ${device.l} {
    margin: ${rem("15px")};
  }
`;

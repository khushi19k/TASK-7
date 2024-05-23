import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from 'react-router-dom'; 

interface ArrowProps {
  direction: "left" | "right";
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
  ${(props) => props.direction === "left" ? "left: 10px;" : "right: 10px;"}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div<{ bg: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;


const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const sliderItems = [
  { id: 1, bg: "f5fafd", title: "BUY AND SELL", desc: "TURN CLUTTER INTO CASH. FIND ITEMS YOU'LL LOVE.", img:"https://c8.alamy.com/comp/2C3JHDA/single-retro-bicycle-painted-in-monochrome-turquoise-isolated-on-white-background-abstract-concept-3d-render-2C3JHDA.jpg" },
  { id: 2, bg: "fcf1ed", title: "GREAT DEALS", desc: "DISCOVER AMAZING PRODUCTS AT GREAT PRICES.",img:"https://c8.alamy.com/comp/2C3JHDA/single-retro-bicycle-painted-in-monochrome-turquoise-isolated-on-white-background-abstract-concept-3d-render-2C3JHDA.jpg" },
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        {sliderItems.map((item, index) => (
          <Slide bg={item.bg} key={item.id} style={{ transform: `translateX(${(index - slideIndex) * 100}%)` }}>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button><StyledLink to="/product">SHOP NOW</StyledLink></Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
import style from "styled-components";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Work = style.section`
background:url(../images/work-bg.jpg);
background-size: 100% 100%;
width: 100%;
padding: 160px 50px;
color: #fff;
`;

const WorksTitle = style.h2`
width: 140px;
height: 140px;
border-radius: 100px;
border: 12px solid #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 32px;
text-align: center;
margin: 0 auto;
padding-top: 16px;
`;

const WorksTitleJp = style.span`
display: inline-block;
font-size: 20px;
`;

const WorksContainer = style.section`
max-width: 1100px;
width: 100%;
text-align: right;
margin: 140px auto auto;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  dots: 0,
  accessibility: true,
};

const SliderItem = style.figure`

& img {
  margin: 0 auto;
  border: 4px solid #fff;
  width: 300px;
}
`;
const WorksContentsTitle = style.h3`
  max-width: 1035px;
  margin: 0 auto;
  border-bottom: 4px solid #fff;
`;
const WorksContentsText = style.p`
  max-width: 1035px;
  margin: 6px auto;
`;

export default function Works(props) {
  let weblist = [];
  let advlist = [];

  for (let i = 0; i < props.children.length; i++) {
    if (props.children[i].type == "web") {
      weblist.push(props.children[i]);
    } else if (props.children[i].type == "adv") {
      advlist.push(props.children[i]);
    }
  }

  return (
    <Work id="works">
      <WorksTitle>
        作品集<WorksTitleJp>Works</WorksTitleJp>
      </WorksTitle>
      <WorksContainer>
        <Slider className="web-slider" {...settings}>
          {weblist.map((item) => {
            return (
              <SliderItem>
                <img src={item.subimage.url} />
              </SliderItem>
            );
          })}
        </Slider>
        <WorksContentsTitle>WEB DESIGN</WorksContentsTitle>
        <WorksContentsText>
          こちらはWeb作品です。Web関係の作品を掲示しています。
        </WorksContentsText>
      </WorksContainer>

      <WorksContainer>
        <Slider className="adv-slider" {...settings}>
          {advlist.map((item) => {
            return (
              <SliderItem>
                <img src={item.subimage.url} />
              </SliderItem>
            );
          })}
        </Slider>
        <WorksContentsTitle>ADVERTISING DESIGN</WorksContentsTitle>
        <WorksContentsText>
          こちらは広告系の作品です。広告関係の作品を掲示しています。
        </WorksContentsText>
      </WorksContainer>
    </Work>
  );
}

import { Carousel } from "react-bootstrap";
import PlaceHolder from "../common/PlaceHolder";

export default function MainCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <PlaceHolder className="img" text="First slide" />
        <Carousel.Caption>
          <h3>1枚目</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <PlaceHolder className="img" text="Second slide" />
        <Carousel.Caption>
          <h3>2枚目</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

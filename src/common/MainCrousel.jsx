import { Carousel, CarouselItem } from "react-bootstrap";
import PlaceHolder from "./PlaceHolder";

export default function MainCrousel() {
  return (
<Carousel>
    <Carousel.Item>
        <PlaceHolder />
    </Carousel.Item>
</Carousel>
  )
}
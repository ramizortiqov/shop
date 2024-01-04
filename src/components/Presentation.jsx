import React from "react";
import Item from "./Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Presentation extends React.Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className="presentation">
        <div className="heading-title">Товары дня</div>
        <Slider className="slider" {...settings}>
          {this.props.items.map(
            (el) =>
              el.stick === "td.svg" && (
                <Item
                  likeThis={this.props.likeThis}
                  disLike={this.props.disLike}
                  favourites = {this.props.favourites}
                  key={el.id}
                  item={el}
                  onAdd={this.props.onAdd}
                />
              )
          )}
        </Slider>
      </div>
    );
  }
}
export default Presentation;

import React from "react";
import Popup from "reactjs-popup";
import BlackJackCarousel from "./Blackjack_project/SkillsCarouselBlackjack";

const PopupCarousel = () => {
  return (
    <Popup trigger={<button className="view-technologies"> View Technologies </button>}>
      <div>
        <BlackJackCarousel />
      </div>
    </Popup>
  );
};

export default PopupCarousel;

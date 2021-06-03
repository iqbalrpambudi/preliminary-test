import React from "react"
import { CardComponents } from "../../../style/style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"

function Card(props) {
  return (
    <CardComponents>
      <img src="https://picsum.photos/200/300" alt="food" />
      <div className="content">
        <div className="content__rating">
          <small>4.5</small>
          <FontAwesomeIcon icon={faStar} color={`#f9423a`} style={{ marginLeft: `8px`,fontSize:`14px` }} />
        </div>
        <div className="content__title">
          <h4>Roasted Chicken</h4>
          <small>by Kulina</small>
        </div>
        <div className="content__footer">
          <div className="content__footer__price">Rp 35.000</div>
          <div className="content__footer__button">
            <a>
              ADD{" "}
              <FontAwesomeIcon icon={faPlus} style={{ marginLeft: `8px` }} />
            </a>
          </div>
        </div>
      </div>
    </CardComponents>
  )
}

export default Card
import App from "../App"
import styles from "./RestaurantCard.module.css"

export const DetailsComponents = (({ title, hotel,
    price, time, cash = false,
    upi = false, card = false }) => {


    return (
        <div className={styles.detailsContainer}>
            <h3>{hotel}</h3>
            <div>{title}</div>
            <div>Cost  ₹ {price} for one</div>
            <div>min  ₹{50} Upto {time} min</div>
            <div>Accepts {cash && "Cash"} {upi && "UPI"}
                {card && "Card"} payments</div>
        </div>
    )
})
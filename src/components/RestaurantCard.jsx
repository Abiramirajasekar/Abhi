import { Image } from "./Image"
import { DetailsComponents } from "./DetailsComponent"
import { OrderButton } from "./OrderButton"
import { RatingComponents } from "./Rating"
import { App } from "../App"
import styles from "./RestaurantCard.module.css"

function RestaurantCard({ data }) {
    const { price, hotel, id, imge, rating, review, title } = data
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <Image
                        src={imge}


                        width="100px"
                        height="150px" />
                </div>
                {/* price, hotel, id, img, rating, review, title */}
                <div style={{ flex: 3 }}>
                    <DetailsComponents
                        Cost={price}
                        min={50}
                        time={60}
                        title={title}
                        hotel={hotel}
                        cash={true}
                        upi={true} />
                </div>

                <div><RatingComponents review={review} rating={rating} /></div>
            </div>
            <div className={styles.footer}>
                < OrderButton />
            </div>
        </div>
    )
}
export default RestaurantCard
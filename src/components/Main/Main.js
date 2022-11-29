import Promo from "../Promo/Promo";


function Main({ onClickPromoButton }) {
    return (
        <div className="main">
            <Promo onClick={onClickPromoButton} />
        </div>
    )
}

export default Main;
import './Promo.css';

function Promo({ onClick }) {
    return (
        <section className="promo">
            <div className="promo__wrapper">
                <h1 className="promo__title">WE ARE</h1>
                <p className='promo__text'>COMING SOON</p>
                <button className='promo__more-btn' onClick={() => onClick()}>СВЯЗАТЬСЯ С НАМИ</button>
            </div>
        </section>
    )
}

export default Promo;
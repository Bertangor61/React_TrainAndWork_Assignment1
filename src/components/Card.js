import React from 'react'
import "../styles/products.css"

const Card = ({item,setUserBasket,userBasket}) => {
    return (
        <div className="product-card">
            <div className="badge">Hot</div>
            <div className="product-tumb">
                <img src={item.image} alt="" />
            </div>
            <div className="product-details">
                
                <h4><a href="">{item.productTitle}</a></h4>
                <p>{item.description}</p>
                <div className="product-bottom-details">
                    <div className="product-price">$200</div>
                    <div className="product-links">
                        <button onClick = {() => {
                            setUserBasket([...userBasket, item])

                        }} className="buy-btn">Satın Al</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

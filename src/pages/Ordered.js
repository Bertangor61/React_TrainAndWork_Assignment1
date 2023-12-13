import React from 'react'
import '../styles/Basketpage.css'

const Ordered = ({ user }) => {

    const { products } = user;
    console.log('products -> ', products)
    return (
        <div className='basket-container'>
            <h1 className='basket-title'>
                Siparislerim <br />
            </h1>

            <div className='basket-cards'>

                {
                    products.map(arr =>
                        arr.map((item, index) => (
                            <div key={index} className='basket-card'>
                                <img src='https://i.imgur.com/xdbHo4E.png' alt='product' />
                                <h2>Title:{item.productTitle} </h2>
                                <h2>Cost: {item.price} </h2>
                                <h2>Product ID:{item.id} </h2>
                            </div>
                        ))
                    )
                }



            </div>


        </div>
    )
}

export default Ordered

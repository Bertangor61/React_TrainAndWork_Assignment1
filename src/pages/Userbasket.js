import React from 'react'
import '../styles/Basketpage.css'
const Userbasket = ({ setUserBasket, userBasket, user }) => {



    const buyHandle = () => {
        if (user) {
            user.products.push(userBasket)
            console.log('satin alindi', user)


            fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('User password updated:', data);
                })
                .catch(error => {
                    console.error('There was a problem with the password update:', error);
                });
        }

        setUserBasket([])


    }
    return (
        <div className='basket-container'>
            <h1 className='basket-title'>
                SEPETİM <br />
            </h1>

            <div className='basket-cards'>

                {
                    userBasket.map((item, index) => {
                        return (
                            <div className='basket-card'>
                                <img src='https://i.imgur.com/xdbHo4E.png' />
                                <h2>Title:{item.productTitle} </h2>
                                <h2>Cost: {item.price} </h2>
                                <h2>Product ID:{item.id} </h2>
                            </div>

                        )
                    })
                }
            </div>

            <button className='btn' onClick={buyHandle}>
                Sepeti Onayla
            </button>
        </div>
    )
}

export default Userbasket

import React, { useState } from 'react'
import "../styles/products.css"
import { useEffect } from 'react';
import Card from '../components/Card';


const Home = ({ category ,products, setUserBasket,userBasket}) => {

    //console.log(category);
    const [selectCategory,setSelectCategory] = useState([]);


    useEffect(() => {

        let mergedProducts = [];
        for (const key in products) {
            if (Object.hasOwnProperty.call(products, key)) {
              // Her bir anahtarın değerini (array'leri) birleştirin
              mergedProducts = mergedProducts.concat(products[key]);
            }
          }

        setSelectCategory(mergedProducts)
    },[products])


    useEffect(() => {
        if(category === "All"){
            console.log('all test')
            console.log('products test', products)
            let mergedProducts = [];
            for (const key in products) {
                if (Object.hasOwnProperty.call(products, key)) {
                  // Her bir anahtarın değerini (array'leri) birleştirin
                  mergedProducts = mergedProducts.concat(products[key]);
                }
              }
            setSelectCategory(mergedProducts)
        }
        else if(category){
            console.log('category test -> ' , category)
            setSelectCategory(products[category])

        } 
    },[category])




    useEffect(() => {
        console.log('selectCategory -> ',selectCategory)

    },[selectCategory])


    useEffect(() => {
        console.log('userBasket',userBasket);
    },[userBasket])


    return (
        <div>

            <section id="home" className="welcome-hero">
                <div className="container">
                    <div className="welcome-hero-txt">
                        <h2>ALIŞVERİŞ YAPACAĞINIZ EN İYİ ADRES <br/> ARADIĞINIZ HER ŞEY BURADA </h2>
                        <p>
                            En uygun fiyatlar, en kaliteli ürünler, hızlı kargo ile sizin için burdayız
                        </p>
                    </div>
                </div>
            </section>



            <section id="products" className="products-hero">
                <div className="products-hero-txt">
                    <div className="welcome-hero-txt welcome-hero-txt-2">
                        <h2 style={{ color: 'black' }}>İhtİyacınız Olan Tüm Ürünler</h2>
                        <p style={{ color: 'black' }}>
                            En uygun fiyatlar, en kaliteli ürünler, hızlı kargo ile sizin için burdayız
                        </p>
                    </div>
                </div>

                <div className='products-list'>

                    {
                        selectCategory.map((item,index) => {
                            return(
                               
                                    <Card key={index} item = {item} setUserBasket={setUserBasket} userBasket={userBasket}/>

                               
                            )
                        })
                    }
                    
                </div>


            </section>

        </div>
    )
}

export default Home

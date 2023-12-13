import './App.css';
import Navbar from './components/Navbar';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Userbasket from './pages/Userbasket';
import Login from './pages/Login';
import Register from './pages/Register';
import Ordered from './pages/Ordered';

function App() {
  // Kullanılacak state'leri tanımlanması
  const [category, setCategory] = useState("All");  //kategory için 
  const [products, setProducts ] = useState();  //ürün için 
  const [userBasket,setUserBasket] = useState([]);  //sepeti için 
  const [user,setUser] = useState(null); //kullanıcı bilgileri için 

  useEffect(() => {   // Kullanıcı değiştiğinde log mesajı göster
    console.log('giris yapildi -> ',user);

  },[user])

  // Verileri API'den çekmek için bir fonksiyon yazıldı
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/products'); // Verileri bir API'den almak için fetch  kullanıldı.
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setProducts(data.category); // State'i güncelle, alınan veriyle ürünleri günceller
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Bileşen yüklendiğinde verileri çekmek için
  useEffect(() => {
    fetchData();

  },[])

  // Ürünlerin değiştiğinde konsola bas
  useEffect(() => {
    console.log(products);
  },[products])

  return (
    <div className="App">
      {/* Navbar bileşenini render et, gerekli props'ları ilet */}
      <Navbar setCategory={setCategory} setUserBasket={setUserBasket} userBasket = {userBasket} user = {user} />
      
      {/* Sayfa yönlendirmelerini için */}
      <Routes>  {/* Ana sayfa rotası */}
        <Route path='/'  element={<Home category={category} products = {products} setUserBasket={setUserBasket} userBasket={userBasket} user = {user} />} />
        
        {/* Sepet sayfası rotası */}
        <Route path='/basket' element={<Userbasket  setUserBasket={setUserBasket} userBasket={userBasket} user = {user} />}/>
        {/* Giriş sayfası rotası */}
        <Route path='/login' element={<Login setUser={setUser} />} />
        {/* Kayıt sayfası rotası */}
        <Route path='/register' element={<Register setUser={setUser} />} />
        {/* Siparişler sayfası rotası */}
        <Route path='/siparisler' element={<Ordered user={user} />} />
      </Routes>
    </div>
  );
}

export default App;

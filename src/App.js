
import { useEffect, useState } from 'react';
import Naresh from 'axios'
import './App.css';


function App() {
  const [c, d] = useState("");




  const [g, h] = useState(() => {
    const venu = localStorage.getItem("nandigam");
    return venu ? JSON.parse(venu) :

      []
  });




  const [a, b] = useState([])
  useEffect(() => {
    Naresh.get("https://fakestoreapi.com/products").then(chinna => { b(chinna.data) })
  })


  const full = a.filter(chinnodu =>
    chinnodu.title.toLowerCase().includes(c.toLowerCase()) ||
    chinnodu.category.toLowerCase().includes(c.toLowerCase()))










  const chinna = (e) => {
    d(e.target.value)
  }


  const Order = (product) => {
    h(fulldata => [...fulldata, { ...product, count:1, location: "Guntur" }]);
  };


  const phani = (id) => {
    h(fulldata => fulldata.filter(data2 => data2.id !== id))
  }


  useEffect(() => {
    localStorage.setItem("nandigam", JSON.stringify(g));
  }, [g]);





  const updateQuantity = (data2Id, newQuantity) => {
    h(prevCart =>
        prevCart.map(item => (item.id === data2Id ? { ...item, count: newQuantity } : item))
    );
};

  const total = () => {
    return g.reduce((y, z) => y + z.price * z.count, 0).toFixed(5);
  }











  return (
    <div>
      <h1 id='header'>PRODUCTS</h1>
      <input type='text' placeholder='🧐TITLE & CATEGO' value={c} onChange={chinna} id='sear' />


      <div id='main'>

        {
          full.map(data =>
            <ul id='ul'>



              <li id='li'><img src={data.image} id='img'></img></li>
              <li id='li1'><h2>{data.title}</h2></li>
              <li id='li'><h2>PRICE:{data.price}</h2></li>
              <li id='li'>rating:{data.rating.rate}</li>
              <li id='li'>count:{data.rating.count}</li>
              <li id='li'><p>category:{data.category}</p></li>
              <button onClick={() => { Order(data) }}>ADD TO CART</button>



            </ul>)
        }
      </div>




      <div id='main22'>
        {
          g.map(data2 =>(
            <ul id='ul20'>



              <li>{data2.id}</li>
              <li> ITEMNAME:{data2.title}</li>
              <li>AMOUNT:-{data2.price}</li>
              <li>AREA:{data2.location}</li>
              <li><img src={data2.image} id='prod-img' /></li>
              <input type="number" value={data2.count} onChange={(e) => updateQuantity(data2.id, parseInt(e.target.value))} style={{width:"40px",height:"30px"}}/>




              <li><button onClick={() => phani(data2.id)}>REMOVE</button></li>

          
  







            </ul>
           
            
        


          ))

        }
      </div>


<h1>TOTAL:{total()}</h1>


      </div>
  );
}

export default App;

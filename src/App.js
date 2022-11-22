import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data.js"  //simple js file not component

// method#1
// import img_1 from "../src/images/card-pic1.png"   
// import img_1 from "./images/card-pic1.png"

  
function App() {
  
  const dataElement = Data.map((element) =>{
    return (
      
      <Card 
    // key={element.id}   
    // img={element.img_pic}    
    // img_rating={element.img_rating} 
    // img_title={element.img_title} 
    // img_price={element.img_price}
    element = {element}
    />
     
    )
   })
  

  return (
    // will return all components
    <>
    <Navbar/>
    <Hero/>

    {/* Concept of Props : Instead of hardcoding values in our jsx component , we can provide them value using props.
    just like we give value to any function to run dynamically
    eg. function sum(){
      return 1+2;
    }

    the above function is of no use because it will return 3 everytime , its not reusable
    so,
    eg, function sum(a,b){
      return a+b;
    } 

    now , we can give this function any value while calling. like sum(3,4) / sum(5,6) etc
    */}
    


    {/* Props must be given as attribute , just like in HTML, but here we have flexibilty to write custom attribute names */}
    <div className="outerBox">
    {dataElement}
    </div>
   

  
    </>
  );
}

export default App;
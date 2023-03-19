import React from "react"
import "./styles.css"
import Shop from "./Shop"





 const Home = ()  => {
    return (
      <>
      <div className="bg-primary-main ml-32 px-32 py-2.5 ">
        <section className=" pt-8 md:pt-16 pb-24">
            <div className="container mx-auto px-4 md:flex md:items-center">
                
                <div className="md:w-1/2 mb-8 md:mb-0">
                
                <h1 className="text-4xl md:text-7xl font-bold text-primary-secondary leading-tight mb-4 uppercase">Super nice Cocktails based on Lemons </h1>
                
                <p className="text-xl font-semibold md:text-4xl text-black leading-normal mb-12">For you next weekend <span class="text-primary-secondary">Or</span> Party with friends</p>
                </div>
                
                <div className="md:w-1/2 ">
                    <img className="w-full h-full" src="https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/333823658_758975419159929_7166226314962536590_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Wb2YWbBG5DkAX9nDN8M&_nc_ht=scontent-cph2-1.xx&oh=03_AdQ3oW3AduGeFo4C3TbCZZ2WpbC8bFngMSlhri9_I8k3Kw&oe=6435A6F6" alt="Hero Portret"/>
                </div>
            </div>
        </section>
    </div>

    <Shop />
    
    
    
      </>
  
    );
  };

  export default Home;
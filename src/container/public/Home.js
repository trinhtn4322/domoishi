import React from 'react';
import "../../font.css"
import hinh1 from "../../assets/AdobeStock_518963087.svg"
import ImageSlider from "../../components/ImageSlider"
import { Link } from 'react-router-dom';
import ImageNote from "../../components/ImageNote"
import About from "../../components/About"

const Home = () => {
  return (
    <div className="w-full relative mb-[10vw]">
          <div className="absolute top-0 md:h-[35vw] flex flex-col justify-center pt-[10vw]">

            <img src={hinh1} alt="description"  />
            </div>
    <div className="absolute z-30 top-0 md:h-[28vw] mdmax:h-[20vw] lg:ml-[13vw] flex flex-col justify-center  ml-[4vw]  pt-[14vw] pv:max-lg:pt-[8vw]">
       
        <p className="text-left text-[5vw] leading-[5vw] md:max-mdmax:text-[6vw] md:max-mdmax:leading-[5vw]  pv:max-md:leading-[5vw] pv:max-md:text-[5vw] " style={{ fontFamily: 'nexa-light' }}>
        DON'T
        <br/>
        EAT LESS.
        <br/>
        JUST
        <br/>
        EAT REAL.
        </p>
        <Link to="/locations">
          <button className="mt-10 bg-green-500 text-white font-bold py-3 px-[8vw] rounded-full hover:bg-gray-800" style={{ fontFamily: 'shopee-bold' }}>
            ORDER ONLINE
          </button>
        </Link>
        </div>

        <div className="pt-[45vw] ">
        <ImageSlider />
        </div>
    <p className="text-black text-[5vw] mt-32 w-[40vw] text-center translate-x-3/4 leading-[6vw]" style={{ fontFamily: 'chalkboard' }}>What why when domoishi ?</p>
       <p className="leading-[3vw] pt-[3vw] text-[1.3vw] translate-x-[10vw] max-w-[78vw] text-center " style={{ fontFamily: 'svn-nexa-bold' }}>WE HANDPICK AUTHENTIC INGREDIENTS FROM DIVERSE REGIONS IN ASIA, INFUSING OUR RECIPES WITH A DELIGHTFUL FUSION OF POPULAR KOREAN, JAPANESE, AND OTHER ASIAN DISHES SUCH AS POKE, SOY GARLIC CRUNCHY CHICKEN, TONKOTSU RAMEN, BUBBLE TEA, AND A PLETHORA OF ENTICING FUSION CREATIONS. THIS ENSURES THAT EACH CULINARY ENCOUNTER WITH US IS A TRULY EXCEPTIONAL EXPERIENCE.</p>
       
       <ImageNote/>
      <About/>
       </div>
  );
};
  export default Home;
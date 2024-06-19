import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import hinh1 from "../assets/AdobeStock_626446128.svg"
import hinh2 from "../assets/AdobeStock_647889979.svg"
import note1 from "../assets/Union 4.svg"
import note2 from "../assets/Union 6.svg"
import hinh12 from "../assets/Group 143.svg"

const ImageNote = () => {
    return (
    <div>

    <div className="relative mt-[10vw] h-[40vw] flex justify-center">
        <div className="absolute z-0 ml-[20vw]">
           <img
                src={hinh1}
                alt="background"
                className="object-cover z-10 "
                />
            </div> 
                <div className="h-[40v] absolute bottom-0 ml-[60vw] ">
                    <img
                    src={hinh12}
                    className="object-cover z-0 "
                    />
                       
            </div>
        <div className="absolute z-0 mr-[40vw] w-[30vw] -translate-y-20">
            <img
                src={note1}
                className="object-cover"
                />
            <div className=" flex justify-center absolute z-10 top-0 w-full mt-[2vw] flex-col " >
                <p className="flex justify-center text-[1.8vw]" style={{fontFamily: "jonitha-script"}}>CUSTOMERS DESERVE THE BEST</p>
                <p className="p-[2.5vw] text-center text-[1.4vw] font-bold" style={{ fontFamily: 'svn-nexa-light' }}>We source the best materials and ingredients, many from the region of the world where the menu item originates. Wanting the best for our customers even includes our carry out bags, provided for in restaurant leftovers and our online take out customers enjoyment.</p>
            </div>
        </div>
        </div>



        <div className="relative">


        <div className="mt-[1.5vw] h-[35vw] flex justify-center">
        <div className="absolute z-10  w-[30vw] mt-[2vw] ml-[38vw]">
        <img
                src={note2}
                className="object-cover"
                />
            <div className=" flex justify-center absolute z-10 top-0 w-full mt-[2vw] flex-col " >
                <p className="text-white flex justify-center text-[1.8vw]" style={{fontFamily: "jonitha-script"}}>GREAT TASTE</p>
                <p className="text-white p-[2.5vw] text-center text-[1.4vw] font-bold" style={{ fontFamily: 'svn-nexa-light' }}>By carefully selecting top-quality ingredients and flavors from Asia and leveraging our expertise, we tailor tastes to suit each region perfectly. Our diverse menu is thoughtfully crafted to offer a well-blended variety, ensuring that every visit is exciting with new combinations to try. keeping you engaged and satisfied.</p>
                </div>
            </div> 
        <div className="absolute z-0 mr-[25vw] w-[42vw] -translate-y-10">
            
           <img
                src={hinh2}
                alt="background"
                className="object-cover z-10 "
                />
            </div>
       
        </div>
        </div>
        <div className="flex justify-center">
       <button className="mb-5 bg-black text-white text-xl font-bold py-[1.2vw] px-[5vw] rounded-full hover:bg-gray-800" style={{ fontFamily: 'shopee-bold' }}>
        LEARN MORE
           </button>
           </div>
      </div>
    );
  };
  
  export default ImageNote;
  
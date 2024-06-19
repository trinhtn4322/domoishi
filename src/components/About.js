import bg1 from "../assets/Subtraction 1.svg"


const About = () => {
    return (
    <div className="relative mt-[4vw] w-full">
    <img
        src={bg1}
        className="object-cover w-full"
    />
    <div className="w-full absolute top-0 mt-[3vw] flex-col">
    <p className=" flex justify-center text-[3vw]" style={{fontFamily: "jonitha-script"}}>#AboutDOMOISHI</p>
    <div className="mt-5 flex justify-center text-center px-[12vw] text-[1.6vw]">
    <span  style={{ fontFamily: "shopee-regular" }}>
  We’re always making noise on Instagram. For the latest and greatest news and updates, follow us @domoishi on
  <a href="https://www.instagram.com/domoishi" className="underline mx-1">Instagram,</a>
  <a href="https://www.tiktok.com/@domoishi" className="underline mx-1">TikTok</a>, and
  <a href="https://www.facebook.com/domoishi" className="underline mx-1">Facebook</a>.
  </span> 
      </div>
      </div>
      </div>
    );
  };
  
  export default About;
  
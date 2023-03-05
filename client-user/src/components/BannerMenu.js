import bannermenu from "../banner-menu.png";
import commercial1 from "../commercial1.mp4";
import "../index.css";

let BannerMenu = () => {
  return (
    <div className="flex h-96 w-full bg-black
     ">
   <img className=" " src={bannermenu}/>
   <div className="lg:flex ">
   <video autoPlay muted loop  className="  w-full" src={commercial1}/>
   </div>
    </div>
  );
};

export default BannerMenu;

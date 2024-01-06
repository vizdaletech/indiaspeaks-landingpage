const Hamburger = ({ isClicked, setIsclicked }) => {
    return (
      <div
        className="flex flex-col gap-[5px] burger-menu"
        onClick={() =>{
        console.log("Clicked")
            setIsclicked(!isClicked)}
        }    
      >
        <span
          className={`w-[20px] h-[2px] bg-white up transition-all ${
            isClicked ? `active` : ""
          }`}
        ></span>
        <span
          className={`w-[20px] h-[2px] bg-white middle transition-all ${
            isClicked ? `active` : ""
          }`}
        ></span>
        <span
          className={`w-[20px] h-[2px] bg-white down transition-all ${
            isClicked ? `active` : ""
          }`}
        ></span>
      </div>
    );
  };
  
  export default Hamburger;
  
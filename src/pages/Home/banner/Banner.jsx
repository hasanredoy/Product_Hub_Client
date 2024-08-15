
const Banner = () => {
  return (

  <div className="hero min-h-[calc(100dvh-200px)] w-[93%] mx-auto lg:w-[85%]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* img div  */}
    <div className=" flex-1">
    <img
      src="https://img.freepik.com/free-vector/illustration-designer-online-service-platform-artist-drawing-picture-digital-illustration-online-shop-flat-vector-illustration_613284-3040.jpg?t=st=1723744007~exp=1723747607~hmac=9c056486e93a44b79dfe6ade7f244f0a8bd70356a7855e8ee45d6ac4df89dcc1&w=740"
      className=" rounded-lg " />
    
    </div>
    {/* content div  */}
    <div className=" flex-1">
      <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold">Welcome to <span className=" text-primary-light">Product Hub</span>!</h1>
      <p className="py-6 text-sm lg:text-base">
      Discover a world of top-rated products at your fingertips! At Product Hub, we bring you the latest and greatest in electronics, fashion, home appliances, and more. Whether you’re looking for the newest smartphone, high-performance running shoes, or versatile kitchen gadgets, we’ve got you covered. 
      </p>
      <button className=" btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default Banner;
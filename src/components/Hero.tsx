

import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      id='hero'
      className="min-h-screen bg-no-repeat bg-cover  flex flex-col items-center justify-center"
      style={{ backgroundSize: "17%", backgroundPosition: "left 100px top 100px" }}
    >
      <Navbar />
      
      <div className="container mx-auto grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        
        {/* Image Section */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="bg-cover bg-center bg-[url(/amy.jpeg)] w-70 h-70 lg:w-80 lg:h-80 rounded-full shadow-lg"></div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-4 text-white">
          <h1 data-aos="zoom-in-up" className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-2">
            I'm
          </h1>
          <h2 data-aos="zoom-in-up" className="text-4xl sm:text-6xl lg:text-7xl font-bold">
            Amyma Naz
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;

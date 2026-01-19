import heroImage from "@/assets/hero-logistics.jpg";

const Hero = () => {
  return (
    <section className="relative bg-background overflow-hidden pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Centered Title */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-dot-dark tracking-tight">
            Fast, Safe & on time.
          </h1>
        </div>

        {/* Device Frame with Pink Blobs */}
        <div className="relative flex justify-center items-center max-w-5xl mx-auto">
          {/* Left Pink Blob */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[35%] h-[70%] rounded-[40px] z-0"
            style={{ backgroundColor: 'hsl(340, 82%, 85%)' }}
          />
          
          {/* Right Pink Blob */}
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[35%] h-[70%] rounded-[40px] z-0"
            style={{ backgroundColor: 'hsl(340, 82%, 85%)' }}
          />
          
          {/* Device Frame (Tablet/Laptop) */}
          <div className="relative z-10 bg-dot-dark p-3 md:p-4 rounded-[30px] md:rounded-[40px] shadow-2xl w-full max-w-2xl">
            <div className="rounded-[22px] md:rounded-[32px] overflow-hidden">
              <img
                src={heroImage}
                alt="Dot Logistics Transport - Camión de transporte"
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

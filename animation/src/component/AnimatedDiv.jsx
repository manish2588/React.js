import  { useState } from "react";

function AnimatedDiv() {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true); // Trigger the hover effect
  };

  const handleMouseOut = () => {
    setHovered(false); // Reset the hover effect
  };

  return (
    <main className="w-full h-screen">
      <section className="w-full h-full flex flex-col items-center overflow-hidden">
        {/* Div 1: Top partial */}
        <div
          className={`bg-slate-400 w-1/3 h-64 transition-transform duration-500 ${
            hovered ? "translate-y-0" : "translate-y-[-25%]"
          }`}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Div 1
        </div>

        {/* Div 2: Center full */}
        <div
          className={`bg-slate-400 w-1/3 h-64 transition-opacity duration-300 ${
            hovered ? "opacity-80" : "opacity-100"
          }`}
        >
          Div 2
        </div>

        {/* Div 3: Bottom partial */}
        <div
          className={`bg-slate-400 w-1/3 h-64 transition-transform duration-500 ${
            hovered ? "translate-y-0" : "translate-y-[25%]"
          }`}
        >
          Div 3
        </div>
      </section>
    </main>
  );
}

export default AnimatedDiv;

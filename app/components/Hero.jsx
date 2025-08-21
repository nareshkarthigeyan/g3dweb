"use client";
import AnimatedText from "./AnimatedText";
import AnimatedButton from "./AnimatedButton";
import AnimatedWord from "./AnimatedWord";

const headline1 = "Unleash";
const headline1Orange = " Innovation";
const headline2 = "with";
const headline2Orange = " 3D Printing";
const sub = "Transforming ideas into reality with cutting-edge";
const subb = "additive manufacturing for every industry.";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-100 animate-fade-in-up">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated Text (Visible on md and up) */}
          <div className="hidden md:block">
            <AnimatedText
              text1={headline1}
              text2={headline1Orange}
              css="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl font-['MonumentExtended'] bg-clip-text text-transparent text-orange-600 tracking-tight"
            />
            <AnimatedText
              text1={headline2}
              text2={headline2Orange}
              css="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-orange-600 leading-tight drop-shadow-xl font-['MonumentExtended'] bg-clip-text text-transparent bg-gradient-to-r from-black via-orange-600 to-orange-400 tracking-tight"
            />
          </div>

          {/* Static Text (Visible below md) */}
          <div className="block md:hidden">
            <h1 className="text-3xl font-extrabold text-black leading-tight text-center font-['MonumentExtended'] tracking-tight">
              {headline1}
              <span className="text-orange-600">{headline1Orange}</span>
            </h1>
            <h1 className="text-3xl font-extrabold mb-4 text-black leading-tight text-center font-['MonumentExtended'] tracking-tight">
              {headline2}
              <span className="text-orange-600">{headline2Orange}</span>
            </h1>
          </div>

          <AnimatedWord
            word1={sub}
            word2={subb}
            css="text-xl md:text-3xl text-gray-700 mb-10 max-w-lg mx-auto font-medium font-['NeueMontreal'] animate-fade-in-up"
          />

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
            <AnimatedButton
              href="/services"
              css="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg text-lg shadow-lg transition duration-100 group relative overflow-hidden hover:cursor-pointer"
              content="Explore Services"
            />

            <AnimatedButton
              href="/contact"
              css="bg-white hover:bg-orange-50 border-2 border-orange-600 text-orange-600 font-bold py-4 px-10 rounded-lg text-lg shadow-lg transition duration-100 group relative overflow-hidden"
              content="Contact Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

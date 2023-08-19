import { Link } from "react-router-dom";
import logoImg from "/logo.svg";
import { FiArrowRight } from "react-icons/fi";

export default function Landing() {
  return (
    // landing-page
    <div className="flex justify-center items-center w-screen h-screen  bg-gradient-to-br from-[#00c7c7] to-[#29b6d1] ">
      {/* {content-wrapper} */}
      <div className="w-full max-w-[1100px] h-full max-h-[680px] flex items-start flex-col justify-between relative bg-hero-landing bg-no-repeat bg-[80%]">
        <img src={logoImg} alt="Logo da Happy" />
        
        <main className="max-w-[350px]">
          <h1 className="text-7xl font-extrabold">Leve felicidade para o mundo</h1>
          <p className="mt-10 text-2xl">Visite orfanatos e mude o dia de muitas crianças</p>
        </main>

        {/* {location } */}
        <div className="absolute right-0 top-0 text-2xl flex flex-col text-right">
          <strong className="font-extrabold">Araci</strong>
          <span>Bahia</span>
        </div>

        <Link to="/app" className="absolute right-0 bottom-0 w-20 h-20 bg-[#ffd666] rounded-3xl flex items-center justify-center hover:bg-[#96feff] transition duration-200">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

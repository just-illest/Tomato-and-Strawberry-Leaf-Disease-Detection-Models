import Predict from "./Predict";
import{Link} from "react-router-dom";
import Navbar from "./navbar";

function App() {
  return(
    <>
    <div className="absolute"><Navbar/></div>

    <div className="flex pt-20 h-screen bg-slate font-helvetica items-center justify-center px-20">
      <div className="relative flex h-4/5 w-3/5 items-center justify-end peer">
        <div className="peer flex bg-indigo
        h-3/4 w-3/4 absolute -translate-x-5 -translate-y-5
        hover:translate-x-0 hover:translate-y-0 hover:text-neutral hover:bg-emerald duration-300 ease-out
        text-slate text-9xl p-6"> Tomato Leaf Disease Detection</div>
        <div className="peer-hover:bg-neutral peer-hover:text-emerald duration-300 ease-in flex px-5 py-y border-2 border-neutral h-3/4 w-3/4 text-neutral text-9xl">
          
        </div>
      </div>
      <div className="py-20 pr-36 pl-2 text-indigo h-4/5 w-2/5 text-7xl peer-hover:translate-x-5 duration-300">
        A better way to spot diseases for tomatoes
        <div>
        <button className=" h-20 w-32 text-xl text-slate text-center
        bg-indigo
        hover:bg-neutral hover:text-slate duration-300" > Get Started
          </button>
        </div>
      </div>
    </div>
    <Predict/>
    </>
  );

}

export default App;

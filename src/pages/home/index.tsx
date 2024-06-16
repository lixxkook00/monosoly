import { useEffect, useState } from "react";
import { Background, MoveTransition } from "../../components";
import { useNavigate } from "react-router-dom";

const Home:React.FC = () => {

  const [loadingProcess, setLoadingProcess] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Fake loading process
    const interval = setInterval(() => {
      setLoadingProcess((prev) => {
        if (prev < 100) {
          return prev + 5;
        } else {
          setTimeout(() => {
            navigate('/game');
          }, 800);
          clearInterval(interval);
          return prev;
        }
      });
    }, 50); // Adjust the interval time as needed

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return <>
    <Background />
    
    <div className="absolute w-full h-full backdrop-blur-3xl px-2 pt-2 pb-[32%] overflow-y-scroll flex items-center justify-center">
      <div className="w-full">
        <MoveTransition y="5vh">
          <div className="text-center text-3xl my-3">
            Đang tải
          </div>

          <div className="px-4 bg-slate-800/60 py-4 rounded-xl">
            <div className="user-level-process w-full h-6 rounded-full">
              <div className="user-level-process-value h-full rounded-full" style={{width: `${loadingProcess}%`}}></div>
            </div>
          </div>

          <div className="text-5xl text-center mt-5 text-[#F9B821] font-bold">
            MonoSoly
          </div>

          <div className="text-xl text-center text-[#B8B8B8]">
            Will be launched
          </div>

          <div className="text-sm text-center mt-14">
            Stay tuned
          </div>
          <div className="text-base text-center font-semibold">
            More infor in official channel
          </div>
          <div className="flex justify-center">
            <img className="mr-2 mt-2" src="/images/ic-tele-black.png" alt="" />
            <img className="mr-2 mt-2" src="/images/ic-yt-black.png" alt="" />
            <img className="mr-2 mt-2" src="/images/ic-x.png" alt="" />
          </div>
        </MoveTransition>
      </div>
    </div>
  </>
}

export default Home;
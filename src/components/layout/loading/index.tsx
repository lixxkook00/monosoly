import Background from "../../background"

const Loading: React.FC = () => {
  return <>
    <Background />

    <div className="absolute w-full h-full backdrop-blur-3xl px-2 pt-2 pb-[32%] overflow-y-scroll flex justify-center items-center">
      <div className="loadingio-spinner-spin-2by998twmg8"><div className="ldio-yzaezf3dcmj">
        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
        </div>
      </div>
    </div>
  </>
  
}

export default Loading;
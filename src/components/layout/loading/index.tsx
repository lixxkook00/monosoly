const Loading: React.FC = () => {
  return <>
    <div className="absolute scale-[1.25] h-full flex items-center">
      <img className="w-full" src="/images/map-full.png" alt="map" />
    </div>

    <div className="absolute w-full max-h-full min-h-full backdrop-blur-3xl px-5 pt-5 pb-[32%] overflow-y-scroll"></div>
  </>
  
}

export default Loading;
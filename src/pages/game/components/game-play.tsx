import '../styles/game-play.scss'

const SLOT_QUANTITY = 24;

const GamePlay = () => {
  const slots = [];

  for (let i = 0; i < SLOT_QUANTITY; i++) {
    slots.push(
      <div key={i} className={`slot slot-${i+1}`}></div>
    );
  }

  return (
    <div className="scene">
        <div className="scene-map w-full">
          <img className='w-full' src="/images/map.png" alt="" />
        </div>

        <div className="scene-content w-full h-full">
          {
            slots
          }
        </div>
    </div>
  )
}

export default GamePlay;
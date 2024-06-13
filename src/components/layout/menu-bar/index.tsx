import { IcFriends, IcMine, IcEarn } from '../../../icons'
import './menu-bar.scss'

const Menubar = () => {
  return (
    <div className="menu-bar">
      <div className="menu-bar-bg">
        <img src="/images/bar-bg.png" alt="" />
        <img className='menu-bar-decor' src="/images/bar-center.png" alt="" />
      </div>
      
      <div className="menu-bar-content">
        <div className="menu-bar-item">
          <IcFriends />
          <div className="menu-bar-name text-1">
            Friends
          </div>
        </div>
        <div className="menu-bar-item">
          <IcMine />
          <div className="menu-bar-name text-1">
            Mine
          </div>
        </div>
        <div className="menu-bar-item main">
          <div className="menu-bar-name primary-gold text-5">
            5/6
          </div>
          <img src="/images/lighting.png" alt="" />
        </div>
        <div className="menu-bar-item">
          <IcEarn />
          <div className="menu-bar-name text-1">
            Earn
          </div>
        </div>
        <div className="menu-bar-item">
          <img src="/images/token.png" alt="" />
          <div className="menu-bar-name text-1">
            Airdrop
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menubar;
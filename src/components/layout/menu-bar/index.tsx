import { IcFriends, IcMine, IcEarn } from '../../../icons'
import './menu-bar.scss'

const menuItems = [
  { name: 'Friends', icon: IcFriends },
  { name: 'Mine', icon: IcMine },
  { name: 'Go', icon: IcFriends },
  { name: 'Earn', icon: IcEarn },
  { name: 'Airdrop', icon: IcFriends },
];

const Menubar = () => {
  return (
    <div className="menu-bar">
      <div className="menu-bar-bg">
        <img src="/images/bar-bg.png" alt="" />
      </div>
      <div className="menu-bar-content">
        {menuItems.map((item) => (
          <div className="menu-bar-item" key={item.name}>
            <item.icon />
            <div className="menu-bar-name">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menubar;
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IcFriends, IcMine, IcEarn } from '../../../icons';
import './menu-bar.scss';

const Menubar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="menu-bar">
      <div className="menu-bar-bg">
        <img src="/images/bar-bg.png" alt="" />
        <img className='menu-bar-decor' src="/images/bar-center.png" alt="" />
      </div>
      
      <div className="menu-bar-content">
        <NavLink to="/friends" className={`menu-bar-item ${isActive('/friends') ? 'active' : ''}`}>
          <IcFriends />
          <div className="menu-bar-name text-1">
            Friends
          </div>
        </NavLink>
        <NavLink to="/mine" className={`menu-bar-item ${isActive('/mine') ? 'active' : ''}`}>
          <IcMine />
          <div className="menu-bar-name text-1">
            Mine
          </div>
        </NavLink>
        <div className="menu-bar-item main" onClick={() => navigate('/game')}>
          <div className="menu-bar-name primary-gold text-5">
            5/6
          </div>
          <img src="/images/lighting.png" alt="" />
        </div>
        <NavLink to="/earn" className={`menu-bar-item ${isActive('/earn') ? 'active' : ''}`}>
          <IcEarn />
          <div className="menu-bar-name text-1">
            Earn
          </div>
        </NavLink>
        <NavLink to="/airdrop" className={`menu-bar-item ${isActive('/airdrop') ? 'active' : ''}`}>
          <img src="/images/token.png" alt="" />
          <div className="menu-bar-name text-1">
            Airdrop
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Menubar;

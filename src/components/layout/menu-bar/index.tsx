import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IcFriends, IcMine, IcEarn } from '../../../icons';
import './menu-bar.scss';
import { RootState } from '../../../contexts/store';
import { useSelector } from 'react-redux';

const Menubar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;
  const energy = useSelector((state: RootState) => state.user.energy);

  const handleRoll = () => {
    const diceEl = document.querySelector<HTMLButtonElement>('#dice')
    if(diceEl) diceEl.click();
  }

  return (
    <div className={`menu-bar ${isActive('/') && 'hidden'}`}>
      <div className="menu-bar-bg">
        <img src="/images/bar-bg.png" alt="" />
        <img className='menu-bar-decor' src="/images/bar-center.png" alt="" />
      </div>
      
      <div className="menu-bar-content">
        <NavLink to="/friends" className={`menu-bar-item ${isActive('/friends') ? 'active' : ''}`}>
          <IcFriends />
          <div className="menu-bar-name text-sm">
            Friends
          </div>
        </NavLink>
        <NavLink to="/mine" className={`menu-bar-item ${isActive('/mine') ? 'active' : ''}`}>
          <IcMine />
          <div className="menu-bar-name text-sm">
            Mine
          </div>
        </NavLink>
        <div className={`menu-bar-item main ${!isActive('/game') ? 'p-0' : 'pt-4'}`} onClick={() => navigate('/game')}>
          {
            isActive('/game')
            ?
            <>
              <div onClick={handleRoll} className="menu-bar-name primary-gold text-4xl">
                {energy}/6
              </div>
              <img src="/images/lighting.png" alt="" />
            </>
            :
            <div className="menu-bar-name text-5 m-0 p-0">
              Go
            </div>
          }
          
        </div>
        <NavLink to="/earn" className={`menu-bar-item ${isActive('/earn') ? 'active' : ''}`}>
          <IcEarn />
          <div className="menu-bar-name text-sm">
            Earn
          </div>
        </NavLink>
        <NavLink to="/airdrop" className={`menu-bar-item ${isActive('/airdrop') ? 'active' : ''}`}>
          <img src="/images/token.png" alt="" />
          <div className="menu-bar-name text-sm">
            Airdrop
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Menubar;

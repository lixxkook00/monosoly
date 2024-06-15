const UserInfor: React.FC = () => {

  return <div className="user-infor">
    <div className="flex justify-center items-center">
      <img src="/images/x.png" alt="" className="user-infor-avt" />
      <div className="user-infor-name">
        Admin
      </div>
    </div>
    <div className="flex justify-center items-center">
      <div className="user-infor-balance">
        <span>12,43k</span>
        <img src="/images/coin.png" alt="" className="user-infor-token" />
      </div>

      <div className="user-infor-setting"></div>
    </div>
  </div>
}

export default UserInfor;
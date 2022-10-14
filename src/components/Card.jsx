function Card({ id, username, wallpaper, userInfo, profilePic }) {
  const color = {
    backgroundColor: wallpaper,
    padding: "50px",
    borderRadius: "10px",
  };
  return (
    <div className="cards">
      <div style={color}></div>
      <img src={profilePic} alt="" />
      <span className="span">
        <span className="username">{username}</span>
        <span>{id}</span>
      </span>

      <div>{userInfo}</div>
    </div>
  );
}

export default Card;

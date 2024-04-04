const ChannelAvatar = ({ url }) => {
  const imageUrl =
    "https://eiyoushi-hutaba.com/wp-content/uploads/2022/05/%E3%82%A2%E3%82%B6%E3%83%A9%E3%82%B7-1024x1024.png";
  return (
    <div className="channels-avatar-container">
      <img src={url || imageUrl} width="100%" height="100%" />
    </div>
  );
};

export const ChannelCard = ({
  id,
  title,
  username,
  avatarUrl,
  isOnline,
  navigateToChannelHandler,
}) => {
  const handleNavigate = () => {
    navigateToChannelHandler();
  };
  return (
    <div className="channels-card" onClick={handleNavigate}>
      <ChannelAvatar url={avatarUrl} />
      <span className="channels-card-title">{title}</span>
      <span className="channels-card-text">{username}</span>
      <span
        className="channels-card-text"
        style={{
          color: isOnline ? "green" : "red",
        }}
      >
        {isOnline ? "Online" : "Offline"}
      </span>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="menu-div">
        <a className="game-icon-bt rollx-button" />
        <div className="menu-div-sub">
          <a className="game-help-bt rollx-button" />
          <a className="game-sound-bt rollx-button active" />
          <a className="game-music-bt active rollx-button" />
          <a className="game-fullscreen-bt rollx-button fullscreen-bt" />
          <a className="game-exit-bt rollx-button" />
        </div>
      </div>
      <div className="balance-div">
        <span className="balance-text">BALANCE:</span>
        <span className="animation-container">
          <span className="footer-last-win-animation" />
          <span className="balance">20000.00 DMO</span>
        </span>
      </div>
      <div className="sound-btn" />
    </div>
  );
};

export default Footer;

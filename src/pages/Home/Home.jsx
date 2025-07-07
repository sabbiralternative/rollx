import { useState } from "react";
import Control from "./Control";
import Footer from "./Footer";
import GameWheelContainer from "./GameWheelContainer";
import Range from "./Range";

const Home = () => {
  const [betAmount, setBetAmount] = useState(5);
  const [multiplier, setMultiplier] = useState(1);
  const [rotate, setRotate] = useState();

  const handleStartGame = () => {
    if (rotate) {
      setRotate((prev) => prev + 1000);
    } else {
      setRotate(1000);
    }
  };
  return (
    <div
    // style={{
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   minHeight: "100vh", // Full viewport height
    //   width: "100vw", // Full viewport width
    //   // overflow: "hidden", // Prevent scrollbars
    //   position: "relative",
    // }}
    >
      <div
        className="game-div"
        style={{
          transform: "scale(0.42328)",
          height: "1540.35px",
        }}
      >
        <div
          id="game"
          className="game mobile"
          style={{
            width: "756px",
            height: "1540.35px",
            marginLeft: "-378px",
            left: "378px",
          }}
        >
          <div className="game-content">
            <div className="center-content game-container">
              <div className="htmlContent">
                <div className="online-user">
                  <div>Online :</div>
                  <span>125</span>
                </div>
                <div className="collect-bets-animated-text active">
                  <div className="animated-text-container" />
                </div>
                <span className="logo" />
                <GameWheelContainer
                  multiplier={multiplier}
                  betAmount={betAmount}
                  rotate={rotate}
                />
                <Range
                  betAmount={betAmount}
                  multiplier={multiplier}
                  setBetAmount={setBetAmount}
                  setMultiplier={setMultiplier}
                />
                <Control
                  betAmount={betAmount}
                  setBetAmount={setBetAmount}
                  handleStartGame={handleStartGame}
                />
                <Footer />
                <div className="control-panel" />
                <div className="user-live-bets" data-active-class={0}>
                  <div className="user-live-bets-container">
                    <div className="user-live-bets-header">
                      <span>BET</span>
                      <span>WIN</span>
                      <span>X</span>
                      <span />
                    </div>
                    <div className="user-live-bets-content" />
                  </div>
                </div>
                <div className="user-live-bets-arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

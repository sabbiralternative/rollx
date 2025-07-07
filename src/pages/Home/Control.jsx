import { useState } from "react";
import History from "./History";

const Control = ({ handleStartGame, betAmount, setBetAmount }) => {
  const [showHistory, setShowHistory] = useState(false);
  const handleIncreaseBetAmount = () => {
    if (betAmount === 21) {
      return;
    } else {
      setBetAmount((prev) => prev + 1);
    }
  };
  return (
    <div className="control-container">
      <div className="autoplay-icon" />
      <span className="autoplay-spin-count" />
      <div className="autoplay-popup-container">
        <div className="autoplay-popup">
          <div className="autoplay-popup-content">
            <div className="autoplay-first-section">
              <span className="autoplay-close" />
              <span className="autoplay-header">AUTO PLAY</span>
              <div className="autoplay-buttons">
                <div data-spin-count={10} className="spin-count-button">
                  10
                </div>
                <div data-spin-count={50} className="spin-count-button active">
                  50
                </div>
                <div data-spin-count={100} className="spin-count-button">
                  100
                </div>
                <div data-spin-count={500} className="spin-count-button">
                  500
                </div>
                <div data-spin-count={1000} className="spin-count-button">
                  1000
                </div>
              </div>
            </div>
            <div className="autoplay-third-section">
              <div className="slider-input-parent">
                <p>STOP AUTOPLAY</p>
                <input
                  type="range"
                  data-class-id={0}
                  data-id={0}
                  defaultValue={0}
                  min
                  step="0.01"
                  max
                  id="range0"
                  className="slider-input"
                />
                <input
                  type="text"
                  inputMode="decimal"
                  pattern="[0-9]*[.]?[0-9]*"
                  data-class-id={0}
                  id="rangenumber0"
                  className="range-number autoplay-single-win"
                  min
                  max
                  defaultValue={0}
                />
                <div
                  className="autoplay-currency rollx-currency"
                  data-currency="DMO"
                />
                <span> If single win is more than</span>
              </div>
              <div className="slider-input-parent">
                <input
                  type="range"
                  data-class-id={1}
                  data-id={1}
                  defaultValue={0}
                  min
                  step="0.01"
                  max
                  id="range1"
                  className="slider-input"
                />
                <input
                  type="text"
                  inputMode="decimal"
                  pattern="[0-9]*[.]?[0-9]*"
                  data-class-id={1}
                  id="rangenumber1"
                  className="range-number autoplay-balance-decrease"
                  min
                  max
                  defaultValue={0}
                />
                <div
                  className="autoplay-currency rollx-currency"
                  data-currency="DMO"
                />
                <span>If balance decrease more than</span>
              </div>
              <div className="slider-input-parent">
                <input
                  type="range"
                  data-class-id={2}
                  data-id={2}
                  defaultValue={0}
                  min
                  step="0.01"
                  max
                  id="range2"
                  className="slider-input"
                />
                <input
                  type="text"
                  inputMode="decimal"
                  pattern="[0-9]*[.]?[0-9]*"
                  data-class-id={2}
                  id="rangenumber2"
                  className="range-number autoplay-balance-increase"
                  min
                  max
                  defaultValue={0}
                />
                <div
                  className="autoplay-currency rollx-currency"
                  data-currency="DMO"
                />
                <span>If balance increase more than</span>
              </div>
              <div className="autoplay-footer">
                <span className="autoplay-cancel-btn"> CANCEL</span>
                <span className="autoplay-ok-btn"> OK</span>
              </div>
            </div>
            <div className="autoplay-second-section">
              <div className="slider-input-parent">
                <div className="slider-input-parent-coeff">
                  <div
                    className="input-slider-div-coeff"
                    style={{ backgroundSize: "533.143px 100%" }}
                  />
                  <input
                    type="range"
                    data-class-id={3}
                    data-id={3}
                    defaultValue={0}
                    min={0}
                    step={1.0}
                    max={21}
                    id="range3"
                    className="coeff-range-slider-input slider-input"
                  />
                  <input
                    type="text"
                    pattern="[0-9]*[.]?[0-9]*"
                    inputMode="decimal"
                    data-class-id={3}
                    id="rangenumber3"
                    className="range-number auto-collect-coeff-input"
                    min={0}
                    max={21}
                    defaultValue={0}
                  />
                  <span className="autoplay-coefficient" />
                </div>
                <span> CHOOSE MULTIPLIER</span>
              </div>
              <div className="slider-input-parent">
                <div className="slider-input-parent-bet">
                  <div
                    className="input-slider-div-bet"
                    style={{ backgroundSize: "29.619px 100%" }}
                  />
                  <input
                    type="range"
                    data-class-id={4}
                    data-id={4}
                    defaultValue={0}
                    min="0.1"
                    max={1000}
                    step={1.0}
                    id="range4"
                    className="bet-range-slider-input slider-input"
                  />
                  <input
                    type="text"
                    pattern="[0-9]*[.]?[0-9]*"
                    inputMode="decimal"
                    data-class-id={4}
                    id="rangenumber4"
                    className="range-number auto-collect-input-bet"
                    min="0.1"
                    max={21}
                    defaultValue={0}
                  />
                  <div
                    className="autoplay-currency rollx-currency"
                    data-currency="DMO"
                  />
                </div>
                <span> CHOOSE BET AMOUNT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleIncreaseBetAmount} className="increase-bet-plus" />
      <span className="turbo-button" />
      <div onClick={handleStartGame} className="spin-button">
        SPIN
      </div>
      <div className="turbo-mode-background" />
      <div className="history" onClick={() => setShowHistory(true)} />
      {showHistory && <History setShowHistory={setShowHistory} />}
    </div>
  );
};

export default Control;

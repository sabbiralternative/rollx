const Range = ({ setBetAmount, setMultiplier, multiplier, betAmount }) => {
  const handleBetAmountChange = (e) => {
    const range = e.target.value;
    setBetAmount(range);
  };
  const handleMultiplierChange = (e) => {
    const range = e.target.value;
    setMultiplier(range);
  };

  return (
    <div className="bet-coeff-container">
      {/* <div className="coeff-container">
        <span className="coeff-div">{multiplier}</span>
        <div className="coeff-range-slider">
          <div
            className="input-slider-div-coeff"
            style={{ backgroundSize: `${(22 - multiplier) * 30}px 100%` }}
          />
          <input
            onChange={handleMultiplierChange}
            type="range"
            defaultValue={0}
            min={0}
            step={1}
            max={21}
            value={multiplier}
            id="coeff-values"
            className="coeff-range-slider-input"
          />
        </div>
        <span className="slider-caption">MULTIPLIER ADJUSTMENT</span>
      </div> */}
      <div className="bet-container">
        <div className="bet-div">{multiplier} X</div>
        <div className="bet-range-slider">
          <div
            className="input-slider-div-bet"
            style={{ backgroundSize: `${multiplier * 30}px 100%` }}
          />
          <input
            onChange={handleMultiplierChange}
            type="range"
            data-id
            defaultValue={0}
            min
            step={1.0}
            max={21}
            id="bet-values"
            className="bet-range-slider-input"
            value={multiplier}
          />
        </div>
        <span className="slider-caption">BET AMOUNT</span>
      </div>
      <div className="bet-container">
        <div className="bet-div">{betAmount * betAmount} DMO</div>
        <div className="bet-range-slider">
          <div
            className="input-slider-div-bet"
            style={{ backgroundSize: `${betAmount * 30}px 100%` }}
          />
          <input
            onChange={handleBetAmountChange}
            type="range"
            data-id
            defaultValue={0}
            min
            step={1.0}
            max={21}
            id="bet-values"
            className="bet-range-slider-input"
            value={betAmount}
          />
        </div>
        <span className="slider-caption">BET AMOUNT</span>
      </div>
    </div>
  );
};

export default Range;

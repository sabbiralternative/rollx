const GameWheelContainer = ({ multiplier, betAmount, rotate }) => {
  const multiplierStyle = [
    {
      id: 1,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 0px 716px, 0px 0px, 716px 0px, 607.504px 101.267px)",
    },
    {
      id: 2,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 0px 716px, 0px 0px, 716px 0px, 468.628px 17.5218px)",
    },
    {
      id: 3,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 0px 716px, 0px 0px, 332.068px 0.940412px)",
    },
    {
      id: 4,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 0px 716px, 0px 0px, 217.297px 28.8091px)",
    },
    {
      id: 5,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 0px 716px, 0px 0px, 129.802px 82.1563px)",
    },
    {
      id: 6,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 0px 716px, 0px 0px, 68.3719px 147.573px)",
    },
    {
      id: 7,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 0px 716px, 0px 0px, 29.1817px 216.428px)",
    },
    {
      id: 8,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 0px 716px, 0px 0px, 7.82316px 283.568px)",
    },
    {
      id: 9,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 0px 716px, 0px 0px, 0.195734px 346.163px)",
    },
    {
      id: 10,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 0px 716px, 2.82294px 402.869px)",
    },
    {
      id: 11,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 0px 716px, 205.571px 681.928px)",
    },
    {
      id: 12,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 380.479px 715.294px)",
    },
    {
      id: 13,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 485.595px 692.49px)",
    },
    {
      id: 14,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 549.826px 660.269px)",
    },
    {
      id: 15,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 591.113px 629.703px)",
    },
    {
      id: 16,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 618.971px 603.068px);",
    },
    {
      id: 17,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 652.825px 561.082px)",
    },
    {
      id: 18,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 687.443px 498.112px)",
    },
    {
      id: 19,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 699.842px 464.341px)",
    },
    {
      id: 20,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 705.63px 443.541px)",
    },
    {
      id: 21,
      style:
        "polygon(358px 358px, 716px 358px, 716px 716px, 708.788px 429.496px)",
    },
  ];

  const findStyle = multiplierStyle.find((m) => m.id == multiplier);

  return (
    <div className="game-wheel-container">
      <span className="wheel-arrow" />
      <span className="full-circle-gray" />
      <span className="win-lose-container">
        <span className="potential-win-title">WIN</span>
        <span className="potential-win">{multiplier * betAmount}</span>
        <span className="potential-win-currency">DMO</span>
      </span>
      <div className="game-wheel" style={{ transform: `rotate(${rotate}deg)` }}>
        <span
          className="win-circle-green"
          style={{
            clipPath: findStyle.style,
            borderRadius: "358px",
          }}
        />
      </div>
      <div className="box">
        <canvas
          width={756}
          height={1364}
          style={{ touchAction: "none", cursor: "inherit" }}
        />
      </div>
    </div>
  );
};

export default GameWheelContainer;

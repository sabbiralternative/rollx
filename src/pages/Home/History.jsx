const History = ({ setShowHistory }) => {
  return (
    <div
      className="rollx-history"
      style={{ display: "block", right: "-200px", left: "auto" }}
    >
      <div className="history-tab-parent">
        <a className="history-tab active " data-tab="my-wins">
          <span>MY BETS</span>
        </a>
        <a className="history-tab " data-tab="top-wins">
          <span> TOP WINS</span>
        </a>
      </div>
      <div className="history-content" data-active-tab="my-wins">
        <a
          onClick={() => setShowHistory(false)}
          className="close-rollx-history "
        ></a>
        <span className="top-wins-tabs-bg">
          <a className="top-wins-tab active" data-inside-tab="daily">
            DAILY
          </a>
          <a className="top-wins-tab" data-inside-tab="weekly">
            WEEKLY
          </a>
          <a className="top-wins-tab" data-inside-tab="monthly">
            MONTHLY
          </a>
        </span>
        <aside className="my-wins-tab-parent">
          <div className="history-list-header">
            <span>X</span>
            <span>BET</span>
            <span>WIN</span>
            <span>TIME</span>
          </div>
          <div className="history-list-content">
            <div className="row win" data-bonus="undefined">
              <span>1.4x</span>
              <span>0.20DMO</span>
              <span>0.28DMO</span>
              <span>16:54</span>
            </div>
            <div className="row win" data-bonus="undefined">
              <span>1.4x</span>
              <span>0.20DMO</span>
              <span>0.28DMO</span>
              <span>16:54</span>
            </div>
            <div className="row win" data-bonus="undefined">
              <span>1.4x</span>
              <span>0.20DMO</span>
              <span>0.28DMO</span>
              <span>16:54</span>
            </div>
          </div>
        </aside>
        <aside className="top-wins-tab-parent">
          <div className="history-list-header">
            <span>PLAYER</span>
            <span>X</span>
            <span>BET</span>
            <span>WIN</span>
          </div>
          <div className="history-list-content daily inside-content active">
            <div className="row " data-bonus="true">
              <span>D****3</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****2</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****1</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****2</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****9</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****7</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****7</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****2</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>30x</span>
              <span>800.00DMO</span>
              <span>24000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****6</span>
              <span>30x</span>
              <span>500.00DMO</span>
              <span>15000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>15x</span>
              <span>1000.00DMO</span>
              <span>15000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>15x</span>
              <span>1000.00DMO</span>
              <span>15000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****0</span>
              <span>15x</span>
              <span>1000.00DMO</span>
              <span>15000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****6</span>
              <span>15x</span>
              <span>1000.00DMO</span>
              <span>15000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****3</span>
              <span>15x</span>
              <span>1000.00DMO</span>
              <span>15000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****6</span>
              <span>10x</span>
              <span>1000.00DMO</span>
              <span>10000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****9</span>
              <span>10x</span>
              <span>1000.00DMO</span>
              <span>10000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****9</span>
              <span>10x</span>
              <span>1000.00DMO</span>
              <span>10000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****9</span>
              <span>10x</span>
              <span>1000.00DMO</span>
              <span>10000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****3</span>
              <span>10x</span>
              <span>1000.00DMO</span>
              <span>10000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****0</span>
              <span>8x</span>
              <span>1000.00DMO</span>
              <span>8000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>9x</span>
              <span>800.00DMO</span>
              <span>7200.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****3</span>
              <span>7x</span>
              <span>1000.00DMO</span>
              <span>7000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>7x</span>
              <span>1000.00DMO</span>
              <span>7000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****9</span>
              <span>7x</span>
              <span>1000.00DMO</span>
              <span>7000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****6</span>
              <span>7x</span>
              <span>1000.00DMO</span>
              <span>7000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>30x</span>
              <span>200.00DMO</span>
              <span>6000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****7</span>
              <span>6x</span>
              <span>1000.00DMO</span>
              <span>6000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****1</span>
              <span>6x</span>
              <span>1000.00DMO</span>
              <span>6000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>6x</span>
              <span>1000.00DMO</span>
              <span>6000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>6x</span>
              <span>1000.00DMO</span>
              <span>6000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****3</span>
              <span>6x</span>
              <span>1000.00DMO</span>
              <span>6000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****6</span>
              <span>6x</span>
              <span>1000.00DMO</span>
              <span>6000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>5x</span>
              <span>1000.00DMO</span>
              <span>5000.00DMO</span>
            </div>
          </div>
          <div className="history-list-content weekly inside-content">
            <div className="row " data-bonus="true">
              <span>D****0</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****9</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****7</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****7</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****9</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****6</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****3</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****0</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****3</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****1</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****2</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****7</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****1</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****0</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****3</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****2</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****1</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****2</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****9</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****7</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****7</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****2</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>30x</span>
              <span>800.00DMO</span>
              <span>24000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****6</span>
              <span>30x</span>
              <span>500.00DMO</span>
              <span>15000.00DMO</span>
            </div>
          </div>
          <div className="history-list-content monthly inside-content">
            <div className="row " data-bonus="true">
              <span>D****1</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****6</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****7</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****6</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****0</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****3</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****0</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****9</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****3</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****1</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****2</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****6</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****3</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****7</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****2</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****6</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****5</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****0</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****6</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****2</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****0</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****9</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****9</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****9</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****6</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****8</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****7</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****0</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****3</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
            <div className="row " data-bonus="true">
              <span>D****4</span>
              <span>30x</span>
              <span>1000.00DMO</span>
              <span>30000.00DMO</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default History;

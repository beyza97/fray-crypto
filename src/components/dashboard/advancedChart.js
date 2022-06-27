import React from 'react';
import { useHistory } from 'react-router-dom';

export const advancedChart=()=>{
    // const history=useHistory();
    return(<>

    <div class="tradingview-widget-container">
    <div id="tradingview_d53f5"></div>
    <div class="tradingview-widget-copyright"> <span class="blue-text">BTCUSDT Grafiği</span></div>
    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
    <script type="text/javascript">
    new TradingView.widget
        {{
    "autosize": true,
    "symbol": "BINANCE:BTCUSDT",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "tr",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "withdateranges": true,
    "hide_side_toolbar": false,
    "allow_symbol_change": true,
    "calendar": true,
    "container_id": "tradingview_d53f5"
    }}
  </script>
    </div>
    </>

    )
}

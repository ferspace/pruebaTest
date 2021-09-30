import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import MiniChart from 'react-mini-chart'

const Chart=(props)=>{
  return(
    <div>
      <MiniChart
            strokeColor="#FF6600"
            activePointColor="#FF6600"
            width={50}
            height={50}
            dataSet={props.data}
          />
    </div>
  )
}

export default Chart;

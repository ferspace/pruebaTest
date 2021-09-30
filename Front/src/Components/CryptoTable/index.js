import React, { useState, useEffect } from "react";
import Tables from '../Tables'
import Chart from "../Chart";
import axios from 'axios'

const CryptoTable =()=>{
  const [bitcoin, setBitcoin] = useState([])
  const [bitcoinChart, setBitcoinChart] = useState([])
  const [etherium, setEtherium] = useState([])

  useEffect(()=>{
    axios.get('https://data.messari.io/api/v1/assets/bitcoin/metrics')
        .then((response) => {
          console.log(response.data.data)
          const dataService = response.data.data
          console.log(dataService,"response.data")
          if(dataService !== undefined){
            var parseData=["1",
            dataService.name,
            dataService.market_data.price_usd.toFixed(2),
            dataService.market_data.percent_change_usd_last_1_hour.toFixed(2),
            dataService.market_data.percent_change_usd_last_24_hours.toFixed(2),
            dataService.marketcap.current_marketcap_usd.toFixed(2),
            dataService.market_data.real_volume_last_24_hours.toFixed(2),
            dataService.roi_data.percent_change_last_1_week.toFixed(2),
            dataService.roi_data.percent_change_last_1_month.toFixed(2),
            dataService.roi_data.percent_change_year_to_date.toFixed(2)]
            var setChartdata=dataService.roi_data
            var dataArray = Object.keys(setChartdata).map(val => setChartdata[val]);
            
            setBitcoinChart(dataArray)
            setBitcoin(parseData)
          }
    })
  },[])

  const data = [
    bitcoin
   ];

  console.log(bitcoin, "bitcoin")

  return(
      <Tables
      columns={["id", "Asset","PRICE (USD)","CHANGE VS USD (1H)", "CHANGE VS USD (24H)","REPORTED MARKETCAP", "REAL VOLUME (24H)", "CHANGE VS USD (7D)", "CHANGE VS USD (30D)", "CHANGE VS USD (YTD)", 
    
      {
        label: "7 DAY TREND",
        options: {
          customBodyRender: (value) => {
            return (
              <Chart data={bitcoinChart}  />
            )
          }
        }
      }]} tableData={data} title={"Criptomonedas"}/>
  )
}

export default CryptoTable;

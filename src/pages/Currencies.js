import { useParams, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export const Currencies = props => {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];
  // const apiKey = '8EA800F8-1213-4D28-90BF-1F471CF11B9F'
  // const params = useParams()

  // const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`
  // const [coin, setCoin] = useState(null)
  
  // const getCoin = async(){
  //   try{

  //   }catch(e){

  //   }
  // }

  return(
    <div>
      {currencies.map((coin, coinId) => {
        const { symbol, name} = coin
        return(
          <Link key={coin.coinId}to={`/price/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        )
      })}
    </div>
  )
}



// import React, { useEffect, useState } from "react";
// // import { FormControl } from "react-bootstrap";
// // import { DataGrid } from '@mui/x-data-grid'; 

// import Table from 'react-bootstrap/Table';

// import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";

// const axios = require('axios').default;

// function Item() {
//   const [getdata, setOi] = useState([]);
//   const [expiryDate, expData] = useState([]);
//   const [spot, setSpot] = useState([]);
//   const [live, selive] = useState([]);
//   const [datat,setDatat] = useState([]);
//   const [datat2,setDatat2] = useState([]);

//   // console.log("live",live);


//   async function fetchData() {
//     await axios.get("https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY")
//       .then((json) => {
//         console.log('json', json.data)

       
//        let liveprices = console.log(json.data.records.index.last)
//        selive(liveprices)

//       //   json.data.records.strikePrices.forEach(element => {
//       //     if (element === json.data.records.underlyingValue) {
//       //       console.log("strikePrice.. ..--------------------------------", element)
//       //       selive(element)
//       //     }
//       //   });

//       //   console.log(live)

//       //   // array.forEach(element => {

//       //   // });    const datat = []
//       //   json.data.filtered.data.map((val, i) => {
//       //     if (json.data.records.index.last <= val.strikePrice) {
//       //         datat.push(val)

//       //         console.log("strikePrice-----", i);

//       //     }
//       // })

      
//       // json.data.filtered.data.reverse().map((val) => {
//       //     if (json.data.records.index.last >= val.strikePrice) {
//       //         datat2.push(val)

//       //         // console.log("strikePrice-----", val);


//       //     }
          
//       // })



//       //   console.log(json.data.records.underlyingValue)
//       //   // console.log(json.data.records.data)
//       //   // (data)=>getdata.strikePrice === console.log(json.data.records.index.last)

//       //   // setSpot(json.records.index);
//       //   // let daa = arr.filter((data)=> strike)

//       //   setOi(json.data.records.data);
//       //   expData(json.data.records.expiryDates);
//       //   setSpot(json.data.records.index);


//         // expData(json.records.expiryDates);
//       })
//       .catch(err => {
//         console.log(err)
//       })


//   }
//   useEffect(() => {
//     fetchData()
//     const interval = setInterval(() => {
//       console.log('This will run every second!');
//       fetchData()
//     }, 50000);
//     return () => clearInterval(interval);

//   }, []);

//   const [selectedExpiry, setValue] = useState(expiryDate[0]);

//   let keys = Object.keys(getdata && getdata).filter((data) => getdata[data].expiryDate === (selectedExpiry ? selectedExpiry : expiryDate[0]))

//   console.log(keys)






//   //   if (console.log(arr)>=console.log(live)) {


//   //   for (let i = 0; i < console.log(live); i++) {
//   //     const element = console.log[i];

//   //   }
//   // }

//   // const finaldata = keys && keys.map((val) => {

//   //   return ({


//   //     COI: getdata[val].CE.openInterest,
//   //     CCHANGEOI: getdata[val].CE.changeinOpenInterest,
//   //     VOLUME: getdata[val].CE.totalTradedVolume,
//   //     IV: getdata[val].CE.impliedVolatility,
//   //     pePrice: getdata[val].CE.lastPrice,
//   //     CHNG: getdata[val].CE.change,
//   //     BIDQTY: getdata[val].CE.totalBuyQuantity,
//   //     BIDPRICE: getdata[val].CE.bidprice,
//   //     ASKPRICE: getdata[val].CE.askPrice,
//   //     ASKQTY: getdata[val].CE.askQty,


//   //     strike: getdata[val].CE.strikePrice,
//   //     BIDQ: getdata[val].PE.totalBuyQuantity,
//   //     BIDP: getdata[val].PE.bidprice,
//   //     ASKP: getdata[val].PE.askPrice,
//   //     ASKQ: getdata[val].PE.askQty,
//   //     CHNGPE: getdata[val].PE.change,
//   //     LTP: getdata[val].PE.lastPrice,
//   //     IVPE: getdata[val].PE.impliedVolatility,
//   //     VOLUMEPE: getdata[val].PE.totalTradedVolume,
//   //     CCHANGEOIPE: getdata[val].PE.changeinOpenInterest,
//   //     COIPE: getdata[val].CE.openInterest,
//   //     expiry: getdata[val].PE.expiryDate,

//   //   })


//   // })

//   // let daw = finaldata.map((dara)=>{
//   //   return(
//   //     dara.strike
//   //     )
//   // })
//   // console.log(daw)

//   // let dd = (console.log(daw))
//   // let cc = (console.log(live))

//   // for (let i = 0; i < cc; i++) {

//   //   console.log(finaldata)

//   // }

//   // let dar = console.log(finaldata)
//   // let dad = console.log(live)
//   // console.log(finaldata).forEach(elements => {
//   //   if (elements <= dad) {
//   //     console.log("strikePrice.. ..--------------------------------", elements)

//   //   }
//   // });


//   // let array= console.log(live)

//   // console.log(fetchData.kk)

//   // var ArrayFileName = console.log(finaldata)
//   // var ArrayFileNameWExt = console.log(live)

//   // var final = ArrayFileNameWExt.filter(function(item) {
//   //   return !ArrayFileName.includes(item.split('.')[0]);
//   // })

//   // console.log(final)

//   const handleChange = e => {
//     setValue(e.target.value)
//     console.log("selected" + selectedExpiry)
//     e.preventDefault();
//   }

//   return (
//     <>


//       {/* {
//         getdata.map((data) => {

//           console.log('data', data);
//         })
//       } */}

//       <div>

//         <FormControl>
//           <InputLabel  >SELECT EXPRIY</InputLabel>
//           <Select onChange={handleChange}
//             id={expiryDate[0]}
//             value=""
//           >
//             <MenuItem value={expiryDate[0]}>
//               <em>Select Expriy</em>
//             </MenuItem>
//             <MenuItem key={expiryDate[0]} value={expiryDate[0]}>{expiryDate[0]}</MenuItem>
//             <MenuItem key={expiryDate[1]} value={expiryDate[1]}>{expiryDate[1]}</MenuItem>
//             <MenuItem key={expiryDate[2]} value={expiryDate[2]}>{expiryDate[2]}</MenuItem>
//             <MenuItem key={expiryDate[3]} value={expiryDate[3]}>{expiryDate[3]}</MenuItem>

//           </Select>
//         </FormControl>

//       </div>

//       <div >
//         <Table  size="sm"    >

//           <thead>
//             <tr><th className="text-center" colSpan="11">CALLS</th><th></th><th className="text-center" colSpan="11">PUTS</th></tr>
//             <tr>
//               <th width="5.14%" title="Open Interest in contracts">OI</th>
//               <th width="4.34%" title="Change in Open Interest (Contracts)">Chng in OI</th>
//               <th width="5.54%" title="Volume in Contracts">Volume</th>
//               <th width="3.34%" title="Implied Volatility">IV</th>
//               <th width="4.34%" title="Last Traded Price">LTP</th>
//               <th width="4.34%" title="Change w.r.t to Previous Close">Chng</th>
//               <th width="4.34%" title="Best Bid/Buy Qty">Bid Qty</th>
//               <th width="4.34%" title="Best Bid/Buy Price">Bid Price</th>
//               <th width="4.34%" title="Best Ask/Sell Price">Ask Price</th>
//               <th width="4.34%" title="Best Ask/Sell Qty">Ask Qty</th>
//               <th width="6.34%" title="Strike Price">Strike Price</th>
//               <th width="4.34%" title="Best Bid/Buy Qty">Bid Qty</th>
//               <th width="4.34%" title="Best Bid/Buy Price">Bid Price</th>
//               <th width="4.34%" title="Best Ask/Sell Price">Ask Price</th>
//               <th width="4.34%" title="Best Ask/Sell Qty">Ask Qty</th>
//               <th width="4.34%" title="Change w.r.t to Previous Close">Chng</th>
//               <th width="4.34%" title="Last Traded Price">LTP</th>
//               <th width="3.34%" title="Implied Volatility">IV</th>
//               <th width="5.54%" title="Volume in Contracts">Volume</th>
//               <th width="4.34%" title="Change in Open Interest (Contracts)">Chng in OI</th>
//               <th width="5.14%" title="Open Interest in contracts">OI</th>


//             </tr>
//           </thead>
//           <tbody>


//             {

//               keys && keys.map((val, i) => {
//                 if({live})

//                 return (
                  

//                       <tr >
//                         <td>{getdata[val].CE.openInterest}</td>
//                         <td>{getdata[val].CE.changeinOpenInterest}</td>
//                         <td>{getdata[val].CE.totalTradedVolume}</td>
//                         <td>{getdata[val].CE.impliedVolatility}</td>
//                         <td>{getdata[val].CE.lastPrice}</td>
//                         <td>{getdata[val].CE.change.toFixed(2)}</td>
//                         <td>{getdata[val].CE.totalBuyQuantity}</td>
//                         <td>{getdata[val].CE.bidprice}</td>
//                         <td>{getdata[val].CE.askPrice}</td>
//                         <td  style={{
//                                                 backgroundColor: '#CCEEFF'

//                                             }}>{getdata[val].CE.askQty}</td>



//                         <td style={{
//                                 backgroundColor: '	#ffbf00'
//                             }}><b>{getdata[val].CE.strikePrice}</b></td>

//                         <td>{getdata[val].PE.totalBuyQuantity}</td>
//                         <td  style={{
//                                                 backgroundColor: '#CCEEFF'

//                                             }}>{getdata[val].PE.bidprice}</td>
//                         <td>{getdata[val].PE.askPrice}</td>
//                         <td>{getdata[val].PE.askQty}</td>
//                         <td>{getdata[val].PE.change.toFixed(2)}</td>
//                         <td>{getdata[val].PE.lastPrice}</td>
//                         <td>{getdata[val].PE.impliedVolatility}</td>
//                         <td>{getdata[val].PE.totalTradedVolume}</td>
//                         <td>{getdata[val].PE.changeinOpenInterest}</td>
//                         <td>{getdata[val].PE.openInterest}</td>

//                       </tr>

//                 )

//             }

//             )
//             }
//           </tbody>

//         </Table>


//       </div>
//     </>

//   )

// }




// export default Item;


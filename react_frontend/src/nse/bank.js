 import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

import axios from 'axios';


function Bank() {
    const [getdata, setOi] = useState([]);
    const [expiryDate, expData] = useState([]);
    const [spot, setSpot] = useState([]);
    const [live, selive] = useState([]);
  
    // // useEffect(()=>{
    //     fetchData()
    // },[])

    async function fetchData() {
        await axios.get("https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY")
            .then((json) => {
                // console.log('json', json.data)
                

                

                // console.log('json', json.data.records.underlyingValue)

                console.log( json.data.filtered)

                setOi(json.data);
                expData(json.data.records.expiryDates);
                // setSpot(json.data.records.index);
                // selive(json.data.records);
                setSpot( json.data.filtered.CE)

                
                const sum = json.data.filtered.CE.totOI+json.data.filtered.CE.totVol
                console.log(sum);
               
                const sum2 = json.data.filtered.PE.totOI+json.data.filtered.PE.totVol
                console.log(sum2);
                  
                const PCR = sum2/sum
                console.log(PCR)
                selive(PCR)
            })
            .catch(err => {
                console.log(err)
            })

    }



    useEffect(() => {
        fetchData()
        const interval = setInterval(() => {
            console.log('This will run every second!');
            fetchData()
        }, 50000);
        return () => clearInterval(interval);

    }, []);
   
    return (
        <Container>
            <Table striped bordered hover size="sm" className="table-success" >

                <thead>
                    <tr><th className="text-center" colSpan="11">CALLS</th><th></th><th className="text-center" colSpan="11">PUTS</th></tr>
                    <tr>
                        <th width="5.14%" title="Open Interest in contracts">OI</th>
                        <th width="4.34%" title="Change in Open Interest (Contracts)">Chng in OI</th>
                        <th width="5.54%" title="Volume in Contracts">Volume</th>
                        <th width="3.34%" title="Implied Volatility">IV</th>
                        <th width="4.34%" title="Last Traded Price">LTP</th>
                        <th width="4.34%" title="Change w.r.t to Previous Close">Chng</th>
                        <th width="4.34%" title="Best Bid/Buy Qty">Bid Qty</th>
                        <th width="4.34%" title="Best Bid/Buy Price">Bid Price</th>
                        <th width="4.34%" title="Best Ask/Sell Price">Ask Price</th>
                        <th width="4.34%" title="Best Ask/Sell Qty">Ask Qty</th>
                        <th width="6.34%" title="Strike Price">Strike Price</th>
                        <th width="4.34%" title="Best Bid/Buy Qty">Bid Qty</th>
                        <th width="4.34%" title="Best Bid/Buy Price">Bid Price</th>
                        <th width="4.34%" title="Best Ask/Sell Price">Ask Price</th>
                        <th width="4.34%" title="Best Ask/Sell Qty">Ask Qty</th>
                        <th width="4.34%" title="Change w.r.t to Previous Close">Chng</th>
                        <th width="4.34%" title="Last Traded Price">LTP</th>
                        <th width="3.34%" title="Implied Volatility">IV</th>
                        <th width="5.54%" title="Volume in Contracts">Volume</th>
                        <th width="4.34%" title="Change in Open Interest (Contracts)">Chng in OI</th>
                        <th width="5.14%" title="Open Interest in contracts">OI</th>


                    </tr>
                </thead>
                <tbody>
                   
                    {/* {
                        getdata.map((val, i) => {
                            console.log('val',val)
                           
                            return (
                                <>
                                    <tr >
                                        <td >{val.CE.openInterest}</td>
                                        <td >{val.CE.changeinOpenInterest}</td>
                                        <td >{val.CE.totalTradedVolume}</td>
                                        <td >{val.CE.impliedVolatility}</td>
                                        <td >{val.CE.lastPrice}</td>
                                        <td >{val.CE.change}</td>
                                        <td >{val.CE.totalBuyQuantity}</td>
                                        <td >{val.CE.bidprice}</td>
                                        <td >{val.CE.askPrice}</td>
                                        <td >{val.CE.askQty}</td>
                                        <td ><b>{val.CE.strikePrice}</b></td>
                                        <td >{val.PE.totalBuyQuantity}</td>
                                        <td >{val.PE.bidprice}</td>
                                        <td >{val.PE.askPrice}</td>
                                        <td >{val.PE.askQty}</td>
                                        <td >{val.PE.change}</td>
                                        <td >{val.PE.lastPrice}</td>
                                        <td >{val.PE.impliedVolatility}</td>
                                        <td >{val.PE.totalTradedVolume}</td>
                                        <td >{val.PE.changeinOpenInterest}</td>
                                        <td >{val.PE.openInterest}</td>

                                    </tr>

                                    
                                </>
                                
                            )
                        }
                    


                        )
                    } */}



                  
                
                    
                </tbody>

            </Table>
        </Container>
    )

}
export default Bank;



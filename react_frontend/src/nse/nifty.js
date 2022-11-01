// import { getLinearProgressUtilityClass } from '@material-ui/core'
import axios from 'axios'

import React, { Component } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Form, Table } from 'react-bootstrap'
import NavbarMenu from '../components/Navbar'


export default class Nses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filtered: [],
            records: [],
            strikePrice: [],
            data1: [],
            data2: [],
            data3: [],
            data4: []


        }

    }
    componentDidMount() {
        this.getData()
        setInterval(this.getData, 10000);
    }





    getData = async () => {
        await axios
            .get("https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY")
            .then((res) => {
                let livevalue = res.data.records.underlyingValue

                // console.log({ data: res.data});

                const datat = []
                res.data.filtered.data.map((val, i) => {
                    if (livevalue <= val.strikePrice) {
                        datat.push(val)

                        // console.log("strikePrice-----", i);



                    }

                    this.setState({ data1: datat })
                    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", datat);
                })

                const datat2 = []
                res.data.filtered.data.map((val, i) => {
                    if (livevalue >= val.strikePrice) {

                        datat2.push(val)
                        // console.log("strikePrice-----", val);


                    }
                    this.setState({ data2: datat2 })

                    // datat2.push(datat)
                })


                const sum = res.data.filtered.CE.totOI
                console.log(sum);

                const sum2 = res.data.filtered.PE.totOI
                console.log(sum2);

                const PCR = sum2 / sum
                console.log(PCR)
                const datat3 = []
                datat3.push(PCR)

                this.setState({ data3: datat3 })

                const value = res.data.records
                const datat4 = []
                datat4.push(value)


                this.setState({ data4: datat4 })


                // this.setState({ records: livevalue })

                // res.data.filtered.data.map((data1) => {
                //     let data = [data1]
                //     this.setState({ filtered: data })
                // });
            })
            .catch((err) => {
                console.log(err);
            });



    }



    render() {
        const { records, filtered, data1, data2, data3, data4 } = this.state;
        //  let dataprice = []
        console.log(records);
        //  dataprice.push(this.state.strikePrice)
        // console.log({dataprice});
        let underlyingValueData = records.underlyingValue
        let filteredstrikePrice = filtered.strikePrice
        // console.log('filtereddata',filtered );

        return (

            <div>
                <NavbarMenu />

                <>


                    <div class="container">



                        {
                            data4.map((data) => {
                                // console.log(data)
                                return (
                                    <div class="container">
                                        <div class="col-md-7 mb-1 d-inline p-2 bg-success text-white float-left  ">
                                            Underlying Index: <span id="equity_underlyingVal" class="bold "><b>NIFTY50 {data.underlyingValue} </b></span>
                                            <span id="equity_timeStamp" class="asondate"> As on {data.timestamp}  IST </span>

                                        </div>
                                        
                                        {/* <Form>
                                            <Form.Group class="row d_flex">
                                                <Form.Text><b>BANKNIFTY :  <b >   {data.index.last} <b>({data.index.percentChange}%)</b></b></b></Form.Text>
                                            </Form.Group>
                                        </Form> */}
                                    </div>

                                )
                            })
                        }


                        {
                            data3.map((data) => {
                                // console.log(data)
                                return (
                                    <div>
                                        {/* <div class="d-inline-flex p-2">PCR = {data.toFixed(2)}</div> */}
                                        {/* <div class="d-flex flex-row-reverse">
                                            <div class="p-2">PCR = {data.toFixed(2)}</div>
                                            
                                           
                                        </div> */}
                                        <div class="d-inline p-2 bg-success text-white float-right">PCR = {data.toFixed(2)}</div>
                                        {/* <Form>
                                            <Form.Group class="row d_flex">
                                                <Form.Text><b>PCR : <b >{data.toFixed(2)}</b></b></Form.Text>
                                            </Form.Group>
                                        </Form> */}
                                    </div>

                                )
                            })
                        }
                    </div>


                    <Table className="mt-3" class="tableFixHead">
                        <thead>


                            <tr class="table-secondary"><th className="text-center" colSpan="11">CALLS</th>
                                <th className="text-center" colSpan="11">PUTS</th></tr>
                            <tr style={{
                                backgroundColor: '	#ffbf00'
                            }}>
                                <th width="40px" title="Open Interest in contracts">OI</th>
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

                            {data2.map((data, i) => {
                                // console.log(i);
                                if (i > 55) {

                                    return (
                                        <tr>

                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.CE.openInterest}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.CE.changeinOpenInterest}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.CE.totalTradedVolume}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.CE.impliedVolatility}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.CE.lastPrice}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.CE.change.toFixed(2)}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.CE.totalBuyQuantity}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.CE.bidprice}</td>

                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.CE.askPrice}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.CE.askQty}</td>

                                            <td style={{
                                                backgroundColor: '#66CDAA'

                                            }}  ><b>{data.strikePrice}</b></td>
                                            <td >{data.PE.totalBuyQuantity}</td>
                                            <td >{data.PE.bidprice}</td>
                                            <td >{data.PE.askPrice}</td>
                                            <td >{data.PE.askQty}</td>
                                            <td >{data.PE.change.toFixed(2)}</td>
                                            <td class="ng-star-inserted" style={{
                                                backgroundColor: ""
                                                
                                            }}>{data.PE.lastPrice}({data.PE.change.toFixed(2)})</td>
                                            <td >{data.PE.impliedVolatility}</td>
                                            <td >{data.PE.totalTradedVolume}</td>
                                            <td >{data.PE.changeinOpenInterest}</td>
                                            <td >{data.PE.openInterest}</td>
                                        </tr>
                                    )
                                }
                            })
                            }
                            {data1.map((data, i) => {
                                // console.log(i);
                                if (i < 11) {
                                    return (
                                        <tr >
                                            <td >{data.CE.openInterest}</td>
                                            <td >{data.CE.changeinOpenInterest}</td>
                                            <td >{data.CE.totalTradedVolume}</td>
                                            <td >{data.CE.impliedVolatility}</td>
                                            <td style={{
                                                backgroundColor: ''

                                            }}>{data.CE.lastPrice}</td>
                                            <td >{data.CE.change.toFixed(2)}</td>
                                            <td >{data.CE.totalBuyQuantity}</td>
                                            <td >{data.CE.bidprice}</td>

                                            <td >{data.CE.askPrice}</td>
                                            <td >{data.CE.askQty}</td>

                                            <td style={{
                                                backgroundColor: '#66CDAA'

                                            }}  ><b>{data.strikePrice}</b></td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }} >{data.PE.totalBuyQuantity}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.PE.bidprice}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.PE.askPrice}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.PE.askQty}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.PE.change.toFixed(2)}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.CE.lastPrice}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.PE.impliedVolatility}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.PE.totalTradedVolume}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.PE.changeinOpenInterest}</td>
                                            <td style={{
                                                backgroundColor: '#CCEEFF'

                                            }}>{data.PE.openInterest}</td>
                                        </tr>
                                    )
                                }
                            })
                            }


                        </tbody>
                    </Table>
                </>

            </div>
        )
    }
}

// import { getLinearProgressUtilityClass } from '@material-ui/core'
import axios from 'axios'

import React, { Component } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Form, Table } from 'react-bootstrap'
import NavbarMenu from '../components/Navbar'


export default class Nse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filtered: [],
            records: [],
            strikePrice: [],
            data1: [],
            data2: [],
            data3: [],
            data4: [],
            data5: [],
            data6: [],
            data7: [],
            CESUM: [],
            LIVEPRICE: []




        }

    }
    componentDidMount() {
        this.getData()
        setInterval(this.getData, 100000);
    }





    getData = async () => {
        await axios
            .get("https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY")
            .then((res) => {
                let livevalue = res.data.records.index.last
                console.log({ data: livevalue });
                this.setState({ LIVEPRICE: livevalue })
                // res.data.records.index.last

                const datat = []
                res.data.filtered.data.map((val, i) => {
                    if (livevalue <= val.strikePrice) {
                        datat.push(val)

                        // console.log("strikePrice-----", val);
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




                const datat5 = []
                res.data.filtered.data.reverse().map((val, i) => {
                    if (livevalue >= val.strikePrice) {

                        datat5.push(val)
                        // console.log("strikePrice-----asddddddddddddddddddddddddddddd", val);


                    }
                    this.setState({ data5: datat5 })

                    // datat2.push(datat)
                })

                const datat6 = []

                datat5.map((val, i) => {
                    if (i < 5) {

                        var ss = (val.PE.openInterest + val.PE.changeinOpenInterest)


                        // const max = Math.max.apply(null, console.log((val.PE.openInterest + val.PE.changeinOpenInterest)));

                        datat6.push(ss)
                        // console.log(datat6)

                    }

                    this.setState({ data6: datat6 })
                })
                // console.log("hiiiiiiiiiiiiiiiiiiiiiii>>>>>>>",Math.max(...datat6))
                let compare = (a, b) => {
                    return b - a
                }


                const numAscending = datat6.sort(compare);
                // console.log("yhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", numAscending);
                const num = numAscending.slice(0, 1);
                console.log(num);

                this.setState({ data7: num })

                // CE sum data 
                const CESUM = []
                datat.map((val, i) => {
                    if (i < 5) {

                        var ss = (val.CE.openInterest + val.CE.changeinOpenInterest)
                        // console.log(ss)
                        // console.log(Math.max(...ss))
                        // const max = Math.max.apply(null, console.log((val.PE.openInterest + val.PE.changeinOpenInterest)));
                        CESUM.push(ss)
                        // console.log(ss)

                    }
                })

                let compar = (a, b) => {
                    return b - a
                }
                const numA = CESUM.sort(compar);
                // console.log("yhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", numA);
                const num1 = numA.slice(0, 1);
                // console.log(num1);
                this.setState({ CESUM: num1 })


                const sum = res.data.filtered.CE.totOI
                // console.log(sum);

                const sum2 = res.data.filtered.PE.totOI
                // console.log(sum2);

                const PCR = sum2 / sum
                console.log(PCR)
                const datat3 = []
                datat3.push(PCR)

                this.setState({ data3: datat3 })

                const value = res.data.records
                const datat4 = []
                datat4.push(value)



                // DATA2 DATA PE SUM

                this.setState({ data4: datat4 })


                const SUM = []
                const PESUM = []


                let Bridpriceofit = datat2.filter((ab, i) => {
                    let CESum = (ab.CE.openInterest + ab.CE.changeinOpenInterest)
                    let PESum = (ab.PE.openInterest + ab.PE.changeinOpenInterest)
                    SUM.push(CESum)
                    PESUM.push(PESum)

                })
                console.log("ddddd", SUM);

                let CESum2 = 0;
                for (let i = 0; i <
                    SUM.length; i++) {
                    CESum2 += SUM[i];

                }
                console.log("Bridprice", CESum2);

                console.log("ddddd", PESUM);



                let PESum2 = 0;
                for (let i = 0; i < PESUM.length; i++) {

                    PESum2 += PESUM[i];

                }
                console.log("Bridprice", PESum2);

                let TOTAL_VALUE = PESum2 / CESum2

                console.log("TOTAL_VALUE", TOTAL_VALUE);



            })
            .catch((err) => {
                console.log(err);
            });



    }

    render() {
        const { records, filtered, data1, data2, data3, data4, data7, CESUM, LIVEPRICE } = this.state;
        // console.log(data2);

        var LP = (LIVEPRICE)

        var PP = data2.filter((ab) => {
            let r = ab.PE.changeinOpenInterest + ab.PE.openInterest
            return data7[0] === r
        })
        // console.log(PP);

        var CC = data1.filter((ab) => {
            let r = ab.CE.changeinOpenInterest + ab.CE.openInterest
            return CESUM[0] === r
        })



        let profit = PP




        //  console.log(profit);
        var P = profit.filter((ab, i) => {
            let r = ab.strikePrice + 90
            // console.log(r);
            return 41686.7 === LIVEPRICE
        })
        // console.log("HEEEE",P);

        var Bridprice = P.filter((ab, i) => {
            let r = ab.CE.bidprice
            // console.log("Bridprice", r);
            return r;
        })

        var Bridpriceprofit = P.filter((ab, i) => {
            let q = ab.CE.bidprice * 10 / 100
            // console.log("Bridprice", q);
            return q;
        })

        

        switch (P) {
            case Bridprice + Bridpriceprofit:

                break;

            default:
                break;
        }


        // if (LIVEPRICE === 41686.7) {

        //     console.log(profit)

        // }







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
                                            Underlying Index: <span id="equity_underlyingVal" class="bold "><b>BANKNIFTY {data.index.last} </b></span>
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

                    <div id="chartContainer">
                        <Table className="mt-3" class="tableFixHead" id="chartContainer">
                            <thead>



                                <tr style={{
                                    backgroundColor: '	#ffbf00'
                                }}>
                                    <th width="30%" title="Open Interest in contracts">PE</th>

                                    <th width="40%" title="Strike Price">Strike Price</th>

                                    <th width="40%" title="Open Interest in contracts">CE</th>
                                </tr>
                            </thead>


                            <tbody>

                                {data2.map((data, i) => {
                                    // let price = console.log(PP);
                                    if (i > 55) {

                                        return (

                                            <tr >
                                                <td style={{
                                                    backgroundColor: PP[0] === data ? '#33F9FF' : null

                                                }}>{data.PE.changeinOpenInterest + data.PE.openInterest}</td>

                                                <td style={{
                                                    backgroundColor: '#66CDAA'

                                                }}  ><b>{data.strikePrice}</b></td>


                                                <td style={{
                                                    backgroundColor: '#CCEEFF'

                                                }}>{data.CE.openInterest + data.CE.changeinOpenInterest}</td>
                                                <td >{ }</td>
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

                                                <td style={{
                                                    backgroundColor: '#CCEEFF'

                                                }}>{data.PE.openInterest + data.PE.changeinOpenInterest}</td>
                                                <td style={{
                                                    backgroundColor: '#66CDAA'

                                                }}  ><b>{data.strikePrice}</b></td>



                                                <td style={{
                                                    backgroundColor: CC[0] === data ? '#33F9FF' : null

                                                }}>{data.CE.openInterest + data.CE.changeinOpenInterest}</td>
                                            </tr>
                                        )
                                    }
                                })
                                }


                            </tbody>
                        </Table>
                    </div>
                </>

            </div>
        )
    }
}

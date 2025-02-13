import React from 'react'

function Hero() {
  return (
    <div className='container'>
        <div className='row p-5 mt-5 mb-5 border-bottom text-center'>
            <h1>Pricing</h1>
            <h3 className='text-muted fs-5 mt-2'>Free equity investment and flat ₹20 traddy and F&O trades</h3>
        </div>
        <div className='row p-5 mt-5 text-center'>
            <div className='col-12 col-sm-6 col-md-4 p-4'>
                <img src="Media\images\pricing0.svg" alt="pricing0" />
                <h1 className='fs-3 '>Free equity delivery</h1>
                <p className='text-muted mt-2'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-12 col-sm-6 col-md-4 p-3'>
                <img src="Media\images\intradayTrades.svg" alt="" />
                <h1 className='fs-3 '>Intraday and F&O trades</h1>
                <p className='text-muted mt-2'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-12 col-sm-6 col-md-4 p-3'>
                <img src="Media\images\pricingMF.svg" alt="" />
                <h1 className='fs-3 '>Free direct MF</h1>
                <p className='text-muted mt-2'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
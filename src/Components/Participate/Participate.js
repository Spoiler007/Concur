import React from 'react'
import './participate.css'


const Participate = () => {
    return (
        <div className='participate'>
        <div className='participate-img'>
        <img src="https://assets.website-files.com/621f51702b01b7fee7ff903a/6222174c09f2ecf6201fc16c_Olympus_Objects_Torus_01_TS_00000%201.png" loading="lazy" sizes="(max-width: 991px) 100vw, (max-width: 1919px) 20vw, 391.109375px" srcset="https://assets.website-files.com/621f51702b01b7fee7ff903a/6222174c09f2ecf6201fc16c_Olympus_Objects_Torus_01_TS_00000%201-p-500.png 500w, https://assets.website-files.com/621f51702b01b7fee7ff903a/6222174c09f2ecf6201fc16c_Olympus_Objects_Torus_01_TS_00000%201.png 704w" alt="" class="home-participate__flow__img"/>
        </div>
            <h1>How to Participate</h1>
            <div className='participate-content'>
                <div className='participate-1'>
                <img src="https://assets.website-files.com/621f51702b01b7fee7ff903a/62221a479281124df8c639f8_image-1-2.png" loading="lazy" alt="" class="home__participate-card__img"/>
                    <h2>Provide Liquidity</h2>
                    <p>Earn pool incentives while helping proliferate OHM accross DeFi. OHM's <a href='#'>low volatility</a> makes it a great pair with your favorite assests,such as ETH or USDC.
                    <br/>
                    <br/>
                     Deep market liquidity combined with a strong Olympus treasury will help realize OHM as the de facto utilization DeFi currency.</p>
                    <button id="part1-btn">Liquidity</button>
                </div>


                <div className='participate-2'>
                <img src="https://assets.website-files.com/621f51702b01b7fee7ff903a/62221a4982de9aadc62f1d03_image-3.png" loading="lazy" alt="" class="home__participate-card__img"/>
                    <h2>Bonding</h2>
                    <p>Bonding allows you yo trade various tokens for OHM at a discounted price. In exchange,bond sales provide additional liquidity and reserve assests to the Olympus treasury,contributing to thestability of the protocol.As a result, 99% of all liquidity is owned by Olympus</p>
                    <button id="part2-btn">bond</button>
                </div>

            </div>
        </div>
    )
}

export default Participate;
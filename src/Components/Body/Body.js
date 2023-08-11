import React from 'react'
import './body.css'
import CountUp from 'react-countup';

const Body = () => {
    return (
        <div className='body'>

            <div className='body-content'>
                <h1>The Future Decentralized Reserve Currency</h1>
                <p>Olympus is building OHM, a community-owned,decentralized and censorship-residential reserve currency that is asset-backed,deeply liquid and used widely across Web3.</p>
                <button id="entry-btn">
                    <span className='btn-text-one'>Discover how</span>
                    <span className='btn-text-two'>Discover how</span>
                </button>
            </div>
            <div className='protocol'>
                <h3>Protocol Stats</h3>
                <div className='protocol-content'>
                    <div className='left-icon'>
                        <img src="https://assets.website-files.com/621f51702b01b7fee7ff903a/6247321cd836151c73e3017b_image-1.png" loading="lazy" alt="Infrastructure" class="home-protocol__flow__img-left" />
                    </div>
                    <div className='right-icon'>
                        <img src="https://assets.website-files.com/621f51702b01b7fee7ff903a/622206b2a4293b5d73dce53f_olympus_objects_look_d_coin_01_ts%203.png" loading="lazy" sizes="(max-width: 991px) 100vw, (max-width: 1919px) 28vw, 537.59375px" srcset="https://assets.website-files.com/621f51702b01b7fee7ff903a/622206b2a4293b5d73dce53f_olympus_objects_look_d_coin_01_ts%203-p-500.png 500w, https://assets.website-files.com/621f51702b01b7fee7ff903a/622206b2a4293b5d73dce53f_olympus_objects_look_d_coin_01_ts%203-p-800.png 800w, https://assets.website-files.com/621f51702b01b7fee7ff903a/622206b2a4293b5d73dce53f_olympus_objects_look_d_coin_01_ts%203.png 964w" alt="" class="home-protocol__flow__img-right" />
                    </div>

                    <div className='content-1'>
                        <p>Treasury Balance</p>
                        <h4>
                        <CountUp
                            
                            end={184676580}
                            duration={2}
                            separator=","
                            decimals={0}
                            decimal=","
                            prefix="$"
                            suffix=""
                        >
                           
                                {({ countUpRef}) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                        
                        </CountUp>
                        </h4>
                    </div>
                    <div className='content-2'>
                        <p>Number of Holders</p>
                        
                        <h4>
                        <CountUp
                            
                            end={120000}
                            duration={2}
                            separator=","
                            decimals={0}
                            decimal=","
                            prefix="$"
                            suffix="+"
                        >
                           
                                {({ countUpRef}) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                        
                        </CountUp>
                        </h4>
                    </div>
                    <div className='content-3'>
                        <p>Protocol-Owned Liquidity</p>
                        <h4>
                        <CountUp
                            
                            end={19858256}
                            duration={2}
                            separator=","
                            decimals={0}
                            decimal=","
                            prefix="$"
                            suffix=""
                        >
                           
                                {({ countUpRef}) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                        
                        </CountUp>
                        </h4>
                
                    </div>
                    <div className='content-4'>
                        <p>Unique Tokens in Treasury</p>
                        <h4>50+</h4>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Body;
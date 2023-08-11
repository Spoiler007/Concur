import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import './footer.css'
const Footer = () => {
    return (
        <>
            <div className='footer'>

                <div className='footer-section'>
                    <div className='footer-img'>
                        <img src="https://assets.website-files.com/621f51702b01b7fee7ff903a/6222174cd04f583228260dd9_olympus_objects_look_d_coin_01_ts%205.png" loading="lazy" sizes="(max-width: 991px) 100vw, (max-width: 1919px) 21vw, 412.796875px" srcset="https://assets.website-files.com/621f51702b01b7fee7ff903a/6222174cd04f583228260dd9_olympus_objects_look_d_coin_01_ts%205-p-500.png 500w, https://assets.website-files.com/621f51702b01b7fee7ff903a/6222174cd04f583228260dd9_olympus_objects_look_d_coin_01_ts%205.png 740w" alt="" class="home-faq__flow__img-right" />

                    </div>
                    <div className='footer-l'>
                        <div className='footer-logo'>
                            <img src={`/copy-logo.png`} alt="" />
                            <h1>Concur</h1>
                        </div>
                        <div className='footer-icons'>

                            <a href='#'><img src={`/twitter.png`} alt="" />
                            </a>
                            <a href='#'><img src={`/discord.png`} alt="" />
                            </a>
                            <a href='#'><img src={`/github2.png`} alt="" />
                            </a>
                            <a href='#'><img src={`/instagram2.png`} alt="" />
                            </a>
                            <a href='#'><img src={`/telegram.png`} alt="" />
                            </a>
                            <a href='#'><img src={`/youtube.png`} alt="" />
                            </a>
                            <a href='#'><img src={`/reddit.png`} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='products'>
                        <p>Products</p>
                        <a href='#'>olympus pro</a>
                        <a href='#'>staking</a>
                        <a href='#'>bonds</a>
                    </div>
                    <div className='products'>
                        <p>learn</p>
                        <a href='#'>documentation</a>
                        <a href='#'>blog</a>
                        <a href='#'>medium</a>

                    </div>
                    <div className='products'>
                        <p>Contact us</p>
                        <a href='#'>join olympus discord</a>
                        <a href='#'>media inquiries</a>
                    </div>
                </div>
                <div className='tag'>
                    <img src="https://assets.website-files.com/621f51702b01b7fee7ff903a/63076b7cea503d9816cd44b8_Climate_Positive_Protocol_Button_2.svg" loading="lazy" id="w-node-_5c8e9900-dc7b-93fd-960d-1a3e4f4ff0bd-3639f0d9" alt="" class="image-53" />
                </div>
            </div>
        </>
    )
}

export default Footer;
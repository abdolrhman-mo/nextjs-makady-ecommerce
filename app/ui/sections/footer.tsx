import '@/public/styles/footer.sass'
import Logo from '../components/logo'

export default function Footer() {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pb-4">
                        <h4>Subscribe to our newsletter</h4>
                    </div>
                    <div className="col-md-4 pb-4">
                        <input className='border md:border-none' type="text" placeholder='Your email address...' />
                    </div>
                    <div className="col-md-2">
                        <input type="submit" value="SUBSCIBE" />
                    </div>
                    <div className="col-12">
                        <hr />
                    </div>
                    <div className="col-md-6 hidden md:block">
                        {/* <img src={logo} alt="Be Bold" /> */}
                        <Logo />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <ul>
                                    <li>
                                        <a href="/latest">Shop All</a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target='_blank'>Instagram</a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target='_blank'>Facebook</a>
                                    </li>
                                    <li>
                                        <a href="mailto:abdelrhmanlearn@gmail.com">Mail</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li>
                                        <a href="">Refund Policy</a>
                                    </li>
                                    <li>
                                        <a href="">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                        <hr />
                        <p className='copyright'>
                            Copyright © 2024 Be Bold | Powered by Abdelrahman Makady
                        </p>
                </div>
            </div>
        </footer>
    )
}
import React from 'react';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <main>
                <section className="first" style={{backgroundImage: "url('main-header.jpg')"}}>
                    <div className="first-text">
                        <h3>Lorem ipsum dolor sit iusmod tempor</h3>
                        <h1>incididunt bore</h1>
                        <p className="first-p">Orem ipsum dolor sit amet, consectetur</p>
                        <a 
                            href="#about-me" 
                            className="btn"
                        >
                            KNOW MORE
                        </a>
                    </div>
                </section>
                <section className="about" id="about-me">
                    <h2>ABOUT ME</h2>
                    <p className="section-title-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea
                        commodo consequat duis aute irure dolor.</p>
                    <div className="about-group">
                        <div className="about-item">
                            <img src="" alt="" className="item-img"/>
                            <p className="item-title">Title goes here</p>
                            <p className="item-text">onsectetur adipisicing elit, sedo eiusmod tempor incidi
                                et dolorerserss eerhfre mag.</p>
                        </div>
                        <div className="about-item">
                            <img src="" alt="" className="item-img" />
                            <p className="item-title">Title goes here</p>
                            <p className="item-text">onsectetur adipisicing elit, sedo eiusmod tempor incidi
                                et dolorerserss eerhfre mag.</p>
                        </div>
                        <div className="about-item">
                            <img src="" alt="" className="item-img" />
                            <p className="item-title">Title goes here</p>
                            <p className="item-text">onsectetur adipisicing elit, sedo eiusmod tempor incidi
                                et dolorerserss eerhfre mag.</p>
                        </div>
                        <div className="about-item">
                            <img src="" alt="" className="item-img" />
                            <p className="item-title">Title goes here</p>
                            <p className="item-text">onsectetur adipisicing elit, sedo eiusmod tempor incidi
                                et dolorerserss eerhfre mag.</p>
                        </div>
                    </div>
                </section>
                <div className="section-wrapper">
                    <section className="services" id="services">
                        <h2>SERVICES</h2>
                        <p className="section-title-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="services-group">
                            <div className="services-item">
                                <img src="" alt="" className="item-img" />
                                <p className="item-title">Title goes here</p>
                                <p className="item-text">onsectetur adipisicing elit, sedo eiusmod tempor incidi
                                    et dolorerserss eerhfre mag.</p>
                            </div>
                            <div className="services-item">
                                <img src="" alt="" className="item-img" />
                                <p className="item-title">Title goes here</p>
                                <p className="item-text">onsectetur adipisicing elit, sedo eiusmod tempor incidi
                                    et dolorerserss eerhfre mag.</p>
                            </div>
                            <div className="services-item">
                                <img src="" alt="" className="item-img" />
                                <p className="item-title">Title goes here</p>
                                <p className="item-text">onsectetur adipisicing elit, sedo eiusmod tempor incidi
                                    et dolorerserss eerhfre mag.</p>
                            </div>
                            <div className="services-item">
                                <img src="" alt="" className="item-img" />
                                <p className="item-title">Title goes here</p>
                                <p className="item-text">onsectetur adipisicing elit, sedo eiusmod tempor incidi
                                    et dolorerserss eerhfre mag.</p>
                            </div>
                        </div>
                        <img src="services-img.jpg" alt="" className="services-img" />
                    </section>
                </div>
                <section className="mywork" id="mywork">
                    <h2>MY WORK</h2>
                    <p className="section-title-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt
                        ut labore et dolore magna aliqua.</p>
                    <div className="mywork-items">
                        <a 
                            href="#" 
                            target="blank"
                            >
                            <div className="mywork-item">
                                <img src="http://zornet.ru/Aben/ABGDA/zornet_ru/kersa/5gjOAVZ-QxKet75pq39emQ.png" alt=""
                                    className="item-layer_bottom" />
                                <div className="item-layer_top item-layer_scale">
                                    <div className="item-layer-text">Посмотреть демо-версию работы.
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a 
                            href="#" 
                            target="blank"
                            >
                            <div className="mywork-item">
                                <img src="http://zornet.ru/Aben/ABGDA/zornet_ru/kersa/5gjOAVZ-QxKet75pq39emQ.png" alt=""
                                    className="item-layer_bottom" />
                                <div className="item-layer_top item-layer_scale">
                                    <div className="item-layer-text">Посмотреть демо-версию работы.
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a 
                            href="#" 
                            target="blank"
                            >
                            <div className="mywork-item">
                                <img src="http://zornet.ru/Aben/ABGDA/zornet_ru/kersa/5gjOAVZ-QxKet75pq39emQ.png" alt=""
                                    className="item-layer_bottom" />
                                <div className="item-layer_top item-layer_scale">
                                    <div className="item-layer-text">Посмотреть демо-версию работы.
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a 
                            href="#" 
                            target="blank"
                            >
                            <div className="mywork-item">
                                <img src="http://zornet.ru/Aben/ABGDA/zornet_ru/kersa/5gjOAVZ-QxKet75pq39emQ.png" alt=""
                                    className="item-layer_bottom" />
                                <div className="item-layer_top item-layer_scale">
                                    <div className="item-layer-text">Посмотреть демо-версию работы.
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a 
                            href="#" 
                            target="blank"
                            >
                            <div className="mywork-item">
                                <img src="http://zornet.ru/Aben/ABGDA/zornet_ru/kersa/5gjOAVZ-QxKet75pq39emQ.png" alt=""
                                    className="item-layer_bottom" />
                                <div className="item-layer_top item-layer_scale">
                                    <div className="item-layer-text">Посмотреть демо-версию работы.
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a 
                            href="#" 
                            target="blank"
                            >
                            <div className="mywork-item">
                                <img src="http://zornet.ru/Aben/ABGDA/zornet_ru/kersa/5gjOAVZ-QxKet75pq39emQ.png" alt=""
                                    className="item-layer_bottom" />
                                <div className="item-layer_top item-layer_scale">
                                    <div className="item-layer-text">Посмотреть демо-версию работы.
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a 
                            href="#" 
                            target="blank"
                            >
                            <div className="mywork-item">
                                <img src="http://zornet.ru/Aben/ABGDA/zornet_ru/kersa/5gjOAVZ-QxKet75pq39emQ.png" alt=""
                                    className="item-layer_bottom" />
                                <div className="item-layer_top item-layer_scale">
                                    <div className="item-layer-text">Посмотреть демо-версию работы.
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a 
                            href="#" 
                            target="blank"
                            >
                            <div className="mywork-item">
                                <img src="http://zornet.ru/Aben/ABGDA/zornet_ru/kersa/5gjOAVZ-QxKet75pq39emQ.png" alt=""
                                    className="item-layer_bottom" />
                                <div className="item-layer_top item-layer_scale">
                                    <div className="item-layer-text">Посмотреть демо-версию работы.
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
                <section className="contact" id="contact">
                    <h2>CONTACT ME</h2>
                    <p className="section-title-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt
                        ut labore et dolore magna aliqua.</p>
                    <form action="" className="contact-form">
                        <input className="inp-name" type="text" placeholder="name" required />
                        <input className="inp-email" type="email" placeholder="e-mail" required />
                        <textarea className="textarea" name="" id="" cols="20" rows="5" placeholder="Please write your message here"
                            required></textarea>
                        <button type="submit" className="btn">SUBMIT</button>
                    </form>
                </section>
            </main>
        );
    }
}

export default Main;
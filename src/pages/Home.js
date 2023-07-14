import React from "react";
import "./Home.css";
const Home = () => {
    return (
        <section className="home-section home-landing home-welcome welcome-boxed">
            <div className="container">
                <div className="box">
                    <div className="grid grid-normal">
                        <div className="text-wrapper">
                            <h2 itemProp="headline">Xin chào, mọi người đã tới trang web của mình. </h2>
                            <div className="text-block"  itemProp="text">
                                <p>Khám phá những công cụ, các lời khuyên để mang lại những cảm hứng cho các sản phẩm đầy ý tưởng của chính bản thân bạn.
                                </p>
                            </div>
                        </div>
                        <div className="thumbnail-grid thumbnail-ratio thumbnail square">
                            <img width="512" height="512" itemprop="image" src="https://stackdiary.com/wp-content/uploads/2023/03/SD-home.svg" alt="Stories, for developers, designers, and makers." data-lazy-src="https://stackdiary.com/wp-content/uploads/2023/03/SD-home.svg" data-ll-status="loaded" class="entered lazyloaded"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  };
  export default Home;
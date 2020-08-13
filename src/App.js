import React from 'react';

function App() {
  return (
<div>
  <div className="py-1 bg-primary">
    <div className="container">
      <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
        <div className="col-lg-12 d-block">
          <div className="row d-flex">
            <div className="col-md pr-4 d-flex topper align-items-center">
              <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2" /></div>
              <span className="text">+ 1235 2355 98</span>
            </div>
            <div className="col-md pr-4 d-flex topper align-items-center">
              <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane" /></div>
              <span className="text">youremail@email.com</span>
            </div>
            <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
              <span className="text">3-5 Business days delivery &amp; Free Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <a className="navbar-brand" href="index.html">Vegefoods</a>
      <button className="navbar-toggler" 
      type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="shop.html">Shop</a>
              <a className="dropdown-item" href="wishlist.html">Wishlist</a>
              <a className="dropdown-item" href="product-single.html">Single Product</a>
              <a className="dropdown-item" href="cart.html">Cart</a>
              <a className="dropdown-item" href="checkout.html">Checkout</a>
            </div>
          </li>
          <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
          <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
          <li className="nav-item cta cta-colored"><a href="cart.html" className="nav-link"><span className="icon-shopping_cart" />[0]</a></li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  <section id="home-section" className="hero">
    <div className="home-slider owl-carousel">
      <div className="slider-item" style={{backgroundImage: "url('/images/bg_1.jpg')"}}>
        <div className="overlay" />
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
            <div className="col-md-12 ftco-animate text-center">
              <h1 className="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
              <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
              <p><a href="#" className="btn btn-primary">View Details</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-item" style={{backgroundImage: 'url("images/bg_2.jpg")'}}>
        <div className="overlay" />
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
            <div className="col-sm-12 ftco-animate text-center">
              <h1 className="mb-2">100% Fresh &amp; Organic Foods</h1>
              <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
              <p><a href="#" className="btn btn-primary">View Details</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row no-gutters ftco-services">
        <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services mb-md-0 mb-4">
            <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
              <span className="flaticon-shipped" />
            </div>
            <div className="media-body">
              <h3 className="heading">Free Shipping</h3>
              <span>On order over $100</span>
            </div>
          </div>      
        </div>
        <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services mb-md-0 mb-4">
            <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
              <span className="flaticon-diet" />
            </div>
            <div className="media-body">
              <h3 className="heading">Always Fresh</h3>
              <span>Product well package</span>
            </div>
          </div>    
        </div>
        <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services mb-md-0 mb-4">
            <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
              <span className="flaticon-award" />
            </div>
            <div className="media-body">
              <h3 className="heading">Superior Quality</h3>
              <span>Quality Products</span>
            </div>
          </div>      
        </div>
        <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services mb-md-0 mb-4">
            <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
              <span className="flaticon-customer-service" />
            </div>
            <div className="media-body">
              <h3 className="heading">Support</h3>
              <span>24/7 Support</span>
            </div>
          </div>      
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-category ftco-no-pt">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6 order-md-last align-items-stretch d-flex">
              <div className="category-wrap-2 ftco-animate img align-self-stretch d-flex" style={{
                backgroundImage: 'url(images/category.jpg)'}}>
                <div className="text text-center">
                  <h2>Vegetables</h2>
                  <p>Protect the health of every home</p>
                  <p><a href="#" className="btn btn-primary">Shop now</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="category-wrap ftco-animate img mb-4 d-flex align-items-end" style={{backgroundImage: 'url(images/category-1.jpg)'}}>
                <div className="text px-3 py-1">
                  <h2 className="mb-0"><a href="#">Fruits</a></h2>
                </div>
              </div>
              <div className="category-wrap ftco-animate img d-flex align-items-end" style={{backgroundImage: 'url(images/category-2.jpg)'}}>
                <div className="text px-3 py-1">
                  <h2 className="mb-0"><a href="#">Vegetables</a></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="category-wrap ftco-animate img mb-4 d-flex align-items-end" style={{backgroundImage: 'url(images/category-3.jpg)'}}>
            <div className="text px-3 py-1">
              <h2 className="mb-0"><a href="#">Juices</a></h2>
            </div>		
          </div>
          <div className="category-wrap ftco-animate img d-flex align-items-end" style={{backgroundImage: 'url(images/category-4.jpg)'}}>
            <div className="text px-3 py-1">
              <h2 className="mb-0"><a href="#">Dried</a></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-3 pb-3">
        <div className="col-md-12 heading-section text-center ftco-animate">
          <span className="subheading">Featured Products</span>
          <h2 className="mb-4">Our Products</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
      </div>   		
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-1.jpg" alt="Colorlib Template" />
              <span className="status">30%</span>
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Bell Pepper</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-2.jpg" alt="Colorlib Template" />
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Strawberry</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span>$120.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-3.jpg" alt="Colorlib Template" />
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Green Beans</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span>$120.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-4.jpg" alt="Colorlib Template" />
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Purple Cabbage</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span>$120.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-5.jpg" alt="Colorlib Template" />
              <span className="status">30%</span>
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Tomatoe</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-6.jpg" alt="Colorlib Template" />
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Brocolli</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span>$120.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-7.jpg" alt="Colorlib Template" />
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Carrots</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span>$120.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-8.jpg" alt="Colorlib Template" />
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Fruit Juice</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span>$120.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section img" style={{backgroundImage: 'url(images/bg_3.jpg)'}}>
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-md-6 heading-section ftco-animate deal-of-the-day ftco-animate">
          <span className="subheading">Best Price For You</span>
          <h2 className="mb-4">Deal of the day</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          <h3><a href="#">Spinach</a></h3>
          <span className="price">$10 <a href="#">now $5 only</a></span>
          <div id="timer" className="d-flex mt-5">
            <div className="time" id="days" />
            <div className="time pl-3" id="hours" />
            <div className="time pl-3" id="minutes" />
            <div className="time pl-3" id="seconds" />
          </div>
        </div>
      </div>   		
    </div>
  </section>
  <section className="ftco-section testimony-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate text-center">
          <span className="subheading">Testimony</span>
          <h2 className="mb-4">Our satisfied customer says</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
        </div>
      </div>
      <div className="row ftco-animate">
        <div className="col-md-12">
          <div className="carousel-testimony owl-carousel">
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="user-img mb-5" style={{backgroundImage: 'url("/images/person_1.jpg")'}}>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text text-center">
                  <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Garreth Smith</p>
                  <span className="position">Marketing Manager</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="user-img mb-5" style={{backgroundImage: 'url("/images/person_2.jpg")'}}>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text text-center">
                  <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Garreth Smith</p>
                  <span className="position">Interface Designer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="user-img mb-5" style={{backgroundImage: 'url("/images/person_3.jpg")'}}>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text text-center">
                  <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Garreth Smith</p>
                  <span className="position">UI Designer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="user-img mb-5" style={{backgroundImage: 'url(/images/person_1.jpg)'}}>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text text-center">
                  <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Garreth Smith</p>
                  <span className="position">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="user-img mb-5" style={{backgroundImage: 'url(/images/person_1.jpg)'}}>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text text-center">
                  <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Garreth Smith</p>
                  <span className="position">System Analyst</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr />
  <section className="ftco-section ftco-partner">
    <div className="container">
      <div className="row">
        <div className="col-sm ftco-animate">
          <a href="#" className="partner"><img src="/images/partner-1.png" className="img-fluid" alt="Colorlib Template" /></a>
        </div>
        <div className="col-sm ftco-animate">
          <a href="#" className="partner"><img src="/images/partner-2.png" className="img-fluid" alt="Colorlib Template" /></a>
        </div>
        <div className="col-sm ftco-animate">
          <a href="#" className="partner"><img src="/images/partner-3.png" className="img-fluid" alt="Colorlib Template" /></a>
        </div>
        <div className="col-sm ftco-animate">
          <a href="#" className="partner"><img src="/images/partner-4.png" className="img-fluid" alt="Colorlib Template" /></a>
        </div>
        <div className="col-sm ftco-animate">
          <a href="#" className="partner"><img src="/images/partner-5.png" className="img-fluid" alt="Colorlib Template" /></a>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
    <div className="container py-4">
      <div className="row d-flex justify-content-center py-5">
        <div className="col-md-6">
          <h2 style={{fontSize: '22px'}} className="mb-0">Subcribe to our Newsletter</h2>
          <span>Get e-mail updates about our latest shops and special offers</span>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <form action="#" className="subscribe-form">
            <div className="form-group d-flex">
              <input type="text" className="form-control" placeholder="Enter email address" />
              <input type="submit" defaultValue="Subscribe" className="submit px-3" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <footer className="ftco-footer ftco-section">
    <div className="container">
      <div className="row">
        <div className="mouse">
          <a href="#" className="mouse-icon">
            <div className="mouse-wheel"><span className="ion-ios-arrow-up" /></div>
          </a>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Vegefoods</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-5">
            <h2 className="ftco-heading-2">Menu</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="py-2 d-block">Shop</a></li>
              <li><a href="#" className="py-2 d-block">About</a></li>
              <li><a href="#" className="py-2 d-block">Journal</a></li>
              <li><a href="#" className="py-2 d-block">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Help</h2>
            <div className="d-flex">
              <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                <li><a href="#" className="py-2 d-block">Shipping Information</a></li>
                <li><a href="#" className="py-2 d-block">Returns &amp; Exchange</a></li>
                <li><a href="#" className="py-2 d-block">Terms &amp; Conditions</a></li>
                <li><a href="#" className="py-2 d-block">Privacy Policy</a></li>
              </ul>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">FAQs</a></li>
                <li><a href="#" className="py-2 d-block">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
</div>

  );
}

export default App;

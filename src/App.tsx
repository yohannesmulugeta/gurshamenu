import { useMemo, useState } from "react";
import {
  ArrowRight, BarChart3, Check, Clock3, Eye, MapPin, MessageSquareText,
  Pencil, QrCode, Smartphone, Store, UtensilsCrossed, Zap
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const menuGoDemo = "https://yohannesmulugeta.github.io/Menu-Go/#/r/abol-coffee";
const menuGoLogin = "https://yohannesmulugeta.github.io/Menu-Go/#/login";
const managerPreview = "https://yohannesmulugeta.github.io/Menu-Go/#/preview-manager";
const adminPreview = "https://yohannesmulugeta.github.io/Menu-Go/#/preview-admin";

function Wordmark({ light=false }: { light?: boolean }) {
  return <span className={`wordmark ${light ? "light" : ""}`}>
    <img src={`${import.meta.env.BASE_URL}gurshamenu-mark.svg`} alt="" />
    <strong>Gursha<span>Menu</span></strong>
  </span>;
}

const demoMenu = [
  { name:"Cappuccino", category:"Coffee", price:150 },
  { name:"Special Macchiato", category:"Coffee", price:180 },
  { name:"Cheese Croissant", category:"Pastries", price:210 },
];

export default function App() {
  const [price,setPrice]=useState(150);
  const [available,setAvailable]=useState(true);
  const currentPrice=useMemo(()=>Number.isFinite(price)?Math.max(0,price):0,[price]);

  return <div className="site">
    <header className="nav-shell">
      <nav className="nav">
        <a href="#top" className="logo-link"><Wordmark/></a>
        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#demo">Demo</a>
        </div>
        <div className="nav-actions">
          <a href={menuGoLogin} className="text-link">Sign in</a>
          <a href="#contact" className="button small">Get GurshaMenu <ArrowRight size={16}/></a>
        </div>
      </nav>
    </header>

    <main id="top">
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">SMARTER RESTAURANT MENUS</p>
          <h1>Your menu.<br/><em>Always fresh.</em></h1>
          <p className="lead">Create a beautiful digital restaurant menu, update prices instantly, and let guests access everything through one permanent QR code.</p>
          <div className="hero-actions">
            <a href="#contact" className="button">Get GurshaMenu <ArrowRight size={18}/></a>
            <a href={menuGoDemo} className="button secondary">View live demo</a>
          </div>
          <div className="proof-line">
            <span><Check size={15}/> No customer app</span>
            <span><Check size={15}/> Instant updates</span>
            <span><Check size={15}/> Permanent QR</span>
          </div>
        </div>

        <div className="hero-stage">
          <div className="table-card">
            <Wordmark/>
            <div className="qr-box"><QRCodeSVG value={menuGoDemo} size={96}/></div>
            <strong>Scan to view the menu</strong>
            <small>One QR. Always up to date.</small>
          </div>

          <div className="phone">
            <div className="phone-notch"/>
            <div className="phone-cover">
              <span>ABOL COFFEE</span>
              <small>Hayahulet · Addis Ababa</small>
            </div>
            <div className="phone-tabs"><b>Menu</b><span>About</span><span>Reviews</span></div>
            <div className="phone-menu">
              <h4>Coffee</h4>
              {demoMenu.map(item=><div className="phone-item" key={item.name}>
                <div className="food-dot"/>
                <div><b>{item.name}</b><small>{item.category}</small></div>
                <strong>{item.name==="Cappuccino"?currentPrice:item.price} ETB</strong>
              </div>)}
            </div>
          </div>

          <div className="float-card update"><Zap size={17}/><div><small>Price updated</small><b>150 → {currentPrice} ETB</b></div></div>
          <div className="float-card views"><Eye size={17}/><div><small>Restaurant insights</small><b>Live engagement</b></div></div>
        </div>
      </section>

      <section className="category-strip">
        <span>Built for</span>
        <strong>Cafés</strong><i>•</i><strong>Restaurants</strong><i>•</i><strong>Bakeries</strong><i>•</i><strong>Hotels</strong><i>•</i><strong>Hospitality brands</strong>
      </section>

      <section className="section problem">
        <div className="section-heading">
          <p className="eyebrow">WHY GURSHAMENU</p>
          <h2>Printed menus become outdated.<br/>Your QR shouldn't.</h2>
        </div>
        <div className="compare">
          <article className="compare-card old">
            <span className="kicker">THE OLD WAY</span>
            <h3>Change one price. Reprint everything.</h3>
            <div className="process"><span>Edit</span><ArrowRight/><span>Print</span><ArrowRight/><span>Replace</span></div>
            <p>Small changes turn into recurring printing work and unnecessary operational friction.</p>
          </article>
          <article className="compare-card new">
            <span className="kicker">THE GURSHAMENU WAY</span>
            <h3>Change once. Everyone sees it.</h3>
            <div className="price-change"><span>250 ETB</span><ArrowRight/><strong>280 ETB</strong><Check/></div>
            <p>Update a price, hide a sold-out item or add a photo. The restaurant's QR stays the same.</p>
          </article>
        </div>
      </section>

      <section id="how" className="how section">
        <div className="section-heading centered">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>From restaurant setup to guest phone.</h2>
          <p>Three simple layers keep the experience easy for everyone.</p>
        </div>
        <div className="steps">
          <article><span>01</span><Store/><h3>We set up the restaurant</h3><p>GurshaMenu creates the restaurant profile, menu, permanent public link and QR-ready experience.</p></article>
          <article><span>02</span><Pencil/><h3>The manager stays in control</h3><p>Prices, dishes, photos, availability and opening hours stay editable from one dashboard.</p></article>
          <article><span>03</span><Smartphone/><h3>Guests simply scan</h3><p>No app. No account. The latest restaurant menu opens directly on the customer's phone.</p></article>
        </div>
      </section>

      <section id="product" className="section live-demo">
        <div className="demo-copy">
          <p className="eyebrow">INTERACTIVE PRODUCT DEMO</p>
          <h2>See the update happen.</h2>
          <p>Change the demo price. The customer view updates immediately — the same idea that makes GurshaMenu useful inside a real restaurant.</p>
          <div className="editor-card">
            <div className="editor-item"><span className="food-thumb"><UtensilsCrossed/></span><div><b>Cappuccino</b><small>Coffee</small></div></div>
            <label>Price <input type="number" min="0" value={price} onChange={e=>setPrice(Number(e.target.value))}/><span>ETB</span></label>
            <label className="toggle-row">Available <button className={available?"on":""} onClick={()=>setAvailable(v=>!v)} aria-label="Toggle availability"><i/></button></label>
          </div>
        </div>
        <div className="demo-browser">
          <div className="browser-top"><span/><span/><span/><small>gurshamenu.com/abol</small></div>
          <div className="demo-restaurant">
            <div className="demo-brand"><span>AC</span><div><b>Abol Coffee</b><small>Digital menu</small></div></div>
            <div className={`demo-dish ${available?"":"sold"}`}>
              <span className="food-thumb large"><UtensilsCrossed/></span>
              <div><b>Cappuccino</b><small>{available?"Freshly available":"Currently unavailable"}</small></div>
              <strong>{currentPrice} ETB</strong>
            </div>
          </div>
          <div className="sync-pill"><Zap size={15}/> Customer menu updated instantly</div>
        </div>
      </section>

      <section className="section feature-stack">
        <div className="feature-row">
          <div className="feature-copy">
            <p className="eyebrow">MENU MANAGEMENT</p>
            <h2>Change your menu in seconds.</h2>
            <p>Add dishes, prices, descriptions and photos. Hide sold-out products without deleting them.</p>
            <ul><li><Check/>Prices and descriptions</li><li><Check/>Photos and categories</li><li><Check/>Available / unavailable</li></ul>
          </div>
          <div className="dashboard-mock">
            <div className="dash-side"><Wordmark/><span className="active">Menu</span><span>Categories</span><span>Hours</span><span>Analytics</span></div>
            <div className="dash-main"><small>ABOL COFFEE</small><h3>Menu items</h3>
              {["Cappuccino","Cheese Croissant","Fresh Juice"].map((name,i)=><div className="dash-item" key={name}><span className="food-dot"/><b>{name}</b><small>{[150,210,190][i]} ETB</small><i>Active</i></div>)}
            </div>
          </div>
        </div>

        <div className="feature-row reverse">
          <div className="feature-copy">
            <p className="eyebrow">PERMANENT QR</p>
            <h2>Print once. Update forever.</h2>
            <p>The public restaurant link stays stable while managers keep the content fresh behind it.</p>
            <ul><li><Check/>Table cards</li><li><Check/>Counter stickers</li><li><Check/>Printed and social materials</li></ul>
          </div>
          <div className="qr-poster"><img src={`${import.meta.env.BASE_URL}gurshamenu-mark.svg`} alt="GurshaMenu"/><QRCodeSVG value={menuGoDemo} size={160}/><h3>Scan our menu</h3><p>No download required</p></div>
        </div>
      </section>

      <section className="culture section">
        <div>
          <p className="eyebrow">OUR IDENTITY</p>
          <h2>Born from a culture of sharing.<br/>Built for modern hospitality.</h2>
          <p>“Gursha” represents sharing food and hospitality. GurshaMenu carries that spirit into a simple digital restaurant experience — modern first, with a subtle Ethiopian identity.</p>
        </div>
        <img src={`${import.meta.env.BASE_URL}gurshamenu-mark.svg`} alt="GurshaMenu brand mark"/>
      </section>

      <section className="section">
        <div className="section-heading centered">
          <p className="eyebrow">BUILT FOR RESTAURANT OWNERS</p>
          <h2>Less menu maintenance. Better guest experience.</h2>
        </div>
        <div className="benefit-grid">
          <article><Zap/><h3>Stop reprinting</h3><p>Change menu information without replacing every printed menu.</p></article>
          <article><Smartphone/><h3>Look more professional</h3><p>Give guests a clean mobile-first experience instead of a static PDF.</p></article>
          <article><MessageSquareText/><h3>Receive feedback</h3><p>Give customers a direct way to share private feedback with the restaurant.</p></article>
          <article><BarChart3/><h3>Understand engagement</h3><p>Track useful actions such as menu views, directions and review clicks.</p></article>
          <article><Clock3/><h3>Keep hours current</h3><p>Managers maintain opening hours from the same restaurant dashboard.</p></article>
          <article><MapPin/><h3>Connect the whole profile</h3><p>Phone, location, social accounts and restaurant links stay together.</p></article>
        </div>
      </section>

      <section id="demo" className="demo-hub section">
        <div>
          <p className="eyebrow">EXPLORE THE PRODUCT</p>
          <h2>See GurshaMenu from every side.</h2>
          <p>The working prototype remains in the original Menu-Go application while the new GurshaMenu brand is developed separately.</p>
        </div>
        <div className="demo-cards">
          <a href={menuGoDemo}><Smartphone/><div><span>CUSTOMER</span><h3>Abol Coffee menu</h3><p>See the live guest experience.</p></div><ArrowRight/></a>
          <a href={managerPreview}><Pencil/><div><span>RESTAURANT</span><h3>Manager preview</h3><p>See how a restaurant maintains its menu.</p></div><ArrowRight/></a>
          <a href={adminPreview}><Store/><div><span>PLATFORM</span><h3>Admin preview</h3><p>See restaurant onboarding and control.</p></div><ArrowRight/></a>
        </div>
      </section>

      <section id="pricing" className="pricing section">
        <div className="section-heading centered">
          <p className="eyebrow">PRICING</p>
          <h2>Simple plans for growing restaurants.</h2>
          <p>Commercial pricing will be finalized after early restaurant pilots. No fake launch prices.</p>
        </div>
        <div className="price-grid">
          <article><span>STARTER</span><h3>Digital Menu</h3><p>For restaurants that need a polished QR menu and easy updates.</p><ul><li><Check/>Permanent QR menu</li><li><Check/>Menu manager</li><li><Check/>Restaurant profile</li><li><Check/>Opening hours</li></ul><a href="#contact" className="button secondary">Talk to us</a></article>
          <article className="featured"><span>BUSINESS</span><h3>Guest Experience</h3><p>For restaurants that want menu management plus customer insight.</p><ul><li><Check/>Everything in Starter</li><li><Check/>Private feedback</li><li><Check/>Analytics</li><li><Check/>Review & social links</li></ul><a href="#contact" className="button">Talk to us</a></article>
          <article><span>MULTI-BRANCH</span><h3>Restaurant Groups</h3><p>For hospitality businesses that need more than one location.</p><ul><li><Check/>Multiple restaurant profiles</li><li><Check/>Central admin</li><li><Check/>Branch managers</li><li><Check/>Custom onboarding</li></ul><a href="#contact" className="button secondary">Contact sales</a></article>
        </div>
      </section>

      <section id="contact" className="final-cta section">
        <Wordmark light/>
        <h2>Your menu shouldn't become outdated<br/>the moment you print it.</h2>
        <p>Put your restaurant on GurshaMenu and update your menu whenever you need.</p>
        <div><a href={menuGoDemo} className="button light">See live demo</a><a href="mailto:yohannesmulugeta084@gmail.com" className="button outline-light">Contact GurshaMenu</a></div>
        <small>Restaurant setup and menu onboarding can be handled for you.</small>
      </section>
    </main>

    <footer className="footer">
      <div><Wordmark/><p>Hospitality, digitally served.</p></div>
      <div><b>Product</b><a href="#product">Features</a><a href="#demo">Demo</a><a href="#pricing">Pricing</a></div>
      <div><b>Account</b><a href={menuGoLogin}>Sign in</a></div>
      <div><b>Company</b><a href="mailto:yohannesmulugeta084@gmail.com">Contact</a><span>Privacy</span><span>Terms</span></div>
      <div className="footer-bottom">© 2026 GurshaMenu. All rights reserved.</div>
    </footer>
  </div>;
}

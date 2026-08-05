const services = [
  { name: "Dental Implants", image: "/images/icon-implants-baba103e17.png" },
  { name: "Dentures", image: "/images/icon-dentures-b38b0b133c.png" },
  { name: "Same-day Crowns", image: "/images/icon-crowns-10507aa902.png" },
  { name: "Bridges", image: "/images/icon-bridges-468b7e6f7c.png" },
  { name: "SureSmile Aligners", image: "/images/icon-invisalign-c4eb70c190.png" },
  { name: "Emergency Care", image: "/images/icon-emergency-2bbfcfb6ad.png" },
];

const reviews = [
  {
    quote:
      "By far the best dental experience I've ever had. This is the most comfortable I've ever felt. Dr. Torres and his entire team are amazing!",
    name: "Spencer",
    year: "2024",
  },
  {
    quote:
      "The entire staff is always friendly and welcoming. Dr. Torres is extremely knowledgeable, caring and approachable.",
    name: "Sandie",
    year: "2024",
  },
  {
    quote:
      "If you can love a dentist, this is the one to love. I have perfect teeth now. The whole team takes such good care of me!",
    name: "Regina",
    year: "2024",
  },
];

const faqs = [
  {
    question: "Do you offer same-day emergency appointments?",
    answer:
      "Yes. The team aims to see patients with severe pain or infection the same day they call, and walk-ins are always welcome.",
  },
  {
    question: "Can I use my dental insurance?",
    answer:
      "The office bills all insurance types. As an out-of-network provider, the team can still help PPO patients use available benefits and understand financial options.",
  },
  {
    question: "What options are available for dental anxiety?",
    answer:
      "Comfort-focused care includes clear explanations and sedation options such as nitrous oxide, oral sedation and IV sedation.",
  },
  {
    question: "Do you offer payment or membership options?",
    answer:
      "Yes. In-office membership plans begin at $199 per year, and financing is available through CareCredit, Cherry and Proceed Finance.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="topbar">
        Same-day emergency appointments available <span>Call (775) 392-3209</span>
      </div>

      <nav aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Carson Valley Dental Arts home">
          <img src="/images/logo-carson3-45f9d6b6a1.png" alt="Carson Valley Dental Arts" />
        </a>
        <div className="navlinks">
          <a href="#care">Care</a>
          <a href="#doctor">Dr. Torres</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="button navbutton" href="tel:+17753923209">Schedule a Visit</a>
      </nav>

      <header className="hero" id="top">
        <img
          className="heroImage"
          src="/images/cvda-office-tour-1920w-2ff4e3aff5.webp"
          alt="The welcoming Carson Valley Dental Arts practice in Gardnerville"
        />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">Family-owned in Gardnerville since 1978</p>
          <h1>Local roots.<br />Modern dentistry.<br /><em>A smile that lasts.</em></h1>
          <p className="heroCopy">
            Thoughtful, comprehensive dental care from a team that knows this valley and takes the time to know you.
          </p>
          <a className="button" href="tel:+17753923209">Schedule a Visit</a>
        </div>
        <div className="heroSeal" aria-label="Serving Carson Valley for over 45 years">
          <strong>45+</strong>
          <span>years serving<br />Carson Valley</span>
        </div>
      </header>

      <div className="proofbar">
        <div><strong>1978</strong><span>Established</span></div>
        <div><strong>100+</strong><span>Education hours each year</span></div>
        <div><strong>5 years</strong><span>US Navy service</span></div>
        <div><strong>Dozens</strong><span>of five-star reviews</span></div>
      </div>

      <section className="care section" id="care">
        <div className="sectionHeading">
          <p className="eyebrow dark">Care for every chapter</p>
          <h2>One trusted team.<br /><em>More ways to smile.</em></h2>
          <p>From preventive visits to a completely renewed smile, treatment is planned around your health, comfort and goals.</p>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.name}>
              <img src={service.image} alt="" />
              <h3>{service.name}</h3>
              <span aria-hidden="true">+</span>
            </article>
          ))}
        </div>
      </section>

      <section className="roots section">
        <div className="rootsPhoto">
          <img
            src="/images/i-9w7d4gb-x3-e9bc2a84cb.jpg"
            alt="Carson Valley Dental Arts office on Main Street Gardnerville"
          />
          <div className="photoNote">Across from the Douglas County Museum</div>
        </div>
        <div className="rootsCopy">
          <p className="eyebrow">Not a chain. Your neighbor.</p>
          <h2>Rooted right here<br /><em>since 1978.</em></h2>
          <p className="lead">
            Carson Valley Dental Arts is family-owned, locally owned and proud to care for generations of Gardnerville families.
          </p>
          <p>
            You will find us in the heart of Main Street, directly across from Carson Valley Middle School and the Douglas County Museum. It is a familiar place with an uncommon commitment to personal care.
          </p>
          <div className="locationLine"><span>1480 US Highway 395 N</span><span>Gardnerville, NV 89410</span></div>
          <a className="button light" href="tel:+17753923209">Schedule a Visit</a>
        </div>
      </section>

      <section className="doctor section" id="doctor">
        <div className="doctorCopy">
          <p className="eyebrow dark">Meet your dentist</p>
          <h2>Advanced training.<br /><em>Down-to-earth care.</em></h2>
          <p className="lead">Dr. Matthew Torres brings disciplined clinical training and a neighborly approach to every appointment.</p>
          <ul>
            <li><strong>UNLV</strong><span>School of Dental Medicine graduate</span></li>
            <li><strong>US Navy</strong><span>Five years active duty, including three overseas</span></li>
            <li><strong>Residency</strong><span>Naval Medical Center Portsmouth</span></li>
            <li><strong>100+ hours</strong><span>Continuing education every year, five times Nevada's requirement</span></li>
          </ul>
          <a className="button" href="tel:+17753923209">Schedule a Visit</a>
        </div>
        <div className="doctorPhoto">
          <div className="since">Dentist<br />since 2014</div>
          <img src="/images/dr-torres-pic2-54667a11f3.jpg" alt="Dr. Matthew Torres" />
          <div className="signature"><strong>Matthew Torres, DMD</strong><span>Owner and dentist</span></div>
        </div>
      </section>

      <section className="results section">
        <div className="resultsIntro">
          <p className="eyebrow">Precision you can see</p>
          <h2>Real care.<br /><em>Real transformations.</em></h2>
          <p>Implant, denture and cosmetic treatment designed to restore comfortable function and natural confidence.</p>
          <div className="techTags"><span>3D imaging</span><span>Digital smile design</span><span>Guided placement</span></div>
        </div>
        <div className="beforeAfter">
          <figure><img src="/images/cosmetic-bef-93e97c596f.jpg" alt="Smile before cosmetic dental treatment" /><figcaption>Before</figcaption></figure>
          <figure><img src="/images/cosmetic-aft-703c23f723.jpg" alt="Smile after cosmetic dental treatment" /><figcaption>After</figcaption></figure>
        </div>
      </section>

      <section className="reviews section" id="reviews">
        <div className="reviewHeader">
          <img src="/images/icon-talk-6d9020e44f.png" alt="" />
          <div><p className="eyebrow dark">In our patients' words</p><h2>Comfort is not a claim.<br /><em>It is the pattern.</em></h2></div>
          <div className="rating"><strong>5.0</strong><span>Named five-star reviews</span></div>
        </div>
        <div className="reviewGrid">
          {reviews.map((review) => (
            <blockquote key={review.name}>
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p>“{review.quote}”</p>
              <footer><strong>{review.name}</strong><span>Verified patient · {review.year}</span></footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="faqImage">
          <img src="/images/comfort-menu-cvda-1920w-980x1268-9525aeee2f.webp" alt="Carson Valley Dental Arts patient comfort menu" />
        </div>
        <div className="faqCopy">
          <p className="eyebrow dark">Good to know</p>
          <h2>Questions,<br /><em>answered clearly.</em></h2>
          <div className="questions">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <img src="/images/dental-implants-pic-9bf8742289.jpg" alt="Patient sharing a confident smile" />
        <div className="finalShade" />
        <div className="finalContent">
          <p className="eyebrow">Your next chapter can start today</p>
          <h2>Come as you are.<br /><em>Leave smiling.</em></h2>
          <p>Personal care, proven experience and a team ready to listen.</p>
          <a className="button light" href="tel:+17753923209">Schedule a Visit</a>
        </div>
      </section>

      <footer className="footer">
        <img src="/images/logo-carson3-45f9d6b6a1.png" alt="Carson Valley Dental Arts" />
        <div><strong>Visit</strong><span>1480 US Highway 395 N<br />Gardnerville, NV 89410</span></div>
        <div><strong>Hours</strong><span>Mon, Tue, Thu: 8am-5pm<br />Friday by appointment</span></div>
        <div><strong>Call</strong><span>(775) 392-3209</span></div>
        <p>(c) 2026 Carson Valley Dental Arts</p>
      </footer>

      <style>{`
        :root { --navy:#142f3f; --deep:#0b232f; --cream:#f4efe5; --paper:#fbfaf6; --copper:#ba6d48; --sky:#9fc8cf; --ink:#132d3a; }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; color:var(--ink); background:var(--paper); font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; text-decoration:none; }
        img { display:block; max-width:100%; }
        .topbar { background:var(--copper); color:white; text-align:center; padding:9px 20px; font-size:12px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; }
        .topbar span { margin-left:22px; color:#fff4dd; }
        nav { height:88px; padding:12px 5vw; display:flex; align-items:center; justify-content:space-between; background:var(--paper); position:relative; z-index:5; }
        .brand img { width:190px; height:62px; object-fit:contain; }
        .navlinks { display:flex; gap:32px; font-size:13px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; }
        .navlinks a:hover { color:var(--copper); }
        .button { display:inline-flex; align-items:center; justify-content:center; min-height:50px; padding:0 26px; background:var(--copper); color:white; border:1px solid var(--copper); font-size:12px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; transition:.2s; }
        .button:hover { background:#9f5635; border-color:#9f5635; transform:translateY(-2px); }
        .button.light { background:var(--cream); border-color:var(--cream); color:var(--deep); }
        .button.light:hover { background:white; border-color:white; }
        .navbutton { min-height:46px; }
        .hero { height:700px; min-height:620px; position:relative; overflow:hidden; color:white; display:flex; align-items:center; }
        .heroImage { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center 48%; }
        .heroShade { position:absolute; inset:0; background:linear-gradient(90deg,rgba(7,28,38,.92) 0%,rgba(7,28,38,.69) 44%,rgba(7,28,38,.08) 76%); }
        .heroContent { position:relative; width:min(650px,82vw); margin-left:8vw; z-index:1; }
        .eyebrow { margin:0 0 20px; font-size:11px; font-weight:800; letter-spacing:.22em; text-transform:uppercase; color:#d9c5a6; }
        .eyebrow:before { content:""; display:inline-block; width:34px; height:1px; margin:0 12px 3px 0; background:currentColor; }
        .eyebrow.dark { color:var(--copper); }
        h1,h2 { margin:0; font-family:Georgia, 'Times New Roman', serif; font-weight:400; line-height:.98; letter-spacing:-.035em; }
        h1 { font-size:clamp(54px,6.2vw,92px); }
        h1 em,h2 em { color:var(--sky); font-weight:400; }
        .heroCopy { max-width:510px; font-family:Georgia,serif; font-size:19px; line-height:1.55; margin:28px 0 34px; color:#edf2f0; }
        .heroSeal { position:absolute; right:6vw; bottom:38px; width:155px; height:155px; border-radius:50%; background:rgba(244,239,229,.95); color:var(--navy); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; transform:rotate(-7deg); box-shadow:0 10px 40px #0b202f55; }
        .heroSeal strong { font-family:Georgia,serif; font-size:44px; line-height:1; color:var(--copper); }
        .heroSeal span { font-size:10px; line-height:1.4; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }
        .proofbar { display:grid; grid-template-columns:repeat(4,1fr); padding:24px 6vw; background:var(--cream); border-bottom:1px solid #d8d0c2; }
        .proofbar div { display:flex; gap:12px; align-items:center; justify-content:center; border-right:1px solid #cfc5b6; }
        .proofbar div:last-child { border:0; }
        .proofbar strong { font-family:Georgia,serif; color:var(--copper); font-size:25px; }
        .proofbar span { max-width:115px; font-size:10px; line-height:1.3; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }
        .section { padding:110px 7vw; }
        .sectionHeading { max-width:1120px; margin:0 auto 55px; display:grid; grid-template-columns:1.2fr .8fr; column-gap:10%; align-items:end; }
        .sectionHeading .eyebrow { grid-column:1/-1; }
        h2 { font-size:clamp(43px,5vw,72px); }
        .sectionHeading p:last-child,.lead { font-family:Georgia,serif; font-size:18px; line-height:1.6; color:#46606a; }
        .serviceGrid { max-width:1120px; margin:auto; display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid #d7d3ca; border-left:1px solid #d7d3ca; }
        .serviceCard { min-height:175px; padding:32px; position:relative; border-right:1px solid #d7d3ca; border-bottom:1px solid #d7d3ca; background:white; transition:.2s; }
        .serviceCard:hover { background:var(--cream); transform:translateY(-4px); box-shadow:0 12px 30px #18374812; }
        .serviceCard img { height:52px; width:52px; object-fit:contain; margin-bottom:25px; }
        .serviceCard h3 { margin:0; font-family:Georgia,serif; font-size:20px; font-weight:400; }
        .serviceCard span { position:absolute; right:25px; bottom:24px; color:var(--copper); font-size:21px; }
        .roots { padding:0; display:grid; grid-template-columns:1.08fr .92fr; background:var(--navy); color:white; }
        .rootsPhoto { min-height:690px; position:relative; }
        .rootsPhoto img { width:100%; height:100%; object-fit:cover; }
        .photoNote { position:absolute; left:0; bottom:0; padding:16px 25px; background:var(--cream); color:var(--navy); font-size:10px; font-weight:800; letter-spacing:.09em; text-transform:uppercase; }
        .rootsCopy { padding:90px 8vw 90px 7vw; align-self:center; }
        .rootsCopy .lead { color:#dae6e4; margin:32px 0 18px; }
        .rootsCopy>p:not(.eyebrow):not(.lead) { color:#afc0c4; font-size:14px; line-height:1.75; }
        .locationLine { margin:30px 0; padding:20px 0; display:flex; flex-direction:column; gap:6px; border-top:1px solid #ffffff2e; border-bottom:1px solid #ffffff2e; font-size:12px; font-weight:800; letter-spacing:.07em; text-transform:uppercase; }
        .doctor { display:grid; grid-template-columns:1fr .88fr; gap:8vw; max-width:1320px; margin:auto; align-items:center; }
        .doctorCopy .lead { margin:28px 0; max-width:560px; }
        .doctorCopy ul { list-style:none; padding:0; margin:0 0 32px; border-top:1px solid #d7d3ca; }
        .doctorCopy li { display:grid; grid-template-columns:125px 1fr; gap:20px; padding:15px 0; border-bottom:1px solid #d7d3ca; font-size:13px; line-height:1.4; }
        .doctorCopy li strong { color:var(--copper); text-transform:uppercase; font-size:11px; letter-spacing:.08em; }
        .doctorPhoto { position:relative; padding:25px 25px 0 0; }
        .doctorPhoto:before { content:""; position:absolute; inset:0 0 18% 18%; background:var(--sky); }
        .doctorPhoto img { position:relative; width:100%; min-height:510px; object-fit:cover; }
        .signature { position:relative; margin:-1px 0 0 15%; background:var(--navy); color:white; padding:22px 28px; display:flex; flex-direction:column; }
        .signature strong { font-family:Georgia,serif; font-size:20px; font-weight:400; }
        .signature span { margin-top:5px; font-size:10px; text-transform:uppercase; letter-spacing:.1em; color:#b6cbce; }
        .since { position:absolute; z-index:2; top:0; right:-15px; width:112px; height:112px; border-radius:50%; background:var(--copper); color:white; display:flex; align-items:center; justify-content:center; text-align:center; font-family:Georgia,serif; transform:rotate(7deg); }
        .results { background:var(--deep); color:white; display:grid; grid-template-columns:.72fr 1.28fr; gap:7vw; align-items:center; }
        .resultsIntro p:not(.eyebrow) { line-height:1.7; color:#b3c5c8; }
        .techTags { display:flex; flex-wrap:wrap; gap:7px; margin-top:25px; }
        .techTags span { border:1px solid #ffffff33; padding:8px 11px; font-size:9px; font-weight:800; letter-spacing:.09em; text-transform:uppercase; }
        .beforeAfter { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
        .beforeAfter figure { margin:0; position:relative; overflow:hidden; }
        .beforeAfter img { width:100%; height:380px; object-fit:cover; }
        .beforeAfter figcaption { position:absolute; left:12px; bottom:12px; background:var(--paper); color:var(--deep); padding:8px 13px; font-size:9px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; }
        .reviews { background:var(--cream); }
        .reviewHeader { max-width:1120px; margin:0 auto 50px; display:grid; grid-template-columns:70px 1fr auto; gap:25px; align-items:end; }
        .reviewHeader>img { width:55px; align-self:start; }
        .rating { text-align:right; border-left:1px solid #cfc5b6; padding-left:35px; display:flex; flex-direction:column; }
        .rating strong { font-family:Georgia,serif; color:var(--copper); font-size:52px; font-weight:400; }
        .rating span { font-size:9px; font-weight:800; text-transform:uppercase; letter-spacing:.08em; }
        .reviewGrid { max-width:1120px; margin:auto; display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
        blockquote { margin:0; padding:34px; background:var(--paper); min-height:320px; display:flex; flex-direction:column; }
        blockquote .stars { color:var(--copper); letter-spacing:4px; font-size:12px; }
        blockquote>p { font-family:Georgia,serif; font-size:19px; line-height:1.55; flex:1; }
        blockquote footer { padding-top:18px; border-top:1px solid #ded8cb; display:flex; flex-direction:column; gap:4px; }
        blockquote footer strong { font-size:12px; text-transform:uppercase; letter-spacing:.08em; }
        blockquote footer span { font-size:10px; color:#738188; }
        .faq { max-width:1260px; margin:auto; display:grid; grid-template-columns:.8fr 1.2fr; gap:8vw; align-items:center; }
        .faqImage { background:var(--sky); padding:20px 20px 20px 0; }
        .faqImage img { width:100%; max-height:680px; object-fit:cover; object-position:top; }
        .questions { margin-top:35px; border-top:1px solid #d6d2c9; }
        details { border-bottom:1px solid #d6d2c9; }
        summary { list-style:none; cursor:pointer; padding:22px 0; font-family:Georgia,serif; font-size:18px; display:flex; justify-content:space-between; gap:20px; }
        summary::-webkit-details-marker { display:none; }
        summary span { color:var(--copper); font-family:Arial,sans-serif; }
        details[open] summary span { transform:rotate(45deg); }
        details p { margin:-5px 45px 22px 0; color:#5f747d; font-size:14px; line-height:1.65; }
        .finalCta { min-height:520px; position:relative; display:flex; align-items:center; justify-content:center; text-align:center; color:white; overflow:hidden; }
        .finalCta>img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; }
        .finalShade { position:absolute; inset:0; background:rgba(8,33,44,.78); }
        .finalContent { position:relative; padding:80px 20px; }
        .finalContent p:not(.eyebrow) { font-family:Georgia,serif; font-size:18px; margin:25px 0 30px; }
        .footer { padding:55px 6vw 25px; background:#081d27; color:#c0d0d2; display:grid; grid-template-columns:1.5fr 1fr 1fr .7fr; gap:35px; align-items:start; font-size:12px; line-height:1.7; }
        .footer>img { width:200px; padding:8px; background:var(--paper); }
        .footer div { display:flex; flex-direction:column; }
        .footer strong { color:var(--copper); text-transform:uppercase; letter-spacing:.12em; font-size:10px; margin-bottom:7px; }
        .footer>p { grid-column:1/-1; border-top:1px solid #ffffff1e; padding-top:22px; margin:20px 0 0; color:#6f858c; font-size:10px; }
        @media (max-width: 900px) {
          nav { height:76px; padding:8px 20px; }
          .brand img { width:145px; height:52px; }
          .navlinks { display:none; }
          .navbutton { padding:0 15px; min-height:42px; font-size:10px; }
          .hero { height:650px; }
          .heroContent { margin-left:7vw; }
          .heroSeal { width:115px; height:115px; right:20px; bottom:20px; }
          .heroSeal strong { font-size:34px; }
          .proofbar { grid-template-columns:1fr 1fr; gap:20px 0; }
          .proofbar div:nth-child(2) { border-right:0; }
          .section { padding:80px 6vw; }
          .roots { grid-template-columns:1fr; }
          .rootsPhoto { min-height:480px; }
          .doctor { grid-template-columns:1fr; }
          .results { grid-template-columns:1fr; }
          .reviewHeader { grid-template-columns:55px 1fr; }
          .rating { grid-column:2; text-align:left; border:0; padding:0; }
          .reviewGrid { grid-template-columns:1fr; }
          blockquote { min-height:auto; }
          .faq { grid-template-columns:1fr; }
          .faqImage { max-height:470px; overflow:hidden; }
          .footer { grid-template-columns:1fr 1fr; }
        }
        @media (max-width: 600px) {
          .topbar span { display:none; }
          h1 { font-size:48px; }
          h2 { font-size:42px; }
          .hero { height:620px; align-items:flex-start; padding-top:90px; }
          .heroShade { background:linear-gradient(90deg,rgba(7,28,38,.9),rgba(7,28,38,.48)); }
          .heroContent { width:86vw; }
          .heroCopy { font-size:16px; max-width:80%; }
          .heroSeal { width:100px; height:100px; }
          .heroSeal strong { font-size:29px; }
          .heroSeal span { font-size:8px; }
          .proofbar { padding:22px 12px; }
          .proofbar strong { font-size:20px; }
          .proofbar span { font-size:8px; }
          .sectionHeading { display:block; }
          .sectionHeading h2 { margin-bottom:25px; }
          .serviceGrid { grid-template-columns:1fr 1fr; }
          .serviceCard { min-height:155px; padding:22px 18px; }
          .serviceCard h3 { font-size:17px; }
          .rootsPhoto { min-height:350px; }
          .rootsCopy { padding:70px 7vw; }
          .doctorPhoto img { min-height:390px; }
          .doctorCopy li { grid-template-columns:100px 1fr; }
          .beforeAfter { gap:5px; }
          .beforeAfter img { height:220px; }
          .reviewHeader { display:block; }
          .reviewHeader>img { margin-bottom:20px; }
          .rating { margin-top:25px; }
          .rating strong { font-size:38px; }
          .faqImage { max-height:370px; }
          .finalCta { min-height:500px; }
          .footer { grid-template-columns:1fr; }
          .footer>p { grid-column:1; }
        }
      `}</style>
    </main>
  );
}

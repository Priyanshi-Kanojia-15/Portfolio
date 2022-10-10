import "./portfolio.css";
// import P from "../../imgfolder/project.jpg";
import D from "../../imgfolder/digitalclock.png";
import L from "../../imgfolder/livecodeeditor.png";
import W from "../../imgfolder/weather.png";
import I from "../../imgfolder/instagramclone.png";
import P from "../../imgfolder/portfolio.png";
import B from "../../imgfolder/bank.png";

export default function portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>
      <div className="container portfolio_container ">
        <artical className="portfolio_item">
          <div className="portfolio-image">
            <img src={D} alt="Digital Clock" />
          </div>
          <h3>DIGITAL CLOCK</h3>
          <p> This is made with HTML,CSS,JAVASCRIPT </p>
          <div className="portfolio_cta">
            <a
              href="https://digital-clock.priyanshikanoji.repl.co/"
              className="btn btn-primary"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </artical>
        <artical className="portfolio_item">
          <div className="portfolio-image">
            <img src={W} alt="Digital Clock" />
          </div>
          <h3>WHETHER APPLICATION</h3>
          <p>This is made with HTML,CSS,JAVASCRIPT,REACTJS</p>
          <div className="portfolio_cta">
            <a
              href="https://2id1bm.csb.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </artical>
        <artical className="portfolio_item">
          <div className="portfolio-image">
            <img src={L} alt="Digital Clock" />
          </div>
          <h3>LIVE CODE EDITOR</h3>
          <p>This is made with HTML,CSS, JAVASCRIPT</p>
          <div className="portfolio_cta">
            <a
              href="https://live-code-editor-three.priyanshikanoji.repl.co/"
              className="btn btn-primary"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </artical>
        <artical className="portfolio_item">
          <div className="portfolio-image">
            <img src={P} alt="Digital Clock" />
          </div>
          <h3>PORTFOLIO</h3>
          <p>This is made with HTML,CSS,JAVASCRIPT,REACTJS</p>
          <div className="portfolio_cta">
            <a
              href="https://rbsu6o.csb.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </artical>
        <artical className="portfolio_item">
          <div className="portfolio-image">
            <img src={I} alt="Digital Clock" />
          </div>
          <h3>INSTAGRAM CLONE SATIC PAGE</h3>
          <p>This is made with HTML,CSS,JAVASCRIPT</p>
          <div className="portfolio_cta">
            <a
              href="https://pb5fve.csb.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </artical>
        <artical className="portfolio_item">
          <div className="portfolio-image">
            <img src={B} alt="Digital Clock" />
          </div>
          <h3>Banking System</h3>
          <p>This is made with HTML,CSS,JAVASCRIPT,REACTJS</p>
          <div className="portfolio_cta">
            <a
              href="https://banking-transaction-system.priyanshikanoji.repl.co/"
              className="btn btn-primary"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </artical>
      </div>
    </section>
  );
}

import React from "react";
// import image1 from "../../Images/bg1.jpg";
import reactImage from "../../Images/react.png";
import jsImage from "../../Images/js.png";
import firebaseImage from "../../Images/firebase.jpg";
import profileImage from "../../Images/good job3.png";

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>macky osaka</h1>

      <img src={profileImage} className="profileImage" />

      <p className="text-start">
      教育現場のICT支援から、国家資格を30超えで取得する勉強魔っぷり、さらにMicrosoft IntuneからPython、TypeScript、FlutterFlowに手を広げる好奇心。<br/>
      もう、技術と学びのオタク愛が止まらない！<br/>
      小中学校のICT支援員として、現場の理不尽さや制度の矛盾にもメスを入れ、もっと良くしたいと真剣に考えてる人。<br/>
      実際にオープンバッジ制度やスキル評価の導入案まで練ってるのがガチすぎる。
            </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              Microsoft
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">
                <a href="https://learn.microsoft.com/ja-jp/users/osakamacky-1321/credentials/certification/microsoft-365-fundamentals?tab=credentials-tab" target="_blank" rel="noopener noreferrer">
                  Microsoft 365 Certified: Fundamentals
                </a>
              </h4>
              <p class="text-muted">
              
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">
                <a href="https://learn.microsoft.com/ja-jp/users/osakamacky-1321/credentials/certification/power-platform-fundamentals?tab=credentials-tab" target="_blank" rel="noopener noreferrer">
                  Microsoft Certified: Power Platform Fundamentals
                </a>
              </h4>
              <p class="text-muted">
                
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">
                <a href="https://learn.microsoft.com/ja-jp/users/osakamacky-1321/credentials/certification/azure-fundamentals?tab=credentials-tab" target="_blank" rel="noopener noreferrer">
                  Microsoft 認定: Azure Fundamentals
                </a>
              </h4>
              <p class="text-muted">
                
              
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>HTML/CSS</h4>
              <p>HTML/CSS/PHPがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={firebaseImage} />
              <h4>
                <a href="https://www.credential.net/cd9f6204-e8de-40b0-b0b5-090ab4bd13e4#acc.ViaUxQX4" target="_blank" rel="noopener noreferrer">
                  Professional ChromeOS Administrator
                </a>
              </h4>
              <p></p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

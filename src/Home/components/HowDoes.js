import React from "react";
import howuse from "../assets/img/bg-03.png";
import styles from "../home.module.css";

const HowDoes = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-xs-12">
          <img
            src={howuse}
            alt="How Does Prizm Work"
            className={styles.banner}
          />
        </div>
        <div className="col-lg-6 col-sm-12 col-xs-12 my-5 text-start">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-1">
                <i class="bi bi-magic"></i>
              </div>
              <div className="col-11">
                <span className={styles.prospects}>FEATURE</span>
              </div>
            </div>
          </div>
          <h1 className={styles.HowDoes}>How does PrizmX works?</h1>
          <div className="row">
            <p className={styles.featurebody}>
              PRIZM uses a system where each "coin" in a wallet's balance can be
              treated as miniature mining farm.
            </p>
            <p className={styles.featurebody}>
              Having replenished the balance of the wallet with just 1 PRIZMX
              coin, you will start paramining- an automatic process of
              generating new coins..
            </p>
          </div>
          <div className="row">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    PrizmXchange #1
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    We at PRIZMXCHANGE understand the technology and it's
                    potential hence we have developed exlusive market place
                    based on PRIZMX CRYPTO COIN.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Exchange Price of PrizmX #2
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Our philosophy of Decentralized Crypto means a real value of
                    asset decided by it's real owner who hold them and sell them
                    at price he wants to sell at and not dependent on fake
                    Market Maker Liquidity based order books on centralized
                    exchange or FAKE STABLE COIN based DeX exchanges.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Real Value For Real Asset #3
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    At PRIZMXCHANGE all holders of PRIZMX Coins bought from
                    PRIZMXCHANGE shall become bonafied owners of their own real
                    crypto asset PRIZM and they will have power of deciding at
                    what price they want to sell their asset like any other
                    tengible asset class i.e Property, Car, Daimond etc.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Paramining with Exchange Wallet #4
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    We identified that even though PRIZM is having extremly rear
                    feature of SELF PARAMINING without having to INVEST in
                    HARDWARE, ELECTRICITY, MANPOWER, or STAKE huge amount of
                    PRIZMX for generating new coins then to VALUE of coin is so
                    low due to exccess supply on centralized exchanges avilable
                    through stable coins which is biggest threat to
                    decentralized nature of crypto currency. Hence we decided to
                    provide PARAMINING a main feature of PRIZM Coin in our P2P
                    Exchange wereby supply & price can remain 100% Decentralized
                    through REAL DEMAND & SUPPLY logic.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    P2P Trtading #5
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Peer to Peer Trading based order book matching only when
                    Buyer & Seller price is Matched without any manupulating
                    Auto Market Maker Script, shall make sure that price of
                    PRIZMX remains in people's control who hold them and own
                    them.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoes;

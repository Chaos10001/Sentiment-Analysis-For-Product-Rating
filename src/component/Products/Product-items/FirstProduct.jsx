import { useState, useEffect } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import NewsLetter from "../Newsletter/NewsLetter";
import Footer from "../../Footer/Footer";
import Sentiment from "sentiment";
const sentiment = new Sentiment();

const FirstProduct = () => {
  const positiveGIF =
    "https://media.tenor.com/YcHBvIIpTnsAAAAi/hug-telagram-emoji.gif";
  const neutralGIF =
    "https://media.tenor.com/90MbGmzOAYEAAAAi/neutral-face-people.gif";
  const negativeGIF = "https://media.tenor.com/uiGdXpO3wosAAAAj/sad-gif.gif";

  const [phrase, setPhrase] = useState("");
  const [sentimentScore, setSentimentScore] = useState(null);

  useEffect(() => {
    setSentimentScore(sentiment.analyze(phrase));
  }, [phrase]);

  return (
    <>
      <div class="container-lg">
        <div class="row my-5 align-item-center justify-content-center g-4">
          <div class="col-8 col-lg-4">
            <div class="card border-0">
              <img src="./Luios-V.png" className="rounded hero-img" alt="" />
              <div class="card-body text-center py-4">
                <input
                  value={phrase}
                  onChange={(e) => setPhrase(e.target.value)}
                  style={{ padding: "20px", fontSize: "20px", width: "90%" }}
                  placeholder="Rate the product..."
                />

                {sentimentScore ? (
                  sentimentScore.score === 0 ? (
                    <img src={neutralGIF} alt="neutral" className="w-50" />
                  ) : sentimentScore.score > 0 ? (
                    <img src={positiveGIF} alt="postive" />
                  ) : (
                    <img src={negativeGIF} alt="negative" />
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="float-start mb-4 ms-2">
                <Link to="/feedback" class="btn btn-primary btn-lg">
                  Send FeedBack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default FirstProduct;

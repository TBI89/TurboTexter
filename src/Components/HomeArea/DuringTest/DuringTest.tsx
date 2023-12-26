import { useEffect, useState } from "react";
import "./DuringTest.css";
import QuoteModel from "../../../Models/QuoteModel";
import quoteService from "../../../Services/QuoteService";
import notifyService from "../../../Services/NotifyService";

function DuringTest(): JSX.Element {

    const [quote, setQuote] = useState<QuoteModel>();

    useEffect(() => {
        quoteService.getRandomQuote()
            .then(quote => setQuote(quote))
            .catch(err => notifyService.error(err))
    }, []);

    return (
        <div className="DuringTest">

            <div className="UserStats">

                <div className="Timer">
                    Seconds: 0
                </div>

                <div className="CharsPerMin">
                    CPM
                </div>

                <div className="WordsPerMin">
                    WPM
                </div>

                <div className="Accuracy">
                    Accuracy
                </div>

            </div>
            <br />

            <div className="UserInput">

                <textarea value={quote?.content}>
            </textarea>

        </div>

        </div >
    );
}

export default DuringTest;

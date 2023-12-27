import { useEffect, useState } from "react";
import "./DuringTest.css";
import QuoteModel from "../../../Models/QuoteModel";
import quoteService from "../../../Services/QuoteService";
import notifyService from "../../../Services/NotifyService";

function DuringTest(): JSX.Element {

    const [quote, setQuote] = useState<QuoteModel>();
    const [testTimer, setTestTimer] = useState(null);
    const [charsPerMin, setCharsPerMin] = useState(null);
    const [wordsPerMin, setWordsPerMin] = useState(null);
    const [accuracy, setAccuracy] = useState(null);

    useEffect(() => {
        quoteService.getRandomQuote()
            .then(quote => setQuote(quote))
            .catch(err => notifyService.error(err))
    }, []);

    return (
        <div className="DuringTest">

            <div className="UserStats">

                <div className="Timer">
                    Seconds<br />
                    <span className="TimerValue">{testTimer}</span>
                </div>

                <div className="CharsPerMin">
                    CPM<br />
                    <span className="CharsValue">{charsPerMin}</span>
                </div>

                <div className="WordsPerMin">
                    WPM<br />
                    <span className="WordsValue">{wordsPerMin}</span>
                </div>

                <div className="Accuracy">
                    Accuracy<br />
                    <span className="AccuracyValue">{accuracy}</span>
                </div>

            </div>
            <br />

            <div className="UserInput">
                <span>{quote?.content}</span>
            </div>

        </div >
    );
}

export default DuringTest;

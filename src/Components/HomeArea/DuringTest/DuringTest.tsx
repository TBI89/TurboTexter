import { useEffect, useState } from "react";
import "./DuringTest.css";
import QuoteModel from "../../../Models/QuoteModel";
import quoteService from "../../../Services/QuoteService";
import notifyService from "../../../Services/NotifyService";

function DuringTest({ selectedTestDuration }: { selectedTestDuration: number | null }): JSX.Element {

    const [quote, setQuote] = useState<QuoteModel>();
    const [testTimer, setTestTimer] = useState(null);
    const [charsPerMin, setCharsPerMin] = useState(null);
    const [wordsPerMin, setWordsPerMin] = useState(null);
    const [accuracy, setAccuracy] = useState(null);
    const [userInput, setUserInput] = useState<string>("");

    useEffect(() => {
        quoteService.getRandomQuote()
            .then(quote => setQuote(quote))
            .catch(err => notifyService.error(err))

        setTestTimer(selectedTestDuration);

        let timerInterval: NodeJS.Timeout;
        if (selectedTestDuration !== null && selectedTestDuration > 0) {
            timerInterval = setInterval(() => {
                setTestTimer((prevTimer: number) => (prevTimer !== null && prevTimer > 0 ? prevTimer - 1 : 0))
            }, 1000);
            return () => clearInterval(timerInterval);
        }
    }, [selectedTestDuration]);

    function handleUserInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value);
    }

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
                <div>{quote?.content}</div>
                <br />
                <input
                    type="text"
                    value={userInput}
                    onChange={handleUserInputChange}
                />
            </div>

        </div >
    );
}

export default DuringTest;

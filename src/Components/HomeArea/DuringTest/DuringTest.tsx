import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuoteModel from "../../../Models/QuoteModel";
import notifyService from "../../../Services/NotifyService";
import quoteService from "../../../Services/QuoteService";
import "./DuringTest.css";

function DuringTest({ selectedTestDuration, selectedDifficultyLevel }:
    { selectedTestDuration: number | null, selectedDifficultyLevel: number | null }): JSX.Element {

    const [quote, setQuote] = useState<QuoteModel>();
    const [testTimer, setTestTimer] = useState(null);
    const [charsPerMin, setCharsPerMin] = useState(0);
    const [wordsPerMin, setWordsPerMin] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [userInput, setUserInput] = useState<string>("");
    const [correctlyTypedChars, setCorrectlyTypedChars] = useState<string>("");
    const navigate = useNavigate();

    interface DifficultyLevelMap {
        [key: number]: number;
    }

    const difficultyLevelMap: DifficultyLevelMap = {
        1: 100,
        2: 200,
        3: 300,
        4: 400
    }

    let quoteMinLength = difficultyLevelMap[selectedDifficultyLevel || 0];

    function fetchNewQuote() {
        quoteService.getRandomQuote(quoteMinLength)
            .then(quote => setQuote(quote))
            .catch(err => notifyService.error(err))
    }

    useEffect(() => {
        fetchNewQuote();

        setTestTimer(selectedTestDuration);

        let timerInterval: NodeJS.Timeout;
        if (selectedTestDuration !== null && selectedTestDuration > 0) {
            timerInterval = setInterval(() => {
                setTestTimer((prevTimer: number) => (prevTimer !== null && prevTimer > 0 ? prevTimer - 1 : 0));
            }, 1000);
            return () => {
                clearInterval(timerInterval);
            };
        }
    }, [selectedTestDuration, selectedDifficultyLevel]);

    useEffect(() => {
        if (testTimer === 0) {
            navigate("/dialog", { state: { charsPerMin, wordsPerMin, accuracy } });
        }
    }, [testTimer, navigate, charsPerMin, wordsPerMin, accuracy]);

    function handleUserInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const userInputValue = event.target.value;
        setUserInput(userInputValue);

        const charCount = userInputValue.length;
        setCharsPerMin(charCount);

        const wordCount = userInputValue.split(/\s+/).filter(word => word !== "").length;
        setWordsPerMin(wordCount);

        calculateAccuracy(userInputValue);

        setCorrectlyTypedChars(userInputValue.slice(0, charsPerMin));
    }

    function calculateAccuracy(userInputValue: string) {
        if (quote?.content) {

            const quoteChars = quote.content.replace(/\s/g, '');
            const userChars = userInputValue.replace(/\s/g, '');

            let correctChars = 0;
            for (let i = 0; i < Math.min(quoteChars.length, userChars.length); i++) {
                if (quoteChars[i] === userChars[i]) {
                    correctChars++;
                }
            }

            const accuracyPercentage = (correctChars / quoteChars.length) * 100;
            setAccuracy(accuracyPercentage);

            if (accuracyPercentage === 100) {
                fetchNewQuote();
            }

        } else {
            setAccuracy(null);
        }
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
                    <span className="AccuracyValue">{accuracy !== null ? accuracy.toFixed(1) + '%' : ''}</span>
                </div>

            </div>
            <br />

            <div className="UserInput">
                <div>
                    {quote?.content?.split("").map((char, index) => (
                        <span
                            key={index}
                            className={
                                correctlyTypedChars[index] === char ? "correct" : "incorrect"}
                        >
                            {char}
                        </span>
                    ))}
                </div>
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

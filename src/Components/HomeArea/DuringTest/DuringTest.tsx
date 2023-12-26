import "./DuringTest.css";

function DuringTest(): JSX.Element {
    return (
        <div className="DuringTest">

            <div className="UserStats">

                <div className="Timer">
                    Timer
                </div>

                <div className="CharsPerMin">
                    CharsPerMin
                </div>

                <div className="WordsPerMin">
                    WordsPerMin
                </div>

                <div className="Accuracy">
                    Accuracy
                </div>

            </div>
            <br />

            <div className="UserInput">

                <textarea placeholder="Here You Type Your Input">

                </textarea>

            </div>

        </div>
    );
}

export default DuringTest;

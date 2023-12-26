import DuringTest from "../DuringTest/DuringTest";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">

            <div className="PreTestSection">

                <form>

                    <select className="form-select">
                        <option value={1}>Test Duration</option>
                        <option value={2}>30 Seconds</option>
                        <option value={3}>60 Seconds</option>
                        <option value={4}>90 Seconds</option>
                        <option value={5}>120 Seconds</option>
                    </select>
                    <br />

                    <select className="form-select">
                        <option value={1} >Difficulty Level</option>
                        <option value={2} >Easy</option>
                        <option value={3}>Medium</option>
                        <option value={4}>Hard</option>
                        <option value={5}>Pro</option>
                    </select>
                    <br />

                    <button className="btn btn-success">Begin Test!</button>

                </form>

            </div>

            <div className="DuringTestSection">
                <DuringTest />
            </div>

        </div>
    );
}

export default Home;

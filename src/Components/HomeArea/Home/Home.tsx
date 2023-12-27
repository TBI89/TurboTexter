import { useForm } from 'react-hook-form';
import timerService from '../../../Services/TimerService';
import DuringTest from '../DuringTest/DuringTest';
import './Home.css';

interface FormData {
    timerDuration: number;
}

function Home(): JSX.Element {
    const { handleSubmit, setValue } = useForm<FormData>();

    function submit(data: FormData) {
        timerService.setTestTimer(data.timerDuration);
    }

    return (
        <div className="Home">
            <div className="PreTestSection">
                <form onSubmit={handleSubmit(submit)}>
                    <select
                        className="form-select"
                        name="timerDuration"
                        onChange={e => setValue('timerDuration', parseInt(e.target.value, 10))}
                    >
                        <option value={0}>Test Duration</option>
                        <option value={30}>30 Seconds</option>
                        <option value={60}>60 Seconds</option>
                        <option value={90}>90 Seconds</option>
                        <option value={120}>120 Seconds</option>
                    </select>
                    <br />

                    <select className="form-select" name="difficultyLevel">
                        <option value={1}>Difficulty Level</option>
                        <option value={2}>Easy</option>
                        <option value={3}>Medium</option>
                        <option value={4}>Hard</option>
                        <option value={5}>Pro</option>
                    </select>
                    <br />

                    <button type="submit" className="btn btn-success">
                        Begin Test!
                    </button>
                </form>
            </div>

            <div className="DuringTestSection">
                <DuringTest />
            </div>
        </div>
    );
}

export default Home;

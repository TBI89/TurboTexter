import { useState } from 'react';
import { useForm } from 'react-hook-form';
import timerService from '../../../Services/TimerService';
import DuringTest from '../DuringTest/DuringTest';
import './Home.css';
import TestModel from '../../../Models/TestModel';
import ErrorIcon from '@mui/icons-material/Error';

function Home(): JSX.Element {
    const { handleSubmit, setValue, register, formState: { errors } } = useForm<TestModel>();
    const [selectedTestDuration, setSelectedTestDuration] = useState<number>(null);

    function submit(data: TestModel) {
        timerService.setTestTimer(data.timerDuration);
        setSelectedTestDuration(data.timerDuration);
        console.log("Submitted");
    }

    return (
        <div className="Home">
            <div className="PreTestSection">
                <form onSubmit={handleSubmit(submit)}>
                    <select
                        className={`form-select ${errors.timerDuration ? 'ErrorBorder' : ''}`}
                        {...register("timerDuration", TestModel.timerDurationValidation)}
                        name="timerDuration"
                        onChange={e => setValue('timerDuration', parseInt(e.target.value, 10))}
                    >
                        <option value={""}>Test Duration</option>
                        <option value={30}>30 Seconds</option>
                        <option value={60}>60 Seconds</option>
                        <option value={90}>90 Seconds</option>
                        <option value={120}>120 Seconds</option>
                    </select>
                    <span className='FormValidationError'>{errors.timerDuration?.message && <ErrorIcon />}
                        {errors.timerDuration?.message}
                    </span>
                    <br />

                    <select
                        className={`form-select ${errors.difficultyLevel ? 'ErrorBorder' : ''}`}
                        {...register("difficultyLevel", TestModel.difficultyLevelValidation)}
                        name="difficultyLevel"

                    >
                        <option value={""}>Difficulty Level</option>
                        <option value={1}>Easy</option>
                        <option value={2}>Medium</option>
                        <option value={3}>Hard</option>
                        <option value={4}>Pro</option>
                    </select>
                    <span className='FormValidationError'>{errors.difficultyLevel?.message && <ErrorIcon />}
                        {errors.difficultyLevel?.message}
                    </span>
                    <br />

                    <button type="submit" className="btn btn-success">
                        Begin Test!
                    </button>
                </form>
            </div>

            <div className="DuringTestSection">
                <DuringTest selectedTestDuration={selectedTestDuration} />
            </div>
        </div>
    );
}

export default Home;

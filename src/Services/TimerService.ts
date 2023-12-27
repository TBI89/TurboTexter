class TimerService {
    setTestTimer(duration: number): Promise<void> {
        return new Promise(resolve => {
            console.log(`Setting ${duration} sec timer`);
            setTimeout(() => {
                console.log(`${duration} sec timer completed`);
                resolve();
            }, duration * 1000);
        });
    }
}

const timerService = new TimerService();
export default timerService;

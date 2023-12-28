class TimerService {
    setTestTimer(duration: number): Promise<void> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, duration * 1000);
        });
    }
}

const timerService = new TimerService();
export default timerService;

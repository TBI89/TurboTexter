import ResultModel from "../Models/ResultModel";

class ResultService {
    getResultInfo(charsPerMin: number, wordsPerMin: number, accuracy: number): ResultModel {
        let title: string;
        let titleImage: number | null = null;
        let feedback: string;

        switch (true) {
            case charsPerMin > 60 && wordsPerMin > 30 && accuracy > 90:
                title = "You Are The Flash!";
                titleImage = 1;
                feedback = "Your Flash feedback goes here.";
                break;

            case charsPerMin >= 30 && charsPerMin <= 60 && wordsPerMin >= 20 && wordsPerMin <= 30 && accuracy >= 60 && accuracy <= 90:
                title = "You Are Spiderman!";
                titleImage = 2;
                feedback = "Your Spiderman feedback goes here.";
                break;

            case charsPerMin < 30 && wordsPerMin < 20 && accuracy < 60:
                title = "You Are The Hulk!";
                titleImage = 3;
                feedback = "Your Hulk feedback goes here.";
                break;

            default:
                title = "Test Completed!";
                feedback = "Your default feedback goes here.";
        }

        return new ResultModel();
    }
}

const resultService = new ResultService();
export default resultService;

class TestModel {

    timerDuration: number;
    difficultyLevel: number;

    public static timerDurationValidation = {
        required: { value: true, message: "Please select the test's duration." }
    }
    public static difficultyLevelValidation = {
        required: { value: true, message: "Please select the test's difficulty level." }
    }
}

export default TestModel;
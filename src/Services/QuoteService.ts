import axios from "axios";
import QuoteModel from "../Models/QuoteModel";
import appConfig from "../Utils/AppConfig";

class QuoteService {

    public async getRandomQuote(length: number = 0): Promise<QuoteModel> {
        const url = appConfig.getRandomQuote(length);
        const response = await axios.get(url);
        const quote = response.data;
        return quote;
    }
}

const quoteService = new QuoteService(); // Singleton design pattern.
export default quoteService;
import axios from "axios";
import QuoteModel from "../Models/QuoteModel";
import appConfig from "../Utils/AppConfig";

class QuoteService {

    public async getRandomQuote(): Promise<QuoteModel> {
        const url = appConfig.randomQuoteUrl;
        const response = await axios.get(url);
        const quote = response.data;
        return quote;
    }
}

const quoteService = new QuoteService; // Singleton design pattern.
export default quoteService;
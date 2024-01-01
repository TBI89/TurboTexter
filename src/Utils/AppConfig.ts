class AppConfig {
    public baseUrl = "https://api.quotable.io/";
    
    public getRandomQuote(length: number): string {
        return `${this.baseUrl}random?minLength=${length}`;
    }
}

const appConfig = new AppConfig(); // Singleton
export default appConfig;
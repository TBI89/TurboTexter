class AppConfig {
    public randomQuoteUrl = "https://api.quotable.io/random";
}

const appConfig = new AppConfig; // Singleton
export default appConfig;
export const normalizeWeatherInfo = (weatherInfo) => {
    return {
        ...weatherInfo,
        dateReceipt: new Date().toISOString(),
    };
};

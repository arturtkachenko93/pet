/* Возвращает переменные по приоритету - process.env > defaultConfig */
import { TDefaultConfig } from './default';

const getProperty = (config: TDefaultConfig) =>
    (propName: keyof TDefaultConfig) => process.env[propName] ?? config[propName];

/**
 * @description Создает смерженный объект конфига из стандартного конфига и environment переменных
 *
 * @param {Object} config - Стандартный конфиг
 *
 * @returns {Object} Смерженный конфиг
 * */
export const getConfig = (config: TDefaultConfig) => {
    const configKeys = Object.keys(config);

    /* Передаем в замыкание стандартный конфиг */
    const getPropertyWithDefaultConfig = getProperty(config);

    /* Создаем массив значений конфига */
    const finalValues = configKeys.map(getPropertyWithDefaultConfig);

    /* Собираем объект конфига */
    return configKeys.reduce((result, value, index) =>
        ({ ...result, [value]: finalValues[index] }), {} as TDefaultConfig);
};

import { useEffect, useState } from 'react';

export type TUseSizesResult = [string | null, string | null];

/**
 * Получение размеров элемента (ширина и высота)
 * @param options.node - название текущего AB-теста
 */
export const useSizes = (node: string): TUseSizesResult => {
    const [sizes, setSizes] = useState<[string, string]>([null, null]);

    useEffect(() => {
        const elementWidth = document.querySelector(node)?.clientWidth?.toString();
        const elementHeight = document.querySelector(node)?.clientHeight?.toString();

        setSizes([elementWidth, elementHeight]);
    }, []);

    return sizes;
};

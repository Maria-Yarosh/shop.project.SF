declare module 'express-session' {
    export interface SessionData {
        username?: string
    }
}

export interface IProductEditData {
    title: string;
    description: string;
    price: string;
    mainImage: string;
    newImages?: string;
    commentsToRemove: string | string[];
    imagesToRemove: string | string[];
    similarToAdd?: string | string[]; // Новое свойство для добавления похожих товаров
    similarToRemove?: string | string[]; // Новое свойство для удаления похожих товаров
}
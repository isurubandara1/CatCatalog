// types/CatBreed.ts
export interface CatBreed {
    id: string;
    name: string;
    origin: string;
    //lifespan: string;
    description: string;
    image: {
        url: string;
    };
}
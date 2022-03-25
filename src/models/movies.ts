export interface IMovie {
    id?: string,
    rank?: number,
    title: string,
    year: number,
    image: string,
    imDbRating: number
    type?: string,
    plot?: string,
    genres?: string,
    runtimeStr?: string,
    contentRating?: string,
    description?: string,
    url?: string
}
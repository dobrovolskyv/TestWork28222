export interface ICity {
    name: string;
    humidity: string;
    speed: string;
    feelsLike: string;
    temp: number;
    weather?: any[];
    main?: {
        temp: number;
    };

}

export interface Idata {
    data: {}
}

//枚举类型
export enum CATEGORY_TYPES {
    ALL,
    SHOES,
    SOCKES,
    SHIRT,
    PANTS
}

export interface ISlider{
    url:string
}
export interface IShop{
    title: string,
    cover: string,
    category: string,
    price: number,
}
export interface IShops{
    hasMore: boolean,
    loading: boolean,
    offset: number,
    limit: number,
    list: IShop[]
}
export interface IHomeState {
    currentCategory: CATEGORY_TYPES,
    sliders: ISlider[],
    shops: IShops
}
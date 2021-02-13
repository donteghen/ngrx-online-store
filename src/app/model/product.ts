export interface Product {
    id: string;
    volumeInfo: {
        title: string;
        subtitle:string;
        authors: Array<string>;
        publishedDate:string
    };
}
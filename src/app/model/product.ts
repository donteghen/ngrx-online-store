export interface Product {
    id: string;
    volumeInfo: {
        title: string;
        authors: Array<string>;
    };
    retailPrice: {
        amount: number,
      },
}
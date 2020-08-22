export enum ShippingTypes {
  Free = 'Free',
  Express = 'Express',
  Courier = 'Courier',
  FreeExpress = 'FreeExpress',
}

const priceForExpressShipping = 9.99;
const priceForCourierShipping = 19.99;
export const minPriceForFreeExpress = 300;

export const shippingValues = {
  [ShippingTypes.Free]: {
    additionalPrice: 0,
    description: 'Free shipping',
  },
  [ShippingTypes.Express]: {
    additionalPrice: priceForExpressShipping,
    description: `Express shipping - additional ${priceForExpressShipping} €`,
  },
  [ShippingTypes.Courier]: {
    additionalPrice: priceForCourierShipping,
    description: `Courier shipping - additional ${priceForCourierShipping} €`,
  },
  [ShippingTypes.FreeExpress]: {
    additionalPrice: 0,
    description: 'Free express shipping',
  },
};
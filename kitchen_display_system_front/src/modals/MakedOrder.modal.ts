export interface MakedOrder {
  filter(
    arg0: (element: MakedOrder) => void
  ): import("react").SetStateAction<MakedOrder[]>;
  map(
    arg0: (element: MakedOrder) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;

  orderId: string;
  orderState: string;
  orderTable: number;
  orderKitchenEntryTime: string;
  orderKitchenMakeTime: number;
  orderDishes: orderDishe[];
}

interface orderDishe {
  orderTitle: string;
  orderIngredients: string[];
  orderQuantity: number;
  orderPrice: number;
}

import { DisheMenu } from "@/modals";
import { MakedOrder } from "@/modals";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MakedOrder[] = [
  // {
  //   orderId: "",
  //   orderState: "",
  //   orderTable: 0,
  //   orderKitchenEntryTime: "",
  //   orderKitchenMakeTime: 0,
  //   orderDishes: [
  //     {
  //       orderTitle: "",
  //       orderIngredients: [],
  //       orderQuantity: 0,
  //     },
  //   ],
  // },
];

export const kdsDashboardSlice = createSlice({
  name: "kdsDashboard",

  initialState: getLocalStorage("kdsDashboard")
    ? JSON.parse(getLocalStorage("kdsDashboard") as string)
    : initialState,

  reducers: {
    addTakenOrder: (state, action) => {
      const today = new Date();

      state.push({
        orderId: `OR-${Date.now()}`,
        orderState: "PENDIENTE",
        orderKitchenEntryTime: today.toLocaleTimeString("en-US"),
        orderTable: action.payload.numberTable,
        orderDishes: action.payload.storeOrders.map((element: DisheMenu) => ({
          orderTitle: element.title,
          orderIngredients: element.ingredients,
          orderQuantity: element.quantity,
          orderPrice: element.price,
        })),
      });

      setLocalStorage("kdsDashboard", state);
    },

    changeStateOrderMaking: (state, action) => {
      const selectedOrder = action.payload;

      const newSelectedOrder = Object.assign({}, selectedOrder);
      newSelectedOrder.orderState = "EMPEZADO";

      state = state.map((element: MakedOrder) => {
        if (element.orderId === newSelectedOrder.orderId) {
          return newSelectedOrder;
        }

        return element;
      });

      setLocalStorage("kdsDashboard", state);
      return state;
    },

    changeStateOrderComplete: (state, action) => {
      const selectedOrder = action.payload;

      const newSelectedOrder = Object.assign({}, selectedOrder);
      newSelectedOrder.orderState = "TERMINADO";

      state = state.map((element: MakedOrder) => {
        if (element.orderId === newSelectedOrder.orderId) {
          return newSelectedOrder;
        }

        return element;
      });

      setLocalStorage("kdsDashboard", state);
      return state;
    },

    changeStateOrderCancel: (state, action) => {
      const selectedOrder = action.payload;

      const newSelectedOrder = Object.assign({}, selectedOrder);
      newSelectedOrder.orderState = "CANCELADO";

      state = state.map((element: MakedOrder) => {
        if (element.orderId === newSelectedOrder.orderId) {
          return newSelectedOrder;
        }

        return element;
      });

      setLocalStorage("kdsDashboard", state);
      return state;
    },

    deleteAllOrders: (state) => {
      localStorage.removeItem("kdsDashboard");

      state = [];
      return state;
    },
  },
});

export const {
  addTakenOrder,
  changeStateOrderMaking,
  changeStateOrderComplete,
  changeStateOrderCancel,
  deleteAllOrders,
} = kdsDashboardSlice.actions;

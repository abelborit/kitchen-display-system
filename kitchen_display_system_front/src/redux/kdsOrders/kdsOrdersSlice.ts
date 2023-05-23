import { DisheMenu } from "@/modals";
import { createSlice } from "@reduxjs/toolkit";

const initialState: DisheMenu[] = [];

export const kdsOrdersSlice = createSlice({
  name: "kdsOrders",

  initialState: initialState,

  reducers: {
    addDisheToOrder: (state, action) => {
      const newItem = action.payload;

      const newItemQuantity = Object.assign({}, newItem);
      newItemQuantity.quantity = 1;

      state.push(newItemQuantity);
    },

    addQuantityDishe: (state, action) => {
      const newItem = action.payload.disheData;

      /* creación de una copia no vinculada al elemento que estoy mandando en action.payload.disheData, para que luego pueda reasignar el newItemQuantity (con la propiedad quantity y price cambiados) al state */
      const newItemQuantity = Object.assign({}, newItem);
      newItemQuantity.quantity = action.payload.quantity + 1;
      newItemQuantity.price = Number(
        (
          action.payload.disheData.price *
          (action.payload.quantity + 1)
        ).toFixed(2)
      );
      // console.log(newItemQuantity);

      state = state.map((element: DisheMenu) => {
        if (element.id === newItemQuantity.id) {
          return newItemQuantity;
        }

        return element;
      });

      return state;
    },

    restQuantityDishe: (state, action) => {
      const newItem = action.payload.disheData;

      const newItemQuantity = Object.assign({}, newItem);
      newItemQuantity.quantity = action.payload.quantity - 1;
      newItemQuantity.price =
        newItemQuantity.quantity === 0
          ? Number(action.payload.disheData.price.toFixed(2))
          : Number(
              (
                action.payload.disheData.price *
                (action.payload.quantity - 1)
              ).toFixed(2)
            );
      // console.log(newItemQuantity);

      if (newItemQuantity.quantity === 0) {
        state = state.filter(
          (element: DisheMenu) => element.id !== newItemQuantity.id
        );
        // console.log(state);
        return state;
      }

      state = state.map((element: DisheMenu) => {
        if (element.id === newItemQuantity.id) {
          return newItemQuantity;
        }

        return element;
      });

      return state;
    },

    refreshDhisesToOrder: (state) => {
      state = [];
      return state;
    },
  },
});

export const {
  addDisheToOrder,
  addQuantityDishe,
  restQuantityDishe,
  refreshDhisesToOrder,
} = kdsOrdersSlice.actions;

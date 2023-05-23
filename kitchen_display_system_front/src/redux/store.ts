import { DisheMenu, MakedOrder, SectionTable } from "@/modals";
import { configureStore } from "@reduxjs/toolkit";
import { kdsOrdersSlice } from "./kdsOrders/kdsOrdersSlice";
import { kdsDashboardSlice } from "./kdsDashboard/kdsDashboardSlice";
import { kdsSectionTableSlice } from "./kdsSectionTable/kdsSectionTableSlice";

export interface AppStore {
  kdsOrders: DisheMenu[];
  kdsDashboard: MakedOrder;
  kdsSectionTable: SectionTable;
}

export const store = configureStore<AppStore>({
  reducer: {
    kdsOrders: kdsOrdersSlice.reducer,
    kdsDashboard: kdsDashboardSlice.reducer,
    kdsSectionTable: kdsSectionTableSlice.reducer,
  },
});

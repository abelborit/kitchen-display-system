import { deleteAllOrders } from "@/redux/kdsDashboard/kdsDashboardSlice";
import { AppStore } from "@/redux/store";
import {
  Button,
  LayoutContainer,
  NoDataFilter,
  ViewContainer,
} from "@/styled-components";
import { useDispatch, useSelector } from "react-redux";
import { DashboardCard } from "./DashboardCard";
import { useEffect, useState } from "react";
import { MakedOrder } from "@/modals";

export const Dashboard = () => {
  const [ordersData, setOrdersData] = useState<any>([]);
  console.log(ordersData);

  const storeDashboard = useSelector((state: AppStore) => state.kdsDashboard);
  // console.log(storeDashboard);

  useEffect(() => {
    setOrdersData(storeDashboard);
  }, [storeDashboard]);

  const dispatch = useDispatch();

  const handleDeleteAllOrder = () => {
    dispatch(deleteAllOrders());
    window.location.reload();
  };

  const handlerFilterAll = () => {
    setOrdersData(storeDashboard);
  };

  const handlerFilterPending = () => {
    setOrdersData(
      storeDashboard.filter((element) => {
        return element.orderState === "PENDIENTE";
      })
    );
  };

  const handlerFilterMaking = () => {
    setOrdersData(
      storeDashboard.filter((element) => {
        return element.orderState === "EMPEZADO";
      })
    );
  };

  const handlerFilterFinished = () => {
    setOrdersData(
      storeDashboard.filter((element) => {
        return element.orderState === "TERMINADO";
      })
    );
  };

  const handlerFilterCancelled = () => {
    setOrdersData(
      storeDashboard.filter((element) => {
        return element.orderState === "CANCELADO";
      })
    );
  };

  return (
    <ViewContainer /* className="vanishIn" */>
      <div style={{ textAlign: "center" }}>
        <Button onClick={handlerFilterAll}>Todos</Button>
        <Button onClick={handlerFilterPending}>Pendientes</Button>
        <Button onClick={handlerFilterMaking}>En proceso</Button>
        <Button onClick={handlerFilterFinished}>Terminados</Button>
        <Button onClick={handlerFilterCancelled}>Cancelados</Button>
      </div>

      <Button style={{ alignSelf: "flex-end" }} onClick={handleDeleteAllOrder}>
        Borrar Ordenes
      </Button>

      <LayoutContainer style={{ alignItems: "flex-start" }}>
        {ordersData.length ? (
          ordersData.map((element: MakedOrder) => (
            <DashboardCard key={element.orderId} orderElement={element} />
          ))
        ) : (
          <NoDataFilter>
            <p>
              No hay resultados del filtro seleccionado o no hay órdenes
              pendientes en este momento.
            </p>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </NoDataFilter>
        )}
      </LayoutContainer>
    </ViewContainer>
  );
};

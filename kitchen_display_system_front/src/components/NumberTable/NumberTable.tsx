import {
  BtnSection,
  BtnTableContent,
  BtnTableSection,
  Button,
  NumberText,
} from "@/styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshDhisesToOrder } from "@/redux/kdsOrders/kdsOrdersSlice";
import { addTakenOrder } from "@/redux/kdsDashboard/kdsDashboardSlice";
import { AppStore } from "@/redux/store";
import {
  addTableNumber,
  removeTableNumber,
  restTableNumber,
} from "@/redux/kdsSectionTable/kdsSectionTableSlice";

export const NumberTable = () => {
  const [numberTable, setNumberTable] = useState(0);

  const storeOrders = useSelector((state: AppStore) => state.kdsOrders);
  // console.log(storeOrders);
  const dispatch = useDispatch();

  const addNumberTable = () => {
    setNumberTable((prevState: number) => prevState + 1);
    dispatch(addTableNumber(numberTable));
  };

  const restNumberTable = () => {
    setNumberTable((prevState: number) =>
      numberTable === 0 ? 0 : prevState - 1
    );
    dispatch(restTableNumber(numberTable));
  };

  const confirmOrder = () => {
    dispatch(addTakenOrder({ storeOrders, numberTable }));

    setNumberTable(0);
    dispatch(removeTableNumber());
    dispatch(refreshDhisesToOrder());

    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  const deleteOrder = () => {
    dispatch(refreshDhisesToOrder());
    window.location.reload();
  };

  return (
    <BtnTableContent>
      <BtnTableSection>
        <Button onClick={addNumberTable}>+</Button>

        <NumberText>Mesa: </NumberText>
        <NumberText>{numberTable}</NumberText>

        <Button onClick={restNumberTable}>-</Button>
      </BtnTableSection>

      {storeOrders.length ? (
        <BtnSection>
          <Button onClick={confirmOrder}>Confirmar Pedido</Button>
          <Button onClick={deleteOrder}>Borrar Pedido</Button>
        </BtnSection>
      ) : null}
    </BtnTableContent>
  );
};

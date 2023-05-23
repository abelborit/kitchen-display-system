import { DisheMenu } from "@/modals";
import {
  addDisheToOrder,
  addQuantityDishe,
  restQuantityDishe,
} from "@/redux/kdsOrders/kdsOrdersSlice";
import { AppStore } from "@/redux/store";
import { DisheCard } from "@/styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  disheData: DisheMenu;
}

export const DisheMenuCard: React.FC<Props> = ({ disheData }) => {
  const [quantity, setQuantity] = useState(disheData.quantity);

  const storeSectionTable = useSelector(
    (state: AppStore) => state.kdsSectionTable
  );
  // console.log(storeSectionTable);

  const dispatch = useDispatch();

  const addQuantity = () => {
    setQuantity((prevState: number) => prevState + 1);
    dispatch(addQuantityDishe({ disheData, quantity }));
  };

  const restQuantity = () => {
    setQuantity((prevState: number) => (quantity === 0 ? 0 : prevState - 1));
    dispatch(restQuantityDishe({ disheData, quantity }));
  };

  const selectDishe = (disheSelect: DisheMenu) => {
    setQuantity(1);
    dispatch(addDisheToOrder(disheSelect));
    // console.log(disheSelect);
  };

  return (
    <DisheCard>
      <div className="content">
        <p className="heading">{disheData.title}</p>

        <ul className="info">
          {disheData.ingredients.map((element: string, index: number) => (
            <li className="infoLi" key={index}>
              {element}
            </li>
          ))}
        </ul>

        <div className="infoText">
          <p className="info">
            Preparación estimada: {disheData.preparationTime} (min)
          </p>
          <p className="info">
            Precio: S/
            {(quantity === 0
              ? disheData.price
              : quantity * disheData.price
            ).toFixed(2)}
          </p>
          <p className="info">Cantidad: {quantity} plato(s)</p>
        </div>
      </div>

      <div className="contentBtn">
        {storeSectionTable.numberTable !== 0 ? (
          quantity === 0 ? (
            <button className="btn" onClick={() => selectDishe(disheData)}>
              Agregar a la orden
            </button>
          ) : (
            <>
              <button className="btn" onClick={() => addQuantity()}>
                +
              </button>
              <button className="btn" onClick={() => restQuantity()}>
                -
              </button>
            </>
          )
        ) : (
          <p className="selectNumberText">
            Seleccione primero un número de mesa
          </p>
        )}
      </div>
    </DisheCard>
  );
};

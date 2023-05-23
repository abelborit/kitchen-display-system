import { MakedOrder } from "@/modals";
import {
  changeStateOrderCancel,
  changeStateOrderComplete,
  changeStateOrderMaking,
} from "@/redux/kdsDashboard/kdsDashboardSlice";
import { DashboardOrderCard } from "@/styled-components";
import { useDispatch } from "react-redux";

interface Props {
  orderElement: MakedOrder;
}

export const DashboardCard: React.FC<Props> = ({ orderElement }) => {
  const dispatch = useDispatch();

  const handleMakingOrder = () => {
    dispatch(changeStateOrderMaking(orderElement));
  };

  const handleFinishedOrder = () => {
    dispatch(changeStateOrderComplete(orderElement));
  };

  const handleCancelOrder = () => {
    dispatch(changeStateOrderCancel(orderElement));
  };

  return (
    <DashboardOrderCard orderState={orderElement.orderState}>
      <div className="content">
        <p className="heading">{orderElement.orderId}</p>

        <div className="contentDishes">
          {orderElement.orderDishes.map((element, index) => (
            <div key={index}>
              <p>
                <strong>Orden: {element.orderTitle}</strong>
              </p>
              <ul>
                {element.orderIngredients.map(
                  (element: string, index: number) => (
                    <li key={index}>{element}</li>
                  )
                )}
              </ul>
              <p>Cantidad de la orden: {element.orderQuantity}</p>
              <p>Precio de la orden: S/ {element.orderPrice} </p>
              <br />
            </div>
          ))}
        </div>

        <div className="infoText">
          <p className="info">
            <strong>Mesa: {orderElement.orderTable}</strong>
          </p>
          <p className="info">
            <strong> Orden tomada: {orderElement.orderKitchenEntryTime}</strong>
          </p>
          <p className="info">
            <strong>{orderElement.orderState}</strong>
          </p>
        </div>
      </div>

      <div className="contentBtn">
        <button className="btn" onClick={handleMakingOrder}>
          <svg
            style={{ fill: "#17a2b8" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M240 144A96 96 0 1 0 48 144a96 96 0 1 0 192 0zm44.4 32C269.9 240.1 212.5 288 144 288C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112h71.8c8.8-9.8 21.6-16 35.8-16H496c26.5 0 48 21.5 48 48s-21.5 48-48 48H392c-14.2 0-27-6.2-35.8-16H284.4zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM400 240c13.3 0 24 10.7 24 24v8h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h96v-8c0-13.3 10.7-24 24-24zM288 464V352H512V464c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48zM48 320h80 16 32c26.5 0 48 21.5 48 48s-21.5 48-48 48H160c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V336c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160v32h16zM24 464H200c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
          </svg>
        </button>

        <button className="btn" onClick={handleFinishedOrder}>
          <svg
            style={{ fill: "#28a745" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        </button>

        <button className="btn" onClick={handleCancelOrder}>
          <svg
            style={{ fill: "#dc3545" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
    </DashboardOrderCard>
  );
};

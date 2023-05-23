import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";

import { DASHBOARD, TAKEORDER } from "./config/paths";
import { Dashboard, DishesMenuContainer } from "./KDSApp/pages";
import { Footer, Header } from "./components";

import "./App.css";
import { getLocalStorage, setLocalStorage } from "./utilities";
import { Button, ContainerSendData } from "./styled-components";

/* este método io nos permitirá que cuando carguemos este componente podamos generar la variable socket simplemente llamando a la función io, pero si la llamamos así: const socket = io() va a intentar conectarse a un servidor de web socket que está en el mismo dominio y mismo puerto donde se esté levantando la aplicación de react, entonces le tenemos que decir en principio a dónde nos queremos conectar. Entonces con eso ya tenemos la conexión hecha contra este servidor de web socket */
/* a partir de aquí la variable socket nos permitirá enviar eventos y suscribirnos a eventos que nos llegan para poder interactuar con ellos */
const socket = io("http://localhost:5175");

function App() {
  /* vamos a ver desde el lado del frontend si estamos o no conectados */
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    /* como tenemos la instancia del socket podemos suscribirnos a cualquier instancia, ya sean eventos que nos mande el servidor o eventos que nosotros vayamos generando */

    /* nos avisará cuándo nos hayamos conectado al servidor */
    socket.on("connect", () => {
      /* con esto forzamos a la renderización otra vez del componente */
      setIsConnected(true);
    });

    /* en este useEffect() es donde yo me podría suscribir para recibir la data del backend porque aquí es donde se están haciendo todas las gestiones iniciales para configurar nuestro componente */
    socket.on("sendInfo", (data) => {
      // console.log(data.data);

      setLocalStorage("kdsDashboard", data.data);
      window.location.reload();
    });

    /* aquí es importante hacer una limpieza de los eventos que nos vamos a suscribir para que no hayan problemas o no se dupliquen */
    return () => {
      /* aquí nos vamos a dessuscribir de los eventos para que no haya algún problema como que se suscriba más de una vez y que interactúe más de una vez */
      socket.off("connect");
      socket.off("sendInfo");
    };
  }, []);

  /* para enviar esto también hay que configurar para hacer la recepción de los datos en la aplicación del backend */
  const sendInfoToServer = () => {
    /* mandar un evento: socket.emit(nombre_evento, datos_del_evento) */
    socket.emit("sendInfo", {
      nombre: "sendOrders",
      data: getLocalStorage("kdsDashboard")
        ? JSON.parse(getLocalStorage("kdsDashboard") as string)
        : [],
    });
  };

  const disconnectSocket = () => {
    setIsConnected(false);
    socket.emit("forceDisconnect");
  };

  const actualUrl = window.location.href;
  console.log(actualUrl.includes("/dashboard"));

  return (
    <BrowserRouter>
      <Header isConnected={isConnected} disconnectSocket={disconnectSocket} />
      {actualUrl.includes("/takeOrder") && (
        <ContainerSendData>
          <Button onClick={sendInfoToServer}>Enviar a cocina</Button>
        </ContainerSendData>
      )}

      <Routes>
        <Route path={TAKEORDER} element={<DishesMenuContainer />}></Route>
        <Route path={DASHBOARD} element={<Dashboard />}></Route>

        <Route path="*" element={<Navigate to={TAKEORDER} />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

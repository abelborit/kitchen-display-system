# Kitchen Display System (KDS)

---

Un Kitchen Display System (KDS) es un sistema utilizado en restaurantes y establecimientos de comida para reemplazar los típicos tickets impresos o comandas en papel. El KDS muestra los pedidos de los clientes en una pantalla, de manera que el personal de cocina puede verlos y prepararlos de manera más eficiente. Esto mejora la comunicación entre la cocina y los camareros, reduciendo errores y tiempos de espera.

Este proyecto es un KDS en tiempo real, es decir que se podrá pedir la orden de diferentes navegadores y la cocina vería el pedido actualizado.

## Pasos a seguir:

1. Descargar o clonar el respositorio
1. Hay dos carpetas, el lado de frontend y lado del servidor. Entrar a la carpeta de frontend y abrir una terminal y lo mismo para la carpeta del servidor
1. Como hay dos terminales (frontend y server) colocar `npm install` para descargar los módulos
1. En la terminal tanto de frontend como del server colocar `npm run dev` para correr la plataforma y el servidor
1. Como se estará usando dos navegadores o pestañas verificar que en la esquina superior derecha diga `Conectado` eso hará referencia a que se pudo conectar al servidor ambos browsers
1. OPCIONAL: En la cabecera solo se tiene le logo del restaurante pero si los pasos siguientes hay problemas al colocar una u otra URL se podría ir a la carpeta de `kitchen_display_system_front` -> `src` -> `components` -> `Header` -> `Header.tsx` y descomentar lo que está comentado. De esa forma aparecerá en la cabecera de la plataforma las redirecciones y con eso se podría evitar cambiar las URL de forma manual

## Lado plataforma clientes

Ya dentro de la plataforma en ambos browsers te redirigirá a la URL `/takeOrder` el cual será para los clientes en donde esa vista nos ayudará a tomar el pedido y podremos visualizar los diferentes platos que tiene la carta.

El procedimiento para el lado del cliente será:

1. Aumantar o disminuir el número para seleccionar la mesa para tomar el pedido
1. En las cards de los platos aparecerá un botón para agregar ese plato a la orden. Al hacer click automáticamente tendrá la cantidad de 1. Si se desea aumentar la cantidad presionar el botón de `+` y si se desea disminuir la cantidad entonces `-`
1. Una vez que se tenga el número de mesa y el plato o platos seleccionados aparecerá un botón en la esquina superior derecha para `Confirmar pedido`, al hacer click habremos tomado el pedido
1. En la parte superior aparece un botón `Enviar a cocina` para enviar el pedido a la cocina y que ellos obtengan la información adecuada
1. IMPORTANTE: Si ya se tiene la mesa y los platos seleccionados pero no se presionó el botón de `Confirmar pedido` entonces se puede presionar el botón de `Borrar pedido` para borrar las selecciones realizadas

## Lado plataforma cocina

Ya dentro de la plataforma del otro navegador o pestaña, cambiar en la URL `/takeOrder` a `/dashboard` el cual será para la cocina en donde esa vista nos ayudará a visualizar todas las órdenes que se tienen que preparar.

El procedimiento para el lado de la cocina será:

1. Automáticamente nos aparecen las órdenes que hicieron los clientes
1. Aquí se tiene botones para filtrar las órdenes en: `Todos` `Pendientes` `En proceso` `Terminados` `Cancelados`
1. En las cards de las órdenes se visualiza la información del pedido realizado. Abajo se tienen tres íconos que hacen referencia al estado de la órden los cuales son:

   - Estado `Pendiente`: card color blanca
   - Estado `Empezado`: card color azul verdoso
   - Estado `Terminado`: card color verde
   - Estado `Cancelado`: card color roja

1. Si se desea borrar todas las órdenes se podrá presionar el botón `Borrar ordenes`

---

## Para este proyecto se está utilizando:

1. Frontend

   - React JS
   - Styled Components
   - Typescrit
   - Redux toolkit
   - socket.io-client (hacer la interacción por parte del frontend)

1. Server

   - socket.io (hacer la interacción por parte del backend)

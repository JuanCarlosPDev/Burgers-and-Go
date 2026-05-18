// Configuración de las rutas de la aplicación React
export const routes = {
  inicio: "/",
  menu: "/menu",
  menuDetalle: "/menu/:id",
  detalle: (id) => `/menu/${id}`,
  nosotros: "/nosotros",
  carrito: "/carrito",
};

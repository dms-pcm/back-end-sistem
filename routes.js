const routes = [
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage 1234567890";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },
];

module.exports = routes;

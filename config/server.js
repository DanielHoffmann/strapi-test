module.exports = ({ env }) => {
  return {
    host: "0.0.0.0",
    port: 3000,
    url: "http://localhost:3000/",
    admin: {
      port: 1337,
      url: "/admin",
      auth: {
        secret: env("ADMIN_JWT_SECRET", "9f01143a0afbad42edcb8ec3f8918328"),
      },
    },
  };
};

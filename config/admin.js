module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "lucianismyname"),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', "whatisthis"),
  },
});

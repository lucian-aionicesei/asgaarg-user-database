module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://asgaard-userdb.herokuapp.com/'),
    app: { 
      keys: env.array("APP_KEYS", ["lucian.aionicesei", "production"])
    },
  })
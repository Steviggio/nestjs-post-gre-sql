export default () => ({
  port: parseInt(process.env.PORT, 10) || 3500,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 6000
  }
})
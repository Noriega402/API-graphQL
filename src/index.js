const createApp = require('./app');

//funcion anonima autoejecutable
(async () => {
  const port = process.env.PORT || 3000;
  const app = await createApp();
  app.listen(port, () => {
    console.log(`App running`);
  });
})();

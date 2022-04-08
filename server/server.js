const express = require('express');
const config = require('./config/config');

const registrationRouter = require('./routes/registrationRouter.route');
const loginRouter = require('./routes/loginRouter.route');
const sessionRouter = require('./routes/sessionRouter.route');

const app = express();
const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/session', sessionRouter);

app.listen(PORT, () => {
  console.log(`*** Working at PORT: ${PORT} ***`);
});

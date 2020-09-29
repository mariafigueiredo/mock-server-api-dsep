const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log('UNHCAUGHT EXCEPTION 💥  Shutting down....');
  console.log(err.name, err.message);
  process.exit(1); //end process
});

dotenv.config({
  path: './config.env',
});

const app = require('./app');

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`App running on port ${port} . . .`);
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message)
  console.log('UNHANDLED REJECTION 💥  Shutting down....');
  server.close(() => { //give time to server to finish all the request and then end the process
    process.exit(1); //end process
  })
});
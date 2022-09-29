import app from "./app.js";
import chalk from 'chalk';

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(chalk.bold.greenBright(`Server is listening on port ${PORT}.`));
});

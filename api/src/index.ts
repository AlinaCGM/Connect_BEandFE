// create a server here
import Express from "express";
import productRouter from "../src/routes/products";
import userRouter from "../src/routes/users";

import cors from "cors";

const app = Express();

app.use(Express.json());
app.use(cors());
app.use("/products", productRouter);
app.use("/users", userRouter);

const port = 8001;

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});

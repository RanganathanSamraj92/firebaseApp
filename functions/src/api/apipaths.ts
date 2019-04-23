import * as express from "express";
export let apiRouter = express.Router();
import * as usersApi from "./users/users";
import * as messages from "../api/messages/msg";
import * as greetUser from "../api/greetings/hello";


apiRouter.use('/greetings', greetUser.helloRouter);

apiRouter.use("/users", usersApi.userRouter);

apiRouter.use("/messages", messages.msgRouter);



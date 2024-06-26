import express from "express";
import userRouter from "./routes/user.routes.js";
import projectRouter from "./routes/projectRouter.routes.js";
import personalDatilsRoutes from "./routes/personalDetails.routes.js";
import skills from "./routes/skills.routes.js"
import otpSender from "./routes/otpSender.controller.js"
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use("/api/v1/users", userRouter);//ad
app.use("/api/v1/users/",projectRouter)
app.use("/api/v1/users",personalDatilsRoutes)
app.use("/api/v1/users",skills)
app.use("/api/v1/users",otpSender)

export default app;

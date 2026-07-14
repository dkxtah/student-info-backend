import app from "./app.js";

const startServer = async () => {
  try {
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(4000, () => {
      console.log(`Server is running on port 4000`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

import { AppDataSource } from "./data-source"
import  app  from "./app"

AppDataSource.initialize().then(async () => {
    await AppDataSource.runMigrations()

    app.listen(8080,() => console.log("Server running on port 8080"))
}).catch(error => console.log(error))

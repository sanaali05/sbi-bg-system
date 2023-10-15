
import mongoose from "mongoose";
import "dotenv/config";
import chalk from "chalk";

const connection = async () => {
  // try {
  //   await mongoose.connect("mongodb://127.0.0.1:27017/SBI_DATA");
  //   console.log("Database is connected")

  // } catch (error) {
  //   console.log(error)
  // }

  //Production Database=====
  try {
      mongoose.set('strictQuery', false);
      await mongoose.connect(`mongodb+srv://valuexdigital:${process.env.DATABASE_PASSWORD}@cluster0.a5dsilw.mongodb.net/sbi_bgms?retryWrites=true&w=majority&ssl=true`, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });

      console.log(chalk.bgGreen.bold("Database is connected"))
  } catch (error) {
      console.log(error)
  }

}

connection();


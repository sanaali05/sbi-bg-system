import fs from 'fs';
import chalk from "chalk";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);




export const deleteFile = (filename) => {
    fs.unlink(path.join(__dirname, '../' + filename), (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log(chalk.bgGreen.bold('File deleted successfully.'))
        }
    });
}
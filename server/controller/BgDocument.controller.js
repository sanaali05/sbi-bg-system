import chalk from "chalk";

export const postDocument = async (req, res) => {
    try {
        const file = req.file;
        if (file) {
            const image =  "/uploads/documents/" + file.filename;
            res.status(200).send(image)
        }
    } catch (error) {
        console.log(chalk.bgRed.bold(error));
        res.status(500).json({ error: error.message })
    }
}
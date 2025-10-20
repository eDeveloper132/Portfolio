import path from 'path';
import express from 'express';
import cors from 'cors';
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.static(path.join('public')));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// ✅ Fix: remove "*" for Express 5
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});
//# sourceMappingURL=index.mjs.map
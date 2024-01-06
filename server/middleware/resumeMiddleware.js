const multer = require('multer');

const storage = multer.memoryStorage();
const uploadMiddleware = multer({ storage: storage }).single('pdf');

module.exports = uploadMiddleware;

const rateLimit = require('express-rate-limit');
module.exports = rateLimit({
    windowMs:  60 * 1000, 
    max:3,
    message:{error:"Too many requests, please try again later."}
});
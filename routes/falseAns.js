const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    const us = fs.readFileSync("./temp/user.txt", "utf8");
    res.render('falseAns',{
        text: `${us}`
    });
});

module.exports = router;
const {Router} = require('express');
const router = Router();
var wmic = require('wmic');
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('index',{
        title: "Проверить пользователя"
    });
});

router.post('/', (req,res) => {
    let inputData = req.body.visitor;
    fs.writeFileSync("./temp/user.txt", (inputData), "utf8");
        wmic.get_values('useraccount', 'name, name', null, function(err, values) {
            const myName = fs.readFileSync("./temp/user.txt", "utf8");
            const names =  values.map(el => el.Name);
            names.includes(myName) ? res.redirect('/trueAns') : res.redirect('/falseAns');
    });
});


module.exports = router;
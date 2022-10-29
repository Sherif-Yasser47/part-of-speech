const router = require('express').Router();
const fileReader = require('../middleware/fileReader');

/* 
   This is a helper function that takes the main Random array of words, in order to return result array
   that will be sent to the client side containig at least one of each POS, and has length of 10 words objects
*/
const helperFun = (mainArr) => {
    let checkObj = {};
    let mandatoryWords = mainArr.filter((word) => {
        if (checkObj[word.pos]) {
            return false;
        }
        checkObj[word.pos] = true;
        let index = mainArr.findIndex((e) => e.id == word.id)
        mainArr.splice(index, 1)  // removing the unique word from main list to avoid duplication.
        return true;
    });
    let otherWords = mainArr.slice(0, 6);
    let resultArr = mandatoryWords.concat(otherWords);
    return resultArr;
};

// GET words list endpoint
router.get('/', fileReader, (req, res, next) => {
    try {
        let wordsArr = req.data.wordList;
        let mainArr = wordsArr.sort(() => 0.5 - Math.random());  //Sorting the main words list randomly.
        let resWords = helperFun(mainArr);
        res.send(resWords);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
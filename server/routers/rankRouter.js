const fs = require('fs/promises');
const router = require('express').Router();
const fileReader = require('../middleware/fileReader');


// GET words list endpoint
router.post('/', fileReader, async (req, res, next) => {
    try {
        //Checking request payload validity.
        let studentScore = req.body.score;
        let scoresList = req.data.scoresList;
        if (typeof studentScore !== "number" || studentScore < 0 || studentScore > 100) {
            throw new Error('invalid request payload');
        }

        // Calculating the rank based on the count of below ranks in scoresList.
        let belowScoreCount = 0;
        let rank = 0;
        scoresList.forEach(score => {
            if (score < studentScore) belowScoreCount++;
        });

        rank = (belowScoreCount / scoresList.length) * 100;
        roundedRank = Math.round(rank * 1e2) / 1e2;
        
        res.send({ rank: roundedRank });
    } catch (error) {
        error.status = 400;
        next(error);
    }
});

module.exports = router;

const boardModels = require('../../models/boards/index');

exports.getBoard = (req, res, next) => {
    const { index } = req.params;
    const indexToNumber = Number(index);
    if (isNaN(indexToNumber)) {
        res.status(401)
            .json({
                data: {},
                message: 'This is not a valid request.'
            });
    }
    boardModels.getBoard(index)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            const { status } = err;
            res.status(status)
                .json(err);
        });
};

exports.getBoards = (req, res, next) => {
    boardModels.getBoards()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            const { status } = err;
            res.status(status)
                .json(err);
        });
};

exports.createBoard = (req, res, next) => {
    const { uid, password } = req.body;
    boardModels.createBoard()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            const { status } = err;
            res.status(status)
                .json(err);
        });
};

exports.updateBoard = (req, res, next) => {
    /**
     * @TODO
     * update contents
     */
};

exports.deleteBoard = (req, res, next) => {
    /**
     * @TODO
     * delete contents
     */
};
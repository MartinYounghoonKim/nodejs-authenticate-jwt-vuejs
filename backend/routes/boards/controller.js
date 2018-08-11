const boardModels = require('../../models/boards/index');

exports.getBoard = (req, res, next) => {
    /**
     * @TODO
     * get detail board content
     */

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
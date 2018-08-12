const boardModels = require('../../models/boards/index');

exports.getBoard = (req, res, next) => {
    const { index } = req.params;
    const { upk } = req.body;
    const indexToNumber = Number(index);
    if (isNaN(indexToNumber)) {
        res.status(401)
            .json({
                message: 'This is not a valid request.'
            });
    }
    boardModels.getBoard({ index, upk })
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
    const { uid, upk, title, content } = req.body;
    const isInvalidRequest = !content || content.length <= 0 || !title || title.length <= 0;

    if (isInvalidRequest) {
        res.status(401)
            .json({
                message: 'This is not a valid request.'
            });
    }
    boardModels.createBoard({ uid, upk, title, content })
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
    const { index } = req.params;
    const { title, content, upk } = req.body;
    const isInvalidRequest = !content || content.length <= 0 || !title || title.length <= 0;
    if (isInvalidRequest) {
        // Validate required fields
        res.status(401)
            .json({
                message: 'This is not a valid request.'
            });
    }
    boardModels.updateBoard({ upk, index, title, content })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            const { status } = err;
            res.status(status)
                .json(err);
        });
};

exports.deleteBoard = (req, res, next) => {
    /**
     * @TODO
     * delete contents
     */
};
const router = require("express").Router();
const users = [
    { id: "hong", pw: "gil", nickname: "gildong" },
    { id: "baby", pw: "dinosaur", nickname: "dooly" },
    { id: "hello", pw: "hihi", nickname: "Kitty" },
];

/**
 * @swagger
 * paths:
 *  /user/nickname:
 *   post:
 *    tags:
 *    - user
 *    description: 닉네임 조회
 *    parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      schema:
 *       properties:
 *        id:
 *         type: string
 *        pw:
 *         type: string
 *
 *    responses:
 *     200:
 *      description: 닉네임 조회 성공
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *     401:
 *      description: 닉네임 조회 실패
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *
 */

router.post("/nickname", async (req, res, next) => {
    try {
        for (var i = 0; i < users.length; i++) {
            if (req.body.id == users[i].id) {
                if (req.body.pw == users[i].pw) {
                    return res.status(200).json({
                        message: "닉네임 : " + users[i].nickname,
                    });
                } else {
                    return res.status(401).json({
                        message: "비밀번호가 틀렸습니다!",
                    });
                }
            }
        }
        return res.status(401).json({
            messge: "아이디가 존재하지 않습니다!",
        });
    } catch (error) {
        console.log(error);
        return next(error);
    }
});

module.exports = router;

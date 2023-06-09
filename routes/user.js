const router = require("express").Router();
const users = [
    { id: "hong", name: "gildong" },
    { id: "baby", name: "dooly" },
    { id: "hello", name: "Kitty" },
];

/**
 * @swagger
 * paths:
 *  /user/userNames:
 *    get:
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [userNames]
 *      responses:
 *        200:
 *          description: 전체 유저 정보
 *          schema:
 *            properties:
 *                    users:
 *                      type: object
 *          401:
 *              description: 닉네임 조회 실패
 *              schema:
 *               properties:
 *                   message:
 *                       type: string
 */
router.get("/userNames", async (req, res, next) => {
    try {
        res.json({ users: users });
    } catch (error) {
        console.log(error);
        return next(error);
    }
});

/**
 * @swagger
 * /user/userName?user_id={user_id}:
 *  get:
 *    summary: "특정 유저조회 Query 방식"
 *    description: "요청 경로에 값을 담아 서버에 보낸다."
 *    tags: [Users]
 *    parameters:
 *      - in: query
 *        name: user_id
 *        required: true
 *        description: 유저 아이디
 *        schema:
 *          type: string
 *    responses:
 *      "200":
 *        description: 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다. (유저 조회)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                users:
 *                  type: object
 *                  example: [{ "id": 1, "name": "유저1" }]
 */
router.get("/userName", async (req, res, next) => {
    try {
        const user_id = req.query.user_id;

        const user = users.filter((data) => data.id == user_id);

        res.json({ user: user });
    } catch (error) {
        console.log(error);
        return next(error);
    }
});

/**
 * @swagger
 *
 * /user/addUser:
 *  post:
 *    summary: "유저 등록"
 *    description: "POST 방식으로 유저를 등록한다."
 *    tags: [AddUser]
 *    requestBody:
 *      description: 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다. (유저 등록)
 *    parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      schema:
 *       properties:
 *        id:
 *         type: string
 *        name:
 *         type: string
 *    responses:
 *     200:
 *      description: 유저 등록 성공
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *     401:
 *      description: 유저 등록 실패
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *
 */
router.post("/addUser", async (req, res, next) => {
    try {
        const { id, name } = req.body;

        const user = users.concat({ id, name });

        res.json({ users: user });
    } catch (error) {
        console.log(error);
        return next(error);
    }
});

module.exports = router;

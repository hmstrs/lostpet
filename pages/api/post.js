const connectIfNot = require('../mongo');

/**
 * POST /api/post - create order about lost pet
 * body {
 *  "animal": enum(),
 *  "name": "vaska",
 *  "breed": "pit-bul",
 *  "color": "yellow",
 *  "size": enum("smal", "medium", "big"),
 *  "features": "long scar on left leg",
 *  "additional": "it had blue collar",
 *  "reward": "100$",
 *  "owner_name": "Illya Fedorovich",
 *  "phone": "+380981255777",
 *  "status": enum("pending", "resolved", "cancelled")
 * }
 * @param req
 * @param res
 */
export default async (req, res) => {
  if (req.method === 'POST') {
    // pre setup of DB
    await connectIfNot();
    const collection = global.DB.collection('Posts');
    // pre setup of DB
    const result = await collection.insertOne(req.body);
    console.debug(result.ops);
    res.statusCode = 201;
    res.send(result.ops).end();
  } else {
    res.statusCode = 404;
    res.end('Try another HTTP Method');
  }
}

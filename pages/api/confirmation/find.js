const connectIfNot = require('../../mongo');
/**
 * GET /api/confirmation/find - submit that pet was found
 * body {
 *   "post_id": "0",
 * }
 * @param req
 * @param res
 */
export default async (req, res) => {
  if (req.method === 'GET') {
    // pre setup of DB
    await connectIfNot();
    const collection = global.DB.collection('Confirmations');
    // pre setup of DB
    const result = await collection.findOne(Object.assign(req.query, { status: "pending" }));
    console.debug(result);
    res.statusCode = 200;
    res.send(result);
  } else {
    res.statusCode = 404;
    res.end('Try another HTTP Method');
  }
}

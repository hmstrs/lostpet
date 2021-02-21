const connectIfNot = require('../../mongo');
/**
 * POST /api/confirmation/create - submit that pet was found
 * body {
 *   "post_id": "0",
 *   "user_id": "0",
 *   "url": "http://....com"
 * }
 * @param req
 * @param res
 */
export default async (req, res) => {
  if (req.method === 'POST') {
    // pre setup of DB
    await connectIfNot();
    const collection = global.DB.collection('Confirmations');
    // pre setup of DB
    const result = await collection.insertOne(Object.assign(req.body, { status: 'pending' }));
    console.debug(result.ops);
    res.statusCode = 201;
    res.send(result.ops).end();
  } else {
    res.statusCode = 404;
    res.end('Try another HTTP Method');
  }
}

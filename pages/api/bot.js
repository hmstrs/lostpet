const connectIfNot = require('../mongo');

/**
 * POST /api/bot - get posts about lost pets with filters
 * body {
 *   "lat": "45.345",
 *   "alt" "32.12",
 *   "url": "http://....com"
 * }
 * @param req
 * @param res
 */
export default async (req, res) => {
  if (req.method === 'POST') {
    // pre setup of DB
    await connectIfNot();
    const collection = global.DB.collection('Locations');
    // pre setup of DB
    const result = await collection.insertOne(req.body);
    console.debug(result.ops);
    res.statusCode = 201;
    return res.send(result.ops).end();
  } else if (req.method === 'GET') {
    // pre setup of DB
    await connectIfNot();
    const collection = global.DB.collection('Locations');
    // pre setup of DB
    const result = await collection.find(req.query).toArray();
    console.debug(result);
    res.statusCode = 200;
    res.send(result);
  } else {
    res.statusCode = 404;
    return res.end('Try another HTTP Method');
  }
}

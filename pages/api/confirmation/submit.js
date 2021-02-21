const connectIfNot = require('../../mongo');
/**
 * POST /api/confirmation/submit - submit that pet was found
 * body {
 *   "post_id": "0",
 *   "user_id": "0"
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
    const [submittedConfirmations, cancelledConfirmations] = await Promise.all([
      // submit true confirmation
      collection.findAndModify(req.query, { status: "resolved" }, { "new": true }),
      // dismiss false confirmations
      collection.findAndModify({ post_id: req.query }, { status: "cancelled" }, { "new": true })
    ]);
    console.debug(submittedConfirmations);
    console.debug(cancelledConfirmations);
    res.statusCode = 201;
    res.send(submittedConfirmations).end();
  } else {
    res.statusCode = 404;
    res.end('Try another HTTP Method');
  }
}

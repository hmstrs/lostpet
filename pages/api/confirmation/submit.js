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
    const [submittedConfirmation, cancelledConfirmations] = await Promise.all([
      // submit true confirmation
      collection.findOneAndUpdate(req.query, { $set: { status: "resolved" } }, { upsert: true }),
      // dismiss false confirmations
      collection.findOneAndUpdate({ post_id: req.query }, { $set: { status: "cancelled" } }, { upsert: true })
    ]);
    console.debug(submittedConfirmation.value);
    console.debug(cancelledConfirmations.value);
    res.statusCode = 201;
    res.send(submittedConfirmation.value);
  } else {
    res.statusCode = 404;
    res.end('Try another HTTP Method');
  }
}

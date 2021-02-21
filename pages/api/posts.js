const connectIfNot = require("../mongo");

/**
 * GET /api/posts - get posts about lost pets with filters
 * @param req
 * @param res
 */
export default async (req, res) => {
  // pre setup of DB
  await connectIfNot();
  const collection = global.DB.collection("Posts");

  // pre setup of DB
  res.statusCode = 200;
  const result = await collection.find(req.query).toArray();

  console.debug(result);

  res.json(result);
};

const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  host: process.env.ELSTIC_ADDRESS || '176.36.49.86:9200',
  apiVersion: process.ELASTIC_VERSION || '7.11.1',
});

const findLostPet = () => {

};

const createPost = () => {

};

const paginationFind = () => {

};

/**
 * POST /post - create post about lost pet
 * GET /post - find post(s) about lost pet
 * @param req
 * @param res
 */
export default (req, res) => {
  if (req.method === 'POST') {
    res.statusCode = 200;
    res.end();
  } else if (req.method === 'GET') {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
}

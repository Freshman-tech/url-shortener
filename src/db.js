const nanoid = require('nanoid');

const shortenUrl = (db, url) => {
  const shortenedUrls = db.collection('shortenedUrls');
  return shortenedUrls.findOne({ originalUrl: url })
    .then(doc => {
      if (doc === null) {
        return shortenedUrls.insertOne({
            originalUrl: url,
            shortUrl: nanoid(7),
          })
          .then(response => response.ops[0]);
      }

      return doc;
    });
};

const checkIfShortUrlCodeExists = (db, code) => db.collection('shortenedUrls')
  .findOne({ shortUrl: code })
  .then(doc => {
    if (doc === null) throw Error('Uh oh, we could not find a link at that URL');

    return doc;
  });

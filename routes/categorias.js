const express = require('express');
const router = express.Router();

const CATEGORIAS = [
  {
    "_id": "613be41ddb9c47fb90d20e01",
    "nome": "Ação",
    "filmes": [
      {
        "_id": "613be41ddb9c47fb90d20f01",
        "titulo": "Mad Max: Estrada da Fúria",
        "ano": 2015
      },
      {
        "_id": "613be41ddb9c47fb90d20f02",
        "titulo": "John Wick",
        "ano": 2014
      }
    ]
  },
  {
    "_id": "613be41ddb9c47fb90d20e02",
    "nome": "Comédia",
    "filmes": [
      {
        "_id": "613be41ddb9c47fb90d20f03",
        "titulo": "Superbad",
        "ano": 2007
      },
      {
        "_id": "613be41ddb9c47fb90d20f04",
        "titulo": "The Hangover",
        "ano": 2009
      }
    ]
  }
];

router.get('/', function(req, res, next) {
  res.json(CATEGORIAS);
});

module.exports = router;

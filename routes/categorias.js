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
        "ano": 2015,
        "diretor": "George Miller",
        "genero": "Ação",
        "capaUrl": "https://media.fstatic.com/LT581NNicVsE4jl3PJj5pUNQ-os=/322x478/smart/filters:format(webp)/media/movies/covers/2015/04/mad-max-estrada-da-furia_t48252_BOObRs0.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20f02",
        "titulo": "John Wick",
        "ano": 2014,
        "diretor": "Chad Stahelski",
        "genero": "Ação",
        "capaUrl": "https://br.web.img3.acsta.net/pictures/17/01/10/15/05/404753.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20f03",
        "titulo": "Gladiador",
        "ano": 2000,
        "diretor": "Ridley Scott",
        "genero": "Ação",
        "capaUrl": "https://upload.wikimedia.org/wikipedia/pt/4/44/GladiadorPoster.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20f04",
        "titulo": "Matrix",
        "ano": 1999,
        "diretor": "Lana Wachowski, Lilly Wachowski",
        "genero": "Ação",
        "capaUrl": "https://media.fstatic.com/Dsnc8_BpNuQaIP04acXtB2V8sU0=/322x478/smart/filters:format(webp)/media/movies/covers/2011/07/6aa590bdfc94c6589dba4dc303057495.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20f05",
        "titulo": "Inception",
        "ano": 2010,
        "diretor": "Christopher Nolan",
        "genero": "Ação",
        "capaUrl": "https://imusic.b-cdn.net/images/item/original/988/5051892032988.jpg?2010-inception-dvd&class=scaled&v=1456738976"
      }
    ]
  },
  {
    "_id": "613be41ddb9c47fb90d20e02",
    "nome": "Comédia",
    "filmes": [
      {
        "_id": "613be41ddb9c47fb90d20f06",
        "titulo": "Superbad",
        "ano": 2007,
        "diretor": "Greg Mottola",
        "genero": "Comédia",
        "capaUrl": "https://upload.wikimedia.org/wikipedia/pt/8/8b/Superbad_Poster.png"
      },
      {
        "_id": "613be41ddb9c47fb90d20f07",
        "titulo": "The Hangover",
        "ano": 2009,
        "diretor": "Todd Phillips",
        "genero": "Comédia",
        "capaUrl": "https://upload.wikimedia.org/wikipedia/pt/b/b9/Hangoverposter09.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20f08",
        "titulo": "Step Brothers",
        "ano": 2008,
        "diretor": "Adam McKay",
        "genero": "Comédia",
        "capaUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSveTPgsuuRlft-2udAnoe-18khI2datdR1Gg&s"
      },
      {
        "_id": "613be41ddb9c47fb90d20f09",
        "titulo": "Zombieland",
        "ano": 2009,
        "diretor": "Ruben Fleischer",
        "genero": "Comédia",
        "capaUrl": "https://irp.cdn-website.com/0bb283b1/dms3rep/multi/capa+filme+zumbilandia.webp"
      },
      {
        "_id": "613be41ddb9c47fb90d20f02",
        "titulo": "John Wick", 
        "ano": 2014,
        "diretor": "Chad Stahelski",
        "genero": "Ação, Comédia",
        "capaUrl": "https://br.web.img3.acsta.net/pictures/17/01/10/15/05/404753.jpg"
      }
    ]
  },
  {
    "_id": "613be41ddb9c47fb90d20e03",
    "nome": "Ficção Científica",
    "filmes": [
      {
        "_id": "613be41ddb9c47fb90d20f04",
        "titulo": "Matrix", 
        "ano": 1999,
        "diretor": "Lana Wachowski, Lilly Wachowski",
        "genero": "Ação, Ficção Científica",
        "capaUrl": "https://media.fstatic.com/Dsnc8_BpNuQaIP04acXtB2V8sU0=/322x478/smart/filters:format(webp)/media/movies/covers/2011/07/6aa590bdfc94c6589dba4dc303057495.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20f10",
        "titulo": "Interestelar",
        "ano": 2014,
        "diretor": "Christopher Nolan",
        "genero": "Ficção Científica",
        "capaUrl": "https://ucicinemas.com.br/Content/Upload/Filmes/Posters/12571/filme_12571.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20f11",
        "titulo": "Blade Runner 2049",
        "ano": 2017,
        "diretor": "Denis Villeneuve",
        "genero": "Ficção Científica",
        "capaUrl": "https://movienonsense.com/wp-content/uploads/2017/10/blade-runner-2049.jpg?w=1200"
      },
      {
        "_id": "613be41ddb9c47fb90d20f12",
        "titulo": "O Exterminador do Futuro",
        "ano": 1984,
        "diretor": "James Cameron",
        "genero": "Ficção Científica",
        "capaUrl": "https://br.web.img3.acsta.net/medias/nmedia/18/92/90/99/20224665.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20f13",
        "titulo": "A Chegada",
        "ano": 2016,
        "diretor": "Denis Villeneuve",
        "genero": "Ficção Científica",
        "capaUrl": "https://br.web.img3.acsta.net/pictures/16/10/19/01/57/552532.jpg"
      }
    ]
  },
  {
    "_id": "613be41ddb9c47fb90d20e04",
    "nome": "Drama",
    "filmes": [
      {
        "_id": "613be41ddb9c47fb90d20f14",
        "titulo": "Forrest Gump",
        "ano": 1994,
        "diretor": "Robert Zemeckis",
        "genero": "Drama",
        "capaUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsWf23wY_bbcZzjzdpAI3Dw4Kc8xHBIYVXA&s"
      },
      {
        "_id": "613be41ddb9c47fb90d20f15",
        "titulo": "The Shawshank Redemption",
        "ano": 1994,
        "diretor": "Frank Darabont",
        "genero": "Drama",
        "capaUrl": "https://upload.wikimedia.org/wikipedia/pt/d/d2/The_Shawshank_Redemption_p%C3%B4ster.png"
      },
      {
        "_id": "613be41ddb9c47fb90d20f16",
        "titulo": "Clube da Luta",
        "ano": 1999,
        "diretor": "David Fincher",
        "genero": "Drama",
        "capaUrl": "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20f17",
        "titulo": "O Poderoso Chefão",
        "ano": 1972,
        "diretor": "Francis Ford Coppola",
        "genero": "Drama",
        "capaUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7qVveFZtjzL0dWoWnpFiFvF1yKJmLjNy5w&s"
      },
      {
        "_id": "613be41ddb9c47fb90d20f18",
        "titulo": "A Vida é Bela",
        "ano": 1997,
        "diretor": "Roberto Benigni",
        "genero": "Drama",
        "capaUrl": "https://br.web.img3.acsta.net/medias/nmedia/18/87/87/63/19962446.jpg"
      }
    ]
  },
  {
    "_id": "613be41ddb9c47fb90d20e05",
    "nome": "Fantasia",
    "filmes": [
      {
        "_id": "613be41ddb9c47fb90d20f19",
        "titulo": "O Senhor dos Anéis: A Sociedade do Anel",
        "ano": 2001,
        "diretor": "Peter Jackson",
        "genero": "Fantasia",
        "capaUrl": "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20f20",
        "titulo": "Harry Potter e a Pedra Filosofal",
        "ano": 2001,
        "diretor": "Chris Columbus",
        "genero": "Fantasia",
        "capaUrl": "https://upload.wikimedia.org/wikipedia/pt/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20f21",
        "titulo": "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
        "ano": 2005,
        "diretor": "Andrew Adamson",
        "genero": "Fantasia",
        "capaUrl": "https://br.web.img3.acsta.net/medias/nmedia/18/90/59/44/20103781.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20f22",
        "titulo": "O Labirinto do Fauno",
        "ano": 2006,
        "diretor": "Guillermo del Toro",
        "genero": "Fantasia",
        "capaUrl": "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/14/49/19872468.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20f04",
        "titulo": "Matrix", 
        "ano": 1999,
        "diretor": "Lana Wachowski, Lilly Wachowski",
        "genero": "Ação, Fantasia",
        "capaUrl": "https://media.fstatic.com/Dsnc8_BpNuQaIP04acXtB2V8sU0=/322x478/smart/filters:format(webp)/media/movies/covers/2011/07/6aa590bdfc94c6589dba4dc303057495.jpg"
      }
    ]
  }
];

router.get('/', function(req, res, next) {
  res.json(CATEGORIAS);
});

module.exports = router;

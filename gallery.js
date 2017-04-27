var chico = [
  { description: "One Mile",
    picture: "https://s-media-cache-ak0.pinimg.com/736x/ed/8c/9d/ed8c9d06c598f8e60c0edb2fe0a1a83e.jpg",
    from: "https://www.pinterest.com/pin/76772368623100681/"
  },
  { description: "Monkey Face",
    picture: "https://s3.amazonaws.com/storage.filemobile.com/storage/25463209/15",
    from: "http://ulocal.kcra.com/mediadetail/25463209-Monkey-Face-in-Bidwell-Park,-C?gid=79861&uid=&sort=upload%20DESC&offset=2"
  },
  { description: "Sierra Nevada Brewery",
    picture: "https://assets0.roadtrippers.com/uploads/poi_gallery_image/image/319751369/-strip_-quality_60_-interlace_Plane_-resize_1024x480_U__-gravity_center_-extent_1024x480/poi_gallery_image-image-c111cbe1-205b-46ea-a7f8-af850f663187.jpg",
    from: "https://roadtrippers.com/us/chico-ca/food-drink/sierra-nevada-brewery"
  },
  { description: "Chico State",
    picture: "http://az616578.vo.msecnd.net/files/2015/07/31/635739591948531400-1365537087_Chico%20State.jpg",
    from: "https://www.theodysseyonline.com/drinko-state-more-like-chico-state"
  },
  { description: "Tin Roof Bakery",
    picture: "https://static1.squarespace.com/static/52e04dafe4b092255908c189/52ee8fabe4b0358dd4deff42/52f54e32e4b056ca2bf97628/1430475839504/Tin+Roof+Bakery-19.jpg",
    from: "http://www.replacepositioning.com/reinventing/"
  }
];
var current = "";

function shuffleGallery()
{
  do
  {
    var i = Math.floor(Math.random() * chico.length);
  }while(current == chico[i])
  current = chico[i];
  document.getElementById("picture").src = current.picture;
  document.getElementById("caption").innerHTML = current.description;
  document.getElementById("source").innerHTML = current.from;
}

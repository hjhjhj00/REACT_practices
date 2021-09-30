import Potatos from './Potatos.js';

function Food({names,imgs}){
  return (
    <>
  <h4>Name: {names}</h4>
  <img src = {imgs}/>
  </>
    );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function Food0() {
  return(
  <>
  <div className="App">Hello!
  </div>
  <Food fav = 'kimchi'/>
  <Potatos /><Potatos />
  {foodILike.map(each=>console.log("hi"),<Food names={each.name} imgs={each.image}/>)}
  </>);
  //return은 하나의 div만 가능한 듯! 그래서 <></>로 묶음.
}

export default Food0;
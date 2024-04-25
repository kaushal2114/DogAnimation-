let playstate = 'dizzy';
const dropDown = document.querySelector("#animations");
dropDown.addEventListener('change',(e)=>{
  playstate = e.target.value;
});
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const player_image = new Image(); // image() is bulit in fun
player_image.src = '/images/shadow_dog.png';

let spritWidth = 575   // --> imageWidth / column = 6876 / 12 = 573 
let spritHeight = 523   // --> imageHeight / row = 5230 / 10 = 523

let gameFrame = 0;
const constValue = 5;


let spritAnimations = [];
let animationStates = [
  {
    name: 'idle',
    frames: 7,
  },
   {

    name: 'jump',
    frames: 7,
  },
   {

    name: 'fall',
    frames: 7,
  },
   {

    name: 'run',
    frames: 9,
  },
   {

    name: 'dizzy',
    frames: 11,
  },
   {

    name: 'sit',
    frames: 5,
  },
   {

    name: 'roll',
    frames: 7,
  },
   {

    name: 'bite',
    frames: 7,
  },
   {

    name: 'ko',
    frames: 12,
  },
   {

    name: 'gethit',
    frames: 4,
  },
]
animationStates.forEach((state, index) => {
  let frames = {
    location: [],
  };
  for (let i = 0; i < state.frames; i++) {
    let positionX = spritWidth * i;
    let positionY = spritHeight * index;
    frames.location.push({ x: positionX, y: positionY });
  }
  spritAnimations[state.name] = frames;
});
console.log(spritAnimations);

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let position = Math.floor(gameFrame / constValue) % spritAnimations[playstate].location.length;
  let frameX = spritWidth * position;
  let frameY = spritAnimations[playstate].location[position].y ;

  // ctx.drawImage(Image,sx,sy,sw,sh,dx,dy,dw,dh);   example
  ctx.drawImage(player_image, frameX, frameY, spritWidth, spritHeight, 0, 0, spritWidth, spritHeight);



  gameFrame++;
  requestAnimationFrame(animate);
}
animate();

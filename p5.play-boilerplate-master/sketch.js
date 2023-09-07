var player, playerImage
var bgImage, treeImage, branch1Image, branch2Image
var ground
function preload(){
  bgImage = loadImage("assets/backround2.jpeg")
  treeImage = loadImage("assets/treebetter.png")
  branch1Image = loadImage("assets/branch1.png")
  branch2Image = loadImage("assets/betterbranch2.png")
  brickwallImage = loadImage("assets/brickwall.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = createSprite(50, 450, 50, 50);
  player.shapeColor = ("black")
  ground = createSprite (width/2,height - 10,width,40)
  ground.shapeColor = ("darkgreen")
  tree1 = createSprite (350, height/2 + 115)
  tree1.addImage (treeImage)
  tree1.scale = 3
  branch1 = createSprite (210,620)
  branch1.setCollider ("rectangle",0,0,320,100)
  branch1.addImage (branch1Image)
  branch1.scale = 0.7
  branch2 = createSprite (445, 555)
  branch2.addImage (branch2Image)
  branch2.scale = 0.45
  branch2.setCollider ("rectangle", 0,0, 370,165)
  brickwall = createSprite (620,580)
  brickwall.scale = 2
  brickwall.addImage (brickwallImage)
  brickwall.setCollider ("rectangle",0,0, 40,120)
  brickwall.debug = true
  

  
}

function draw() {
  background(bgImage);  
  drawSprites();

tree1.depth = player.depth;
player.depth = player.depth + 1;
brickwall.depth = player.depth;
player.depth = player.depth + 1;

  if (keyDown(RIGHT_ARROW)){
 player.x = player.x + 5
  }

  if (keyDown(LEFT_ARROW)){
player.x = player.x - 5
  }

  if (keyDown(UP_ARROW)){
 player.velocityY = -17
  }

  player.velocityY = player.velocityY + 1
  player.collide (ground)
  player.collide (branch1)
  player.collide (branch2)


  }
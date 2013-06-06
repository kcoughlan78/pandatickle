
//******Start of background code******

(function(){

    // display 3D content
    // Create the stage
    var stage = Sprite3D.stage();
    var container = Sprite3D.create("#container");
    stage.appendChild( container );
    //defines canvases to be used by loadhandler in game.js
    var panda1 =  Sprite3D.create("#panda1").position(-140,70,52).rotation(0,0,0).update();
    var panda2 = Sprite3D.create("#panda2").position(-130,125,172).rotation(0,0,0).update();
    var panda3 = Sprite3D.create("#panda3").position(72,-100,-1).rotation(0,0,-35).update();
    var panda4 = Sprite3D.create("#panda4").position(-10,125,170).rotation(0,0,0).update();
    //defines environment that pandas live
    var floor = Sprite3D.create("#floor").position(-220,-95,0).rotation(75,0,0).update();
    var backdrop = Sprite3D.create("#backdrop").position(-200,-230,-50).rotation(0,0,0).update();
    var hill = Sprite3D.create("#hill").position(-200,-135,-50).rotation(0,0,0).update();
    var tree_right1 = Sprite3D.create("#tree_right1").position(120,-25,80).rotation(0,0,0).update();
    var tree_right2 = Sprite3D.create("#tree_right2").position(80,-85,0).rotation(0,0,0).update();
    var tree_right3 = Sprite3D.create("#tree_right3").position(95,-140,-5).rotation(0,0,0).update();
    var tree_left1 = Sprite3D.create("#tree_left1").position(-215,-60,85).rotation(0,0,0).update();
    var tree_left2 = Sprite3D.create("#tree_left2").position(-210,-105,20).rotation(0,0,0).update();
    var tree_left3 = Sprite3D.create("#tree_left3").position(-220,-65,77).rotation(0,0,0).update();
    var tree_back1 = Sprite3D.create("#tree_back1").position(-150,-95,5).rotation(0,0,0).update();
    var backgrass = Sprite3D.create("#backgrass").position(-200,-55,-45).rotation(0,0,0).update();
    var undergrowth1 = Sprite3D.create("#undergrowth1").position(-225,140,175).rotation(0,0,0).update();
    var undergrowth2 = Sprite3D.create("#undergrowth2").position(-225,90,55).rotation(0,0,0).update();
    var pandacloud = Sprite3D.create("#pandacloud").position(-195,-205,-45).rotation(0,0,0).update();
    var ticklecloud = Sprite3D.create("#ticklecloud").position(-35,-240,-48).rotation(0,0,0).update();
    var sunlight = Sprite3D.create("#sun").position(-70,-225,-49).rotation(0,0,0).update();
    var scoreboard = Sprite3D.create("#scoreboard").position(-267,190,65).rotation(0,0,0).update();
    //add environment features to container
    container.appendChild(floor);
    container.appendChild(backdrop);
    container.appendChild(hill);
    container.appendChild(tree_right1);
    container.appendChild(tree_right2);
    container.appendChild(tree_right3);
    container.appendChild(tree_left1);
    container.appendChild(tree_left2);
    container.appendChild(tree_left3);
    container.appendChild(tree_back1);
    container.appendChild(backgrass);
    container.appendChild(undergrowth1);
    container.appendChild(undergrowth2);
    container.appendChild(sunlight);
    container.appendChild(pandacloud);
    container.appendChild(ticklecloud);
    //adds defined panda divs to container
    container.appendChild(panda1);
    container.appendChild(panda2);
    container.appendChild(panda3);
    container.appendChild(panda4);
    //adds scoreboard to the container
    container.appendChild(scoreboard);
    var timer = Sprite3D.create("#timer").position(0,0,0).rotation(0,0,0).update();
    var score = Sprite3D.create("#score").position(50,0,0).rotation(0,0,0).update();
    var gamerMsg = Sprite3D.create("#gamerMsg").position(100,0,0).rotation(0,0,0).update();
    //adds elements to the scoreboard
    scoreboard.appendChild(timer);
    scoreboard.appendChild(score);
    scoreboard.appendChild(gamerMsg);

}());

//******End of background code*******

//******Define Panda object and its behaviour******
var pandas =
{
    //image source, position and pixel details
    IMAGE: "/images/pandaspritesheet.png", SPRITE_WIDTH: 32, SPRITE_HEIGHT: 32, COLUMN_NO: 3,
    ORIGIN_X: 0, ORIGIN_Y: 0,
    //frame setting and details
    totalFrameNo: 5, currentFrameNo: 0,
    playForward: true,
    playBack: false,
    //game state defined and set
    HIDDEN: 0, PEAKED: 1, TICKLED: 2, state: this.HIDDEN,
    resetCount: 12, resetCounter: 0,
    peekingTime: undefined,

    //function to find a random time for pandas to animate
    findpeekingTime: function()
    {
        this.peekingTime = Math.floor(Math.random() * 50);
    },

    //Pandas run animation function
    runAnimation: function()
    {
        //divides the spritesheet image up to select the appropriate frame per state
        this.ORIGIN_Y = Math.floor(this.currentFrameNo / this.COLUMN_NO) * this.SPRITE_HEIGHT;
        this.ORIGIN_X = Math.floor(this.currentFrameNo % this.COLUMN_NO) * this.SPRITE_WIDTH;

        //below if statements used to discover pandas current state
        if(this.state !== this.TICKLED)
        {
            if(this.peekingTime === undefined || this.peekingTime > 0)
            {
                this.state = this.HIDDEN;
            }
            else
            {
                this.state = this.PEAKED;
            }
        }
        //the below changes the animation as per current state
        switch(this.state)
        {
            //defines hidden state
            case this.HIDDEN:
                this.currentFrameNo = 0;
                this.peekingTime--;
                break;

            //controls animation for peaked state
            case this.PEAKED:
                //if last frame is reached the playforward variable is set
                //to false so the animation can start again
                if(this.currentFrameNo === this.totalFrameNo)
                {
                    this.playForward = false;
                }
                //if the first frame is playforward is true and the animation can start again
                if(this.playForward === false && this.currentFrameNo === 0)
                {	//sets playforward to true, finds a new peekingtime, state set back to hidden
                    this.playForward = true;
                    this.findpeekingTime();
                    this.state = this.HIDDEN;
                    break;
                }


                //instruction to change up a frame if playforward is true
                //change down when false
                if(this.playForward)
                {
                    this.currentFrameNo++;
                }
                else
                {
                    this.currentFrameNo--;
                }
                break;

            //defines tickled
            case this.TICKLED:
                //assigns frame to tickled state
                this.currentFrameNo = 6;
                //update the reset counter by one
                this.resetCounter++;

                //reset the animation when restcounter is the same value as resetcount
                if(this.resetCount === this.resetCounter)
                {
                    this.state = this.HIDDEN;
                    this.playForward = true;
                    this.currentFrameNo = 0;
                    this.resetCounter = 0;
                    this.findpeekingTime();
                }
                break;
        }
    }
};
//******End of Panda object code******

//******Game code******
//defines variables that will control the scoreboard
var timer = document.querySelector("#timer");
var scoreBoard = document.querySelector("#score");
var message = document.querySelector("#gamerMsg");
//sets initial clock value
var countdownClock = 60;
//associates tick with the countdown clock
var tick = countdownClock;
//displays clockusing tier variable defined above
var display_tick = (function ()	{
    timer.innerHTML = "<p>Time left: " + tick + "</p>";
});
//removes time and inserts appropriate innerHTML
var remove_tick = (function() {
    timer.innerHTML = "<p>Time left: 0</p>";
})
//sets the interval the for countdown
var countdownTimer = setInterval( function() {
    display_tick();
    tick--;
    if(tick < 0) {
        endGame();
        remove_tick();
    }
}, 1000);

//defines stop clock
var stop = (function () {
    clearInterval(countdownTimer.interval);
});


//defines arrays needed to load canvas and audio
var pandaGang = [];
var pandaCanvases = [];
var pandaAnimationAreas = [];
var musicLib = [];

//defines the image variable as new image
var image = new Image();
//adds the load event listener so application will load images when page is refreshed or loaded
image.addEventListener("load", loadHandler, false);
//image source defined
image.src = pandas.IMAGE;
//background music for game is defined using querySelector
var gamemusic = document.querySelector("#gamemusic");
//below 3 lines load game music and assign to music library
gamemusic.addEventListener("canplaythrough", loadHandler, false);
gamemusic.load();
musicLib.push(gamemusic);
//as above except for Panda laugh
var heehee = document.querySelector("#pandalaugh");
heehee.load();
musicLib.push(heehee);
//number of areas where the panda peaks out
var peakPoints = 4;
var musicLoaded = 0;

//sets initial score
var score = 0;
var pandastickled = 0;
var gameTarget = 10;

var interval;

function loadHandler()
{
    //looks to the loadPandas function below and assigns the id created in the games background code
    image.removeEventListener("load", loadHandler, false);
    loadPandas("panda1");
    loadPandas("panda2");
    loadPandas("panda3");
    loadPandas("panda4");


    gamemusic.removeEventListener("canplaythrough", loadHandler, false);
    //adds listener for ended so when clock turns to 0 the music stops
    gamemusic.addEventListener("ended", function() {
        this.currentTime = 0;
        this.play();
    }, false);
    //sets the default for gamemusic to play on load and volume
    gamemusic.play();
    gamemusic.volume = 1;

    //calls the run animation function
    runAnimation();


    //adds initial gamemusic
    message.innerHTML = "<p>Tickle those pandas!!</p>";
}

function loadPandas(id) {
    //creates a new panda based on the definition above
    var newPanda = Object.create(pandas);
    newPanda.findpeekingTime();
    pandaGang.push(newPanda);
    //creates the canvas element that the panda will appear in
    var canvasInsert = document.createElement('canvas');
    //sets the class attribute to allow for css flexibility later
    canvasInsert.setAttribute("class", "bear");
    //sets height and width attributes
    canvasInsert.height = 32;
    canvasInsert.width = 32;
    //add the mousedown event listener
    canvasInsert.addEventListener("mousedown", mousedownHandler, false);
    //adds panda object to pandaCanvases array
    pandaCanvases.push(canvasInsert);
    //defines animation area and context as 2D
    var animationArea = canvasInsert.getContext("2d");
    //adds this instance of an animationArea to the pandaAnimationAreas array
    pandaAnimationAreas.push(animationArea);
    //defines insert panda and looks for assigned element by id
    insertPanda = document.getElementById(id);
    //appends the canvas created above to the id assigned in the loadhandler above
    insertPanda.appendChild(canvasInsert);
}




function runAnimation()
{
    //checks that clock is running and more than zero
    if(tick > 0)
    {
        setTimeout(runAnimation, 240);
    }
    else
    {
        endGame();
    }

    //when there are panda objects in pandaGang array run animation
    for(var i = 0; i <pandaGang.length; i++)
    {
        pandaGang[i].runAnimation();
    }
    //calls render function
    render();
}

function mousedownHandler(event)
{
    //confirmTarget variable equals event.target ie in this case the cursor in on the canvas
    var confirmTarget = event.target;

    for(var i = 0; i < pandaCanvases.length; i++)
    {
        //if the panda canvases are targetted
        if(pandaCanvases[i] ===confirmTarget)
        {
            var pandas = pandaGang[i]
            //if pandas state is peaked
            if(pandas.state === pandas.PEAKED)
            {
                //change panda state to tickled
                pandas.state = pandas.TICKLED;
                //change game message
                message.innerHTML = "<p>Hee Hee</p>";
                //add one to score
                score+=10;
                pandastickled++;
                //plays the hee hee audio file
                heehee.removeEventListener("canplaythrough", loadHandler, false);
                heehee.play();
                heehee.volume = 0.6;
            }
            else
            {
                //if player clicks on the canvas when panda is hidden
                message.innerHTML = "<p>Panda is disapointed!</p>";
            }
        }
    }
}

function addScore ()
{
    var text = $("#output").text();
    $("#input_score").val(text);
}

function endGame ()
{
    stop();
    //if clock is less than 0 set gamemusic volume to 0
    if(tick < 0) {
        gamemusic.volume = 0;
    }

    //remove mousedown event listener so the player can't play after clock turns 0
    for(var i = 0; i < pandaCanvases.length; i++)
    {
        var canvasInsert = pandaCanvases[i];
        canvasInsert.removeEventListener("mousedown", mousedownHandler, false);
    }

    if(pandastickled > gameTarget) {
        var bonus = (pandastickled - gameTarget) * 5;
        score+= bonus;
        message.innerHTML = "<p>Yay! Pandas are happy</p>";
    }

    else {
        message.innerHTML = "<p>Oh no! Pandas are sad</p>";
    }
    addScore();
}

function render()
{
    scoreBoard.innerHTML = "<p>Score: <span id='output'>" + score + "</span></p>";
    for(var i = 0; i < pandaGang.length; i++)
    {
        var pandas = pandaGang[i];
        var animationArea = pandaAnimationAreas[i];
        //clears canvas of any legacy images
        animationArea.clearRect(0, 0, pandas.SPRITE_WIDTH, pandas.SPRITE_HEIGHT);

        //draws the image using attributes defined earlier
        animationArea.drawImage
            (
                image,
                pandas.ORIGIN_X, pandas.ORIGIN_Y, pandas.SPRITE_WIDTH, pandas.SPRITE_HEIGHT,
                0, 0, pandas.SPRITE_WIDTH, pandas.SPRITE_HEIGHT
            );
    }
}

function errorHandler()
{
    if(render() === false)
    {
        alert("We're sorry but your current browser doesn't support Sprite3D please use Firefox or Chrome");
    }
}


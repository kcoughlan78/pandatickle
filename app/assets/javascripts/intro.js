
		(function(){
	
		if ( Sprite3D.isSupported() ) {
			// display 3D content
			// Create the stage

			var stage = Sprite3D.stage();
			var container = Sprite3D.create("#container");
			stage.appendChild( container );
			//defines canvases to be used by loadhandler in game.js
			var panda1 =  Sprite3D.create("#panda1").position(-120,70,52).rotation(0,0,0).update();
			var panda2 = Sprite3D.create("#panda2").position(-130,70,172).rotation(0,0,0).update();
			var panda3 = Sprite3D.create("#panda3").position(-130,-115,-1).rotation(0,0,0).update();
			var panda4 = Sprite3D.create("#panda4").position(60,70,140).rotation(0,0,0).update();
			//defines environment that pandas live
			var floor = Sprite3D.create("#floor").position(-200,-95,50).rotation(90,0,0).update();
			var backdrop = Sprite3D.create("#backdrop").position(-200,-197,-140).rotation(0,0,0).update();
			var hill = Sprite3D.create("#hill").position(-200,-78,-135).rotation(0,0,0).update();
			var tree_right1 = new Array();
			var tree_right2 = new Array();
			var tree_right3 = new Array();
			var tree_left3 = new Array();
			var tree_back1 = new Array();
			var backgrass = Sprite3D.create("#backgrass").position(-192,2,-135).rotation(0,0,0).update();
			var undergrowth1 = Sprite3D.create("#undergrowth1").position(-200,85,230).rotation(0,0,0).update();
			var sunlight = new Array();
			var pandacloud = new Array();
			var ticklecloud = new Array();
			//add environment features to container
			container.appendChild(floor);
			container.appendChild(backdrop);
			container.appendChild(hill);
			container.appendChild(backgrass);
			container.appendChild(undergrowth1);
			//adds defined panda divs to container
			container.appendChild(panda1);
			container.appendChild(panda2);
			container.appendChild(panda3);
			container.appendChild(panda4);	

			for (var x=0;x<10;x++) {
            tree_right1[x] = Sprite3D.create("#tree_right1").position(120,-75,140+x).update();
            container.appendChild(tree_right1[x]);
        }

        	for (var x=0;x<10;x++) {
            tree_right2[x] = Sprite3D.create("#tree_right2").position(-50,-70,130+x).update();
            container.appendChild(tree_right2[x]);
        }

        	for (var x=0;x<10;x++) {
            tree_right3[x] = Sprite3D.create("#tree_right3").position(85,-115,-55+x).update();
            container.appendChild(tree_right3[x]);
        }

        	for (var x=0;x<10;x++) {
            tree_left3[x] = Sprite3D.create("#tree_left3").position(-180,-75,130+x).update();
            container.appendChild(tree_left3[x]);
        }

        	for (var x=0;x<10;x++) {
            tree_back1[x] = Sprite3D.create("#tree_back1").position(-150,-95,0+x).update();
            container.appendChild(tree_back1[x]);
        }

        	for (var x=0;x<5;x++) {
            sunlight[x] = Sprite3D.create("#sun").position(-50,-215,-53+x).update();
            container.appendChild(sunlight[x]);
        }

        	for (var x=0;x<2;x++) {
            pandacloud[x] = Sprite3D.create("#pandacloud").position(-175,-195,-41+x).update();
            container.appendChild(pandacloud[x]);
        }

        	for (var x=0;x<7;x++) {
            ticklecloud[x] = Sprite3D.create("#ticklecloud").position(-5,-230,-46+x).update();
            container.appendChild(ticklecloud[x]);
        }



		} else {
			// display warning or alternative content
			alert("Sorry, your browser doesn't support this content. For best results use Google Chrome or Mozilla Firefox.");
		}
}());
        var camerasetting = setInterval(function(){
            container.css("Transition", "all " + (1.9+Math.random()*1.9)+"s linear", true )
                .rotation(-5,-30,0)
                .z( Math.random() * 110 - 100 )
                .update();
        },7000);

		(function(){
	
		if ( Sprite3D.isSupported() ) {
			// display 3D content
			// Create the stage

			var stage = Sprite3D.stage();
			var introcontainer = Sprite3D.create("#introcontainer");
			stage.appendChild( introcontainer );
			//defines canvases to be used by loadhandler in game.js
			var panda1 =  Sprite3D.create("#intropanda1").position(-120,70,52).rotation(0,0,0).update();
			var panda2 = Sprite3D.create("#intropanda2").position(-130,70,172).rotation(0,0,0).update();
			var panda3 = Sprite3D.create("#intropanda3").position(-130,-115,-1).rotation(0,0,0).update();
			var panda4 = Sprite3D.create("#intropanda4").position(60,70,140).rotation(0,0,0).update();
			//defines environment that pandas live
			var floor = Sprite3D.create("#introfloor").position(-200,-95,50).rotation(90,0,0).update();
			var backdrop = Sprite3D.create("#introbackdrop").position(-200,-197,-140).rotation(0,0,0).update();
			var hill = Sprite3D.create("#introhill").position(-200,-78,-135).rotation(0,0,0).update();
			var tree_right1 = new Array();
			var tree_right2 = new Array();
			var tree_right3 = new Array();
			var tree_left3 = new Array();
			var tree_back1 = new Array();
			var backgrass = Sprite3D.create("#introbackgrass").position(-192,2,-135).rotation(0,0,0).update();
			var undergrowth1 = Sprite3D.create("#introundergrowth1").position(-200,85,230).rotation(0,0,0).update();
			var sunlight = new Array();
			var pandacloud = new Array();
			var ticklecloud = new Array();
			//add environment features to container
            introcontainer.appendChild(floor);
            introcontainer.appendChild(backdrop);
            introcontainer.appendChild(hill);
            introcontainer.appendChild(backgrass);
            introcontainer.appendChild(undergrowth1);
			//adds defined panda divs to container
            introcontainer.appendChild(panda1);
            introcontainer.appendChild(panda2);
            introcontainer.appendChild(panda3);
            introcontainer.appendChild(panda4);

			for (var x=0;x<10;x++) {
            tree_right1[x] = Sprite3D.create("#introtree_right1").position(120,-75,140+x).update();
                introcontainer.appendChild(tree_right1[x]);
        }

        	for (var x=0;x<10;x++) {
            tree_right2[x] = Sprite3D.create("#introtree_right2").position(-50,-70,130+x).update();
                introcontainer.appendChild(tree_right2[x]);
        }

        	for (var x=0;x<10;x++) {
            tree_right3[x] = Sprite3D.create("#introtree_right3").position(85,-115,-55+x).update();
                introcontainer.appendChild(tree_right3[x]);
        }

        	for (var x=0;x<10;x++) {
            tree_left3[x] = Sprite3D.create("#introtree_left3").position(-180,-75,130+x).update();
                introcontainer.appendChild(tree_left3[x]);
        }

        	for (var x=0;x<10;x++) {
            tree_back1[x] = Sprite3D.create("#introtree_back1").position(-150,-95,0+x).update();
                introcontainer.appendChild(tree_back1[x]);
        }

        	for (var x=0;x<5;x++) {
            sunlight[x] = Sprite3D.create("#introsun").position(-50,-215,-53+x).update();
                introcontainer.appendChild(sunlight[x]);
        }

        	for (var x=0;x<2;x++) {
            pandacloud[x] = Sprite3D.create("#intropandacloud").position(-175,-195,-41+x).update();
                introcontainer.appendChild(pandacloud[x]);
        }

        	for (var x=0;x<7;x++) {
            ticklecloud[x] = Sprite3D.create("#introticklecloud").position(-5,-230,-46+x).update();
                introcontainer.appendChild(ticklecloud[x]);
        }



		} else {
			// display warning or alternative content
			alert("Sorry, your browser doesn't support this content. For best results use Google Chrome or Mozilla Firefox.");
		}
}());
        var camerasetting = setInterval(function(){
            introcontainer.css("Transition", "all " + (1.9+Math.random()*1.9)+"s linear", true )
                .rotation(-5,-30,0)
                .z( Math.random() * 110 - 100 )
                .update();
        },7000);
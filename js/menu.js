//========= DRINKS =========//
// Get the modal
var modalDrinks = document.getElementById('myModalDrinks');

// Get the button that opens the modal
var btnDrinks = document.getElementById("myBtnDrinks");

// Get the <span> element that closes the modal
var spanDrinks = document.getElementsByClassName("closeDrinks")[0];

// When the user clicks on the button, open the modal 
btnDrinks.onclick = function() {
    modalDrinks.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanDrinks.onclick = function() {
    modalDrinks.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalDrinks) {
        modalDrinks.style.display = "none";
    }
}


//========= APPS =========//

// Get the modal
var modalApps = document.getElementById('myModalApps');

// Get the button that opens the modal
var btnApps = document.getElementById("myBtnApps");

// Get the <span> element that closes the modal
var spanApps = document.getElementsByClassName("closeApps")[0];

// When the user clicks on the button, open the modal 
btnApps.onclick = function() {
    modalApps.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanApps.onclick = function() {
    modalApps.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalDrinks) {
        modalApps.style.display = "none";
    }
}

//========= RAMEN =========//

// Get the modal
var modalRamen = document.getElementById('myModalRamen');

// Get the button that opens the modal
var btnRamen = document.getElementById("myBtnRamen");

// Get the <span> element that closes the modal
var spanRamen = document.getElementsByClassName("closeRamen")[0];

// When the user clicks on the button, open the modal 
btnRamen.onclick = function() {
    modalRamen.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanRamen.onclick = function() {
    modalRamen.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalRamen) {
        modalRamen.style.display = "none";
    }
}

//========= SUSHI =========//

// Get the modal
var modalSushi = document.getElementById('myModalSushi');

// Get the button that opens the modal
var btnSushi = document.getElementById("myBtnSushi");

// Get the <span> element that closes the modal
var spanSushi = document.getElementsByClassName("closeSushi")[0];

// When the user clicks on the button, open the modal 
btnSushi.onclick = function() {
    modalSushi.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanSushi.onclick = function() {
    modalSushi.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalRamen) {
        modalRamen.style.display = "none";
    }
}

//========= BURRITO =========//

// Get the modal
var modalBurrito = document.getElementById('myModalBurrito');

// Get the button that opens the modal
var btnBurrito = document.getElementById("myBtnBurrito");

// Get the <span> element that closes the modal
var spanBurrito = document.getElementsByClassName("closeBurrito")[0];

// When the user clicks on the button, open the modal 
btnBurrito.onclick = function() {
    modalBurrito.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanBurrito.onclick = function() {
    modalBurrito.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalBurrito) {
        modalBurrito.style.display = "none";
    }
}

//========= CHINESE =========//

// Get the modal
var modalChinese = document.getElementById('myModalChinese');

// Get the button that opens the modal
var btnChinese = document.getElementById("myBtnChinese");

// Get the <span> element that closes the modal
var spanChinese = document.getElementsByClassName("closeChinese")[0];

// When the user clicks on the button, open the modal 
btnChinese.onclick = function() {
    modalChinese.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanChinese.onclick = function() {
    modalChinese.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalChinese) {
        modalChinese.style.display = "none";
    }
}

//========= KIDS =========//

// Get the modal
var modalKids = document.getElementById('myModalKids');

// Get the button that opens the modal
var btnKids = document.getElementById("myBtnKids");

// Get the <span> element that closes the modal
var spanKids = document.getElementsByClassName("closeKids")[0];

// When the user clicks on the button, open the modal 
btnKids.onclick = function() {
    modalKids.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanKids.onclick = function() {
    modalKids.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalKids) {
        modalKids.style.display = "none";
    }
}

//========= DESSERTS =========//

// Get the modal
var modalDessert = document.getElementById('myModalDessert');

// Get the button that opens the modal
var btnDessert = document.getElementById("myBtnDessert");

// Get the <span> element that closes the modal
var spanDessert = document.getElementsByClassName("closeDessert")[0];

// When the user clicks on the button, open the modal 
btnDessert.onclick = function() {
    modalDessert.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanDessert.onclick = function() {
    modalDessert.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalDessert) {
        modalDessert.style.display = "none";
    }
}

//========= CATERING =========//

// Get the modal
var modalCatering = document.getElementById('myModalCatering');

// Get the button that opens the modal
var btnCatering = document.getElementById("myBtnCatering");

// Get the <span> element that closes the modal
var spanCatering = document.getElementsByClassName("closeCatering")[0];

// When the user clicks on the button, open the modal 
btnCatering.onclick = function() {
    modalCatering.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanCatering.onclick = function() {
    modalCatering.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalCatering) {
        modalCatering.style.display = "none";
    }
}

//SHOW HIDES

var fInitShowHides = function() {
        var fBtInit = function(i, node) {
            //functions--------
            var fBtClick = function(e) {
                //functions--------
                var fHideShow = function(i, node) {
                    //functions--------
                    //vars--------
                    var $node, bIsTarg, sID;
                    //code--------
						 
						  $node = $(node);
//						 console.log($(node));
                    sID = $node.attr("data-hs-id");
//						  console.log(sID+":"+sTarg);
                    if (sID) {
                        //it's a target
                        if (sID === sTarg) {
                            $node.show();
                        } else {
                            $node.hide();
                        }
                    } else {
                        //it's a button
                    }
                }; //vars--------
                var $nodeBt, $group;
                //code--------

                $nodeBt = $(this);
                //course_XY.fAddSimpleStatement($nodeBt.attr("id"));
                sGroup = $nodeBt.attr("data-hs-group");
                sTarg = $nodeBt.attr("data-hs-target");
                $group = $("[data-hs-group='" + sGroup + "']");
                $group.each(fHideShow);
            };
            //vars--------
            var $nodeBt;
            //code--------
            $nodeBt = $(node).click(fBtClick);
        };
        var fTargInit = function(i, node) {
            //functions--------
            //var f=function(){};
            //vars--------
            var $nodeTarg;
            //code--------
            $nodeTarg = $(node).hide();
        };
        //vars--------
        var $nodes, s, n, b, $nodeTargs, $nodeBts;
        //code--------

        $nodeBts = $("[data-hs-target]");
        $nodeTargs = $("[data-hs-id]");
        $nodeBts.each(fBtInit);
        $nodeTargs.each(fTargInit);
	
    };

// SLIDER
window.fPgStart_XY = function() {
    var fSliderStart = function() {
        var fHideTempBts = function() {
            var $bt, n, s, b;
            n = 0;
            do {
                n++;
                s = "#bt" + n;
                $bt = $(s);
					
                if ($bt && $bt.length > 0) {
                    $bt.hide();
						 
						 if (!b){
						 $bt.click();
						 b=true;
					 };
						 
                }else{
                	return;
                }
				
					
            } while ($bt && $bt.length > 0);


        };
        var fChange = function() {
            var $bt, n, s;
            n = $slider.slider("getValue");
            s = "#bt" + n;
            $bt = $(s);
            if ($bt && $bt.length > 0) {
                $bt.click();

            }
        };

        var $slider;
        fHideTempBts();
		 
//		 console.log("fInitShowHides??")
		  fInitShowHides();
        $slider = $("#slider1");
        $slider.on("slideStop", fChange);
        $slider.slider();
//		 console.log($slider);
    };

//	console.log("Start");
   fSliderStart();
	
	//simulate click
	$("input#bt1").trigger("click");
};

$(window.fPgStart_XY);


var list1 = document.getElementById('extra1');
var list2 = document.getElementById('extra2');
var extraBtn = document.getElementById('nextBtn');

extraBtn.onclick = function() {
	if (list1.style.display === 'block' || list1.style.display === '') {
	   list1.style.display = 'none';
		list2.style.display = 'block';
		$( "#nextBtn" ).addClass("flip");
		
	} else if (list2.style.display === 'block') {
	   list2.style.display = 'none';
		list1.style.display = 'block';
		$( "#nextBtn" ).removeClass("flip");
	}
	
};

$(".container-fluid.slide1 img, .container-fluid.slide2 img, .container-fluid.slide3 img").on("mouseover",function(){
   $(this).attr("src", $(this).attr("src").split(".png").join("hover.png") );
})

$(".container-fluid.slide1 img, .container-fluid.slide2 img, .container-fluid.slide3 img").on("mouseout",function(){
   $(this).attr("src", $(this).attr("src").split("hover.png").join(".png") );
})

//========= GAME ICONS =========//

$("#noMeat").on("click",function(){
	$("input#bt3").trigger("click");
});
$("#tofu").on("click",function(){
	addBowlItem("tofu");
	$("input#bt3").trigger("click");
});
$("#shrimp").on("click",function(){
	addBowlItem("shrimp");
	$("input#bt3").trigger("click");
});
$("#pork").on("click",function(){
	addBowlItem("pork");
	$("input#bt3").trigger("click");
});
$("#chicken").on("click",function(){
	addBowlItem("chicken");
	$("input#bt3").trigger("click");
});
$("#beef").on("click",function(){
	addBowlItem("beef");
	$("input#bt3").trigger("click");
});
$("#egg").on("click",function(){
	addBowlItem("egg");
});
$("#seaweed").on("click",function(){
	addBowlItem("seaweed");
});
$("#chili").on("click",function(){
	addBowlItem("chili");
});

$("#garlic").on("click",function(){
	addBowlItem("garlic");
});

$("#bamboo").on("click",function(){
	addBowlItem("bamboo");
});

$("#mushroom").on("click",function(){
	addBowlItem("mushroom");
});

$("#xtraNoodle").on("click",function(){
	addBowlItem("xtraNoodle");
});

$("#naruto").on("click",function(){
	addBowlItem("naruto");
});

$("#sprout").on("click",function(){
	addBowlItem("sprout");
});

$("#cabbage").on("click",function(){
	addBowlItem("cabbage");
});

$("#onion").on("click",function(){
	addBowlItem("onion");
});

$("#vinegar").on("click",function(){
	addBowlItem("vinegar");
});

$("#sesame").on("click",function(){
	addBowlItem("sesame");
});

$("#corn").on("click",function(){
	addBowlItem("corn");
});

$("#carrot").on("click",function(){
	addBowlItem("carrot");
});

$("#extraMeat").on("click",function(){
	addBowlItem("extraMeat");
});


var bowlPickedFoods = [];
var gameOutcomes = [
		["top:150px;left:150px"],
		["top:150px;left:60px","top:150px;left:240px"],
		["top:50px;left:150px","top:150px;left:240px","top:150px;left:60px"],
		["top:50px;left:150px","top:97px;left:240px","top:150px;left:60px","top:205px;left:230px"],
		["top:50px;left:150px","top:97px;left:240px","top:105px;left:60px","top:205px;left:230px","top:190px;left:86px"],
		["top:50px;left:150px","top:97px;left:240px","top:105px;left:60px","top:205px;left:230px","top:190px;left:86px", "top:245px;left:157px"],
		["top:50px;left:150px","top:97px;left:240px","top:105px;left:60px","top:205px;left:230px","top:190px;left:86px", "top:245px;left:157px","top:140px;left:155px"]];

function addBowlItem(foodType){
	
	if(bowlPickedFoods.length == 5 ){
		alert("Choose wisely. You only have one choice left!");
	}
	
	if(bowlPickedFoods.length<7){
		bowlPickedFoods.push(foodType);
		console.log(bowlPickedFoods);
		updateGameBowl();
	}else{
		$('.thank-you').show();
	}
}

function updateGameBowl(){
	$(".bowlIcons div").remove();
	var gameOutcome = gameOutcomes[bowlPickedFoods.length-1];
	
	//console.log(gameOutcome);
	
	$(bowlPickedFoods).each(function(i){
		$(".bowlIcons").append("<div class='game-"+this+"' style='"+gameOutcome[i]+"'></div>");
	})
}


	$("input#bt2").on("click",function(){
			$(".food-title").hide();
	});

//========= BOWLS =========//
	$("#miso").mouseenter (function() {
	  $('.bowl-broth1').show();
	  $('.miso-title').show();
	  $('.bowl-broth2').hide();
	  $('.bowl-broth3').hide();
	  $('.tonkatsu-title').hide();
	  $('.shoyu-title').hide();
	  $('.default').hide();
	  $('.default-title').hide();
	  $('.miso-title').removeClass("red");
	 });

	$("#miso").mouseleave(function() {
	  $('.bowl-broth1').hide();
	  $('.miso-title').hide();
	  $('.bowl-broth2').hide();
	  $('.bowl-broth3').hide();
	  $('.tonkatsu-title').hide();
	  $('.shoyu-title').hide();
	  $('.default').show();
	  $('.default-title').hide();
	  $('.miso-title').addClass("red");
	});

	$("#miso").click(function() {
	  $('#miso').off('mouseleave');
	  $('.bowl-broth1').show();
	  $('.miso-title').show();
	  $('.bowl-broth2').hide();
	  $('.bowl-broth3').hide();
	  $('.default').hide();
	  $("input#bt2").trigger("click");
	 });


	 $("#tonkatsu").mouseenter(function() {
		  $('.bowl-broth2').show();
		  $('.tonkatsu-title').show();
		  $('.bowl-broth1').hide();
		  $('.bowl-broth3').hide();
		  $('.miso-title').hide();
		  $('.shoyu-title').hide();
		  $('.default').hide();
		  $('.default-title').hide();
		  $('.tonkatsu-title').removeClass("red");
	 });

	$("#tonkatsu").mouseleave(function() {
		  $('.bowl-broth2').hide();
		  $('.tonkatsu-title').hide();
		  $('.bowl-broth1').hide();
		  $('.bowl-broth3').hide();
		  $('.miso-title').hide();
		  $('.shoyu-title').hide();
		  $('.default').show();
		  $('.default-title').hide();
		  $('.tonkatsu-title').addClass("red");
	 });

	$("#tonkatsu").click(function() {
		 $('#tonkatsu').off('mouseleave');
		  $('.bowl-broth2').show();
		  $('.tonkatsu-title').show();
		  $('.bowl-broth1').hide();
		  $('.bowl-broth3').hide();
		  $('.miso-title').hide();
		  $('.shoyu-title').hide();
		  $('.default').hide();
		  $('.default-title').hide();
		  $("input#bt2").trigger("click");
	 });

	 $("#shoyu").mouseenter(function() {
		  $('.bowl-broth3').show();
		  $('.shoyu-title').show();
		  $('.bowl-broth1').hide();
		  $('.bowl-broth2').hide();
		  $('.miso-title').hide();
		  $('.tonkatsu-title').hide();
		  $('.default').hide();
		  $('.default-title').hide();
		 $('.shoyu-title').removeClass("red");
	 });
	
	$("#shoyu").mouseleave(function() {
		  $('.bowl-broth3').hide();
		  $('.shoyu-title').hide();
		  $('.bowl-broth1').hide();
		  $('.bowl-broth2').hide();
		  $('.miso-title').hide();
		  $('.tonkatsu-title').hide();
		  $('.default').show();
		  $('.default-title').hide();
		  $('.shoyu-title').addClass("red");
	 });
	
	$("#shoyu").click(function() {
		  $('#shoyu').off('mouseleave');
		  $('.bowl-broth3').show();
		  $('.shoyu-title').show();
		  $('.bowl-broth1').hide();
		  $('.bowl-broth2').hide();
		  $('.miso-title').hide();
		  $('.tonkatsu-title').hide();
		  $('.default').hide();
		  $('.default-title').hide();
		  $("input#bt2").trigger("click");
	 });

//========= MEAT TITLES =========//
 $("#beef").mouseenter(function() {
		   $('.beef-title').show();
	 });
	
	$("#beef").mouseleave(function() {
		  $('.beef-title').hide();
	 });
	
	$("#beef").click(function() {
		  $('.beef-title').show();
		  $("input#bt3").trigger("click");
	 });

 $("#chicken").mouseenter(function() {
		   $('.chicken-title').show();
	 });
	
	$("#chicken").mouseleave(function() {
		  $('.chicken-title').hide();
	 });
	
	$("#chicken").click(function() {
		  $('.chicken-title').show();
		  $("input#bt3").trigger("click");
	 });

 $("#pork").mouseenter(function() {
		   $('.pork-title').show();
	 });
	
	$("#pork").mouseleave(function() {
		  $('.pork-title').hide();
	 });
	
	$("#pork").click(function() {
		  $('.pork-title').show();
		  $("input#bt3").trigger("click");
	 });

 $("#shrimp").mouseenter(function() {
		   $('.shrimp-title').show();
	 });
	
	$("#shrimp").mouseleave(function() {
		  $('.shrimp-title').hide();
	 });
	
	$("#shrimp").click(function() {
		  $('.shrimp-title').show();
		  $("input#bt3").trigger("click");
	 });

 $("#tofu").mouseenter(function() {
		   $('.tofu-title').show();
	 });
	
	$("#tofu").mouseleave(function() {
		  $('.tofu-title').hide();
	 });
	
	$("#tofu").click(function() {
		  $('.tofu-title').show();
		  $("input#bt3").trigger("click");
	 });

 $("#noMeat").mouseenter(function() {
		   $('.nomeat-title').show();
	 });
	
	$("#noMeat").mouseleave(function() {
		  $('.nomeat-title').hide();
	 });
	
	$("#noMeat").click(function() {
		  $('.nomeat-title').show();
		  $("input#bt3").trigger("click");
	 });

//========= VEGGIE TITLES =========//

 $("#egg").mouseenter(function() {
		   $('.egg-title').show();
	 });
	
	$("#egg").mouseleave(function() {
		  $('.egg-title').hide();
	 });
	
	$("#egg").click(function() {
		  $('.egg-title').show();
	 });

 $("#seaweed").mouseenter(function() {
		   $('.seaweed-title').show();
	 });
	
	$("#seaweed").mouseleave(function() {
		  $('.seaweed-title').hide();
	 });
	
	$("#seaweed").click(function() {
		  $('.seaweed-title').show();
	 });

 $("#chili").mouseenter(function() {
		   $('.chili-title').show();
	 });
	
	$("#chili").mouseleave(function() {
		  $('.chili-title').hide();
	 });
	
	$("#chili").click(function() {
		  $('.chili-title').show();
	 });

 $("#garlic").mouseenter(function() {
		   $('.garlic-title').show();
	 });
	
	$("#garlic").mouseleave(function() {
		  $('.garlic-title').hide();
	 });
	
	$("#garlic").click(function() {
		  $('.garlic-title').show();
	 });

 $("#bamboo").mouseenter(function() {
		   $('.bamboo-title').show();
	 });
	
	$("#bamboo").mouseleave(function() {
		  $('.bamboo-title').hide();
	 });
	
	$("#bamboo").click(function() {
		  $('.bamboo-title').show();
	 });

 $("#mushroom").mouseenter(function() {
		   $('.mushroom-title').show();
	 });
	
	$("#mushroom").mouseleave(function() {
		  $('.mushroom-title').hide();
	 });
	
	$("#mushroom").click(function() {
		  $('.mushroom-title').show();
	 });
 
$("#xtraNoodle").mouseenter(function() {
		   $('.noodle-title').show();
	 });
	
	$("#xtraNoodle").mouseleave(function() {
		  $('.noodle-title').hide();
	 });
	
	$("#xtraNoodle").click(function() {
		  $('.noodle-title').show();
	 });

$("#naruto").mouseenter(function() {
		   $('.naruto-title').show();
	 });
	
	$("#naruto").mouseleave(function() {
		  $('.naruto-title').hide();
	 });
	
	$("#naruto").click(function() {
		  $('.naruto-title').show();
	 });

$("#sprout").mouseenter(function() {
		   $('.sprout-title').show();
	 });
	
	$("#sprout").mouseleave(function() {
		  $('.sprout-title').hide();
	 });
	
	$("#sprout").click(function() {
		  $('.sprout-title').show();
	 });

$("#cabbage").mouseenter(function() {
		   $('.cabbage-title').show();
	 });
	
	$("#cabbage").mouseleave(function() {
		  $('.cabbage-title').hide();
	 });
	
	$("#cabbage").click(function() {
		  $('.cabbage-title').show();
	 });

$("#onion").mouseenter(function() {
		   $('.onion-title').show();
	 });
	
	$("#onion").mouseleave(function() {
		  $('.onion-title').hide();
	 });
	
	$("#onion").click(function() {
		  $('.onion-title').show();
	 });


$("#vinegar").mouseenter(function() {
		   $('.vinegar-title').show();
	 });
	
	$("#vinegar").mouseleave(function() {
		  $('.vinegar-title').hide();
	 });
	
	$("#vinegar").click(function() {
		  $('.vinegar-title').show();
	 });

$("#sesame").mouseenter(function() {
		   $('.sesame-title').show();
	 });
	
	$("#sesame").mouseleave(function() {
		  $('.sesame-title').hide();
	 });
	
	$("#sesame").click(function() {
		  $('.sesame-title').show();
	 });


$("#corn").mouseenter(function() {
		   $('.corn-title').show();
	 });
	
	$("#corn").mouseleave(function() {
		  $('.corn-title').hide();
	 });
	
	$("#corn").click(function() {
		  $('.corn-title').show();
	 });

$("#carrot").mouseenter(function() {
		   $('.carrot-title').show();
	 });
	
	$("#carrot").mouseleave(function() {
		  $('.carrot-title').hide();
	 });
	
	$("#carrot").click(function() {
		  $('.carrot-title').show();
	 });

$("#extraMeat").mouseenter(function() {
		   $('.extraMeat-title').show();
	 });
	
	$("#extraMeat").mouseleave(function() {
		  $('.extraMeat-title').hide();
	 });
	
	$("#extraMeat").click(function() {
		  $('.extraMeat-title').show();
	 });



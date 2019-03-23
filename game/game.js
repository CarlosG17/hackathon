/* global $ */
var facts = ["Nine-tenths of all solid waste in the United States does not get recycled.",
'Landfills are among the biggest contributors to soil pollution – roughly 80% of the items buried in landfills could be recycled.',
'Although 75% of America’s waste is recyclable, we only recycle around 30% of it. Turns out',
'A single recycled plastic bottle saves enough energy to run a 100-watt bulb for 4 hours. It also creates 20% less air pollution and 50% less water pollution than would be created when making a new bottle.',
'Recycling plastic saves twice as much energy as it takes to burn it.'];
var game = false;
var totalPoints = 0;

var basketball = $("#basketball");
var paper = $("#paper");
var plastic = $("#plastic");
var glass = $("#glass");

var trashTypes=["paper", "plastic", "glass"];

$("#start").click(function(){
    if(game===false){
        game=true;
        verifyCollision();
        move();
        setTimeout(function(){ 
            console.log("hello");
            localStorage.setItem("score", totalPoints);
            window.location.href = '../ending/ending.html';
        }, 60000);
    }
});

$("#shoot").click(function(){
    if(game){
        dropBasketball();
    }
});

function move(){
    $("#hoop").animate({
        marginLeft: "80%"
    }, 3000, function(){
        $("#hoop").animate({
            marginLeft: "0"
        }, 3000, function(){
           move();
        });
    });
}

function dropBasketball(){
    basketball.animate({
        marginTop: "50%"
    }, 400, function(){
        verifyCollision();
        ball();
    });
}

function verifyCollision(){
    // //lands in paper
    if((basketball.position().left+25) > paper.position().left && (basketball.position().left+25) < (paper.position().left+250)){
        console.log("paper");
        if(basketball.data().type === "paper"){
            console.log("1 point for paper");
            totalPoints+=1;
        }
    }
    
    // //lands in plastic
    if((basketball.position().left+25) > plastic.position().left && (basketball.position().left+25) < (plastic.position().left+250)){
        console.log("plastic");
        if(basketball.data().type === "plastic"){
            console.log("5 points for plastic");
            totalPoints+=5;
        }
    }
    
    // //lands in glass
    if((basketball.position().left+25) > glass.position().left && (basketball.position().left+25) < (glass.position().left+250)){
        console.log("glass");
        if(basketball.data().type === "glass"){
            console.log("10 points for glass");
            totalPoints+=10;
        }
    }
    $("#counterValue").html("Points: <span id='score'>" +totalPoints+ "</span>");
}

var type;
function ball(){
    type = trashTypes[Math.floor(Math.random()*trashTypes.length)];
    basketball.data("type", type);
    basketball.addClass(type);
    // basketball.text(type);
    basketball.css("marginTop", "");
    if(type === "plastic"){
        basketball.css("background-image", "url('plastic.png')");
    }else if(type === "paper"){
        basketball.css("background-image", "url('paper.png')");
    }else if(type === "glass"){
        basketball.css("background-image", "url('glass.png')");
    }
    $("#facts").text(facts[Math.floor(Math.random()*facts.length)]);
}
ball();

$("#counterValue").html("Points: <span id='score'>" +totalPoints+ "</span>");

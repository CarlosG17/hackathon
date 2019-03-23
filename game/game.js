console.log("a");
var game = false;
var totalPoints = 0;
var listenForCollision = false;

var basketball = $("#basketball")
var paper = $("#paper");
var plastic = $("#plastic");
var glass = $("#glass");

var trashTypes=["paper", "plastic", "glass"]

$("#right").click(function(){
    //declares position as a variable
    game=true;
    verifyCollision();
    move();
    setTimeout(function(){ 
        console.log("hello");
        localStorage.setItem("score", totalPoints);
    }, 30000);
});

$("#shoot").click(function(){
    if(game){
        dropBasketball();
    }
});

function move(){
    console.log("e")
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
    listenForCollision = true;
    basketball.animate({
        marginTop: "100%"
    }, 2000, function(){
        verifyCollision()
        ball()
    });
}

function verifyCollision(){
    
    var horizontalCollision;
    var verticalCollision;
    console.log(basketball.data())

    //lands in paper
    if((basketball.position().left+25) > paper.position().left && (basketball.position().left+25) < (paper.position().left+200)){
        horizontalCollision=true;
        console.log("paper");
        if(basketball.data().type === "paper"){
            console.log("1 point for paper")
            totalPoints+=1;
        }
    }else
    
    // //lands in plastic
    if((basketball.position().left+25) > plastic.position().left && (basketball.position().left+25) < (plastic.position().left+200)){
        horizontalCollision=true;
        console.log("plastic")
        if(basketball.data().type === "plastic"){
            console.log("5 points for plastic")
            totalPoints+=5;
        }
    }else
    
    //lands in glass
    if((basketball.position().left+25) > glass.position().left && (basketball.position().left+25) < (glass.position().left+200)){
        horizontalCollision=true;
        console.log("glass")
        if(basketball.data().type === "glass"){
            console.log("10 points for glass")
            totalPoints+=10;
        }
    }
    $("#counterValue").text("Points: " +totalPoints+ " ");
    
}

function ball(){
    basketball.data("type", trashTypes[Math.floor(Math.random()*trashTypes.length)])
    basketball.text(basketball.data().type);
    basketball.css("marginTop", "")
}
ball();

$("#counterValue").text("Points: " +totalPoints+ " ");
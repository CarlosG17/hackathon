console.log("a");
var game = false;
var listenForCollision = false;
var paper = $("#paper");
var plastic = $("#plastic");
var glass = $("#glass");

$("#right").click(function(){
    //declares position as a variable
    game=true;
    verifyCollision();
    move();
});

$("#shoot").click(function(){
    dropBasketball();
});

function move(){
    console.log("e")
    $("#hoop").animate({
        marginLeft: "80%"
    }, 1000, function(){
        $("#hoop").animate({
            marginLeft: "0"
        }, 1000, function(){
           move();
        });
    });
}

function dropBasketball(){
    listenForCollision = true;
    $("#basketball").animate({
        marginTop: "100%"
    }, 1000, function(){
        listenForCollision=false;
        verifyCollision()
    });
}

function verifyCollision(){
    var horizontalCollision;
    var verticalCollision;
    
    //vertical collision
    var basketball = $("#basketball");
    console.log(basketball.position());
    
    // //horizontal collision
    
    if(basketball.position.x > paper.position.x && basketball.position.x < (paper.position.x+"100px")){
        horizontalCollision=true;
    }
    return ;
}
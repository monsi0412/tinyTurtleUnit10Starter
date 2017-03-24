TinyTurtle.apply(window, [undefined, 400, 400]);

function square(sides){
    forward(sides);
    right(90);
    forward(sides);
    right(90);
    forward(sides);
    right(90);
    forward(sides);
    right(90);
    forward(sides);
}
function triangle(side){
    right(30);
    forward(side);
    right(120);
    forward(side);
    right(120);
    forward(side);
}
function rectangle(side1, side2){
    forward(side1);
    right(90);
    forward(side2);
    right(90);
    forward(side1);
    right(90);
    forward(side2);
}
function house(len){
    square(len);
    triangle(len);
}
function pentagon(size){
    forward(size);
    right(72);
    forward(size);
    right(72);
    forward(size);
    right(72);
    forward(size);
    right(72);
    forward(size);
}
function hexagon(size){
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);  
}
function dodecagon(size){
    forward(size);
    right(30);
    forward(size);
    right(30);
    forward(size);
    right(30);
    forward(size);
    right(30);
    forward(size);
    right(30);
    forward(size);
    right(30);
    forward(size);
    right(30);
    forward(size);
    right(30);
    forward(size);
    right(30);
    forward(size);
    right(30);
    forward(size);
    right(30);
    forward(size);  
}

// Type your function call below

dodecagon(30);
dodecagon(30);
dodecagon(30);
dodecagon(30);
dodecagon(30);
dodecagon(30);
dodecagon(30);
dodecagon(30);
dodecagon(30);
dodecagon(30);
dodecagon(30);
dodecagon(30);
triangle(15);
triangle(15);
triangle(15);
triangle(15);

triangle(20);
triangle(20);
triangle(20);
triangle(20);

triangle(25);
triangle(25);
triangle(25);
triangle(25);

square(25);
right(180);

square(25);
right(90);
square(25);
right(180);

square(25);
right(90)

square(25);
right(180);

square(25);
right(90)


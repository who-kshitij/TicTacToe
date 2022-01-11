var choice = 0;
var i = 0;
var arr = [];
arr[0] = [0, 0, 0];
arr[1] = [0, 0, 0];
arr[2] = [0, 0, 0];
var x = 0;
var y = 0;
function show(x1) {
    choice = x1;
    game();
}



function game() {
    if (i % 2 == 0) {
        switch (choice) {
            case 1:
                document.getElementById("x1").style.display = "block";
                arr[0][0] = 1;
                break;

            case 2:
                document.getElementById("x2").style.display = "block";
                arr[0][1] = 1;
                break;

            case 3:
                document.getElementById("x3").style.display = "block";
                arr[0][2] = 1;
                break;

            case 4:
                document.getElementById("x4").style.display = "block";
                arr[1][0] = 1;
                break;

            case 5:
                document.getElementById("x5").style.display = "block";
                arr[1][1] = 1;
                break;

            case 6:
                document.getElementById("x6").style.display = "block";
                arr[1][2] = 1;
                break;

            case 7:
                document.getElementById("x7").style.display = "block";
                arr[2][0] = 1;
                break;

            case 8:
                document.getElementById("x8").style.display = "block";
                arr[2][1] = 1;
                break;

            case 9:
                document.getElementById("x9").style.display = "block";
                arr[2][2] = 1;
                break;
        }
        i++;
        checkrx();
    }
    else {
        switch (choice) {
            case 1:
                document.getElementById("o1").style.display = "block";
                arr[0][0] = 2;
                break;

            case 2:
                document.getElementById("o2").style.display = "block";
                arr[0][1] = 2;
                break;

            case 3:
                document.getElementById("o3").style.display = "block";
                arr[0][2] = 2;
                break;

            case 4:
                document.getElementById("o4").style.display = "block";
                arr[1][0] = 2;
                break;

            case 5:
                document.getElementById("o5").style.display = "block";
                arr[1][1] = 2;
                break;

            case 6:
                document.getElementById("o6").style.display = "block";
                arr[1][2] = 2;
                break;

            case 7:
                document.getElementById("o7").style.display = "block";
                arr[2][0] = 2;
                break;

            case 8:
                document.getElementById("o8").style.display = "block";
                arr[2][1] = 2;
                break;

            case 9:
                document.getElementById("o9").style.display = "block";
                arr[2][2] = 2;
                break;
        }
        i++;
        checkry();
    }
}
function checkrx() {

    // Row 1
    if (arr[0][0] == 1 && arr[0][1] == 1 && arr[0][2] == 1)
    {
        x=1;
        document.getElementById("x1").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x2").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x3").style.animation="blinks 0.4s steps(5, start) 3";
    }

    //Row 2
    if(arr[1][0] == 1 && arr[1][1] == 1 && arr[1][2] == 1)
    {
        x=1;
        document.getElementById("x4").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x5").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x6").style.animation="blinks 0.4s steps(5, start) 3";
    }

    //Row 3
    if(arr[2][0] == 1 && arr[2][1] == 1 && arr[2][2] == 1)
    {
        x=1;
        document.getElementById("x7").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x8").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x9").style.animation="blinks 0.4s steps(5, start) 3";
    }

    // Column 1
    else if((arr[0][0]==1 && arr[1][0]==1 && arr[2][0]==1))
    {
        x=1;
        document.getElementById("x1").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x4").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x7").style.animation="blinks 0.4s steps(5, start) 3";
    }

    // Column 2
    else if(arr[0][1]==1 && arr[1][1]==1 && arr[2][1]==1)
    {
        x=1;
        document.getElementById("x2").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x5").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x8").style.animation="blinks 0.4s steps(5, start) 3";
    }
    
    // Column 3
    if(arr[0][2]==1 && arr[1][2]==1 && arr[2][2]==1)
    {
        x=1;
        document.getElementById("x3").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x6").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x9").style.animation="blinks 0.4s steps(5, start) 3";
    }

    // Diagonal 1
    else if(arr[0][0]==1 && arr[1][1]==1 && arr[2][2]==1)
    {
        x=1;
        document.getElementById("x1").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x5").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x9").style.animation="blinks 0.4s steps(5, start) 3";
    }

    // Diagonal 2
    else if(arr[0][2]==1 && arr[1][1]==1 && arr[2][0]==1)
    {
        x=1;
        document.getElementById("x3").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x5").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("x7").style.animation="blinks 0.4s steps(5, start) 3";
    }

    if(x==1)
    {
        document.getElementById("winx").style.display="flex";
    }
}
function checkry() {
    // Row 1
    if (arr[0][0] == 2 && arr[0][1] == 2 && arr[0][2] == 2)
    {
        y=1;
        document.getElementById("o1").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o2").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o3").style.animation="blinks 0.4s steps(5, start) 3";
    }

    //Row 2
    if(arr[1][0] == 2 && arr[1][1] == 2 && arr[1][2] == 2)
    {
        y=1;
        document.getElementById("o4").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o5").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o6").style.animation="blinks 0.4s steps(5, start) 3";
    }

    //Row 3
    if(arr[2][0] == 2 && arr[2][1] == 2 && arr[2][2] == 2)
    {
        y=1;
        document.getElementById("o7").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o8").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o9").style.animation="blinks 0.4s steps(5, start) 3";
    }

    // Column 1
    else if((arr[0][0]==2 && arr[1][0]==2 && arr[2][0]==2))
    {
        y=1;
        document.getElementById("o1").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o4").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o7").style.animation="blinks 0.4s steps(5, start) 3";
    }

    // Column 2
    else if(arr[0][1]==2 && arr[1][1]==2 && arr[2][1]==2)
    {
        y=1;
        document.getElementById("o2").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o5").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o8").style.animation="blinks 0.4s steps(5, start) 3";
    }
    
    // Column 3
    if(arr[0][2]==2 && arr[1][2]==2 && arr[2][2]==2)
    {
        y=1;
        document.getElementById("o3").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o6").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o9").style.animation="blinks 0.4s steps(5, start) 3";
    }

    // Diagonal 1
    else if(arr[0][0]==2 && arr[1][1]==2 && arr[2][2]==2)
    {
        y=1;
        document.getElementById("o1").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o5").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o9").style.animation="blinks 0.4s steps(5, start) 3";
    }

    // Diagonal 2
    else if(arr[0][2]==2 && arr[1][1]==2 && arr[2][0]==2)
    {
        y=1;
        document.getElementById("o3").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o5").style.animation="blinks 0.4s steps(5, start) 3";
        document.getElementById("o7").style.animation="blinks 0.4s steps(5, start) 3";
    }
    if(y==1)
    {
        document.getElementById("winy").style.display="flex";
    }
}
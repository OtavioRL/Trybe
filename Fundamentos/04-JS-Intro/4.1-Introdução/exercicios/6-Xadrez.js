const piece = "paw";


switch (piece) {
    case "bishop":
        console.log("diagonals")
        break;
    case "rook":
        console.log("horizontal and vertical")
        break;
    case "pawn":
        console.log("two squares foward on the first move, and one square foward after the first move")
        break;
    case "queen":
        console.log("horizontal, vertical and diagonals")
        break;            
    case "king":
        console.log("horizontal, vertical and diagonals but only one square")
        break;
    case "knight":
        console.log("Two squares horizontal or vertical, and one to any side")
        break;
         
    
    default:
        console.log("No piece with that name")
        break;
}
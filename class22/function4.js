// let a = 10;

// switch(a){
//     case 10:
//         console.log("this is 10");
//         break;
//     case 20:
//         console.log("this is 20");
//         break;
//     default:
//         console.log("default");
//         break;
// }
function getHexColor(color){
    if(typeof(color) == "string"){
        switch(color){
            case "red":
                return "#ff0000";
                break;
            case "green":
                return "#00ff00";
                break;
            case "blue":
                return "#0000ff";
                break;
            case "white":
                return "#ffffff";
                break;
            case "black":
                return "#000000";
                break;
            default: 
                return "not sure";
                break;
        }
    }
    return undefined;
}
console.log(getHexColor("red"));
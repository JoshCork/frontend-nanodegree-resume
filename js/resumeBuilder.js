var formattedName = "Joshua Cork";
var formattedRole = "web developer extrodinaire";

$("#header").prepend(HTMLheaderName.replace("%data%",formattedName));
$("#header").append(HTMLheaderRole.replace('%data%',formattedRole));

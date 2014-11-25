var formattedName = "Joshua Cork";
var formattedRole = "web developer extrodinaire";

HTMLheaderName = HTMLheaderName.replace("%data%",formattedName)
HTMLheaderRole = HTMLheaderRole.replace('%data%',formattedRole)

$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);


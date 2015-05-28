var topt = 0;
var didScroll = false;
var permbox = 0;
window.onscroll = scroller;
$(document).ready(function(){
	$(window).on('resize', function(){
		checksize();
		scroller();
	});
});
function checksize(){
	if(window.innerWidth < 600){
			$("#mylife li").each(function(i, val){
					$(val).removeClass().addClass("mlleftout");
			})
	} else {
			$("#mylife li").each(function(i, val){
				if(i % 2 != 0){
					$(val).removeClass().addClass("mlrightout");
				} else {
					$(val).removeClass().addClass("mlleftout");
				}				
	});
	}
	
}
function createmylife(context){
var lineheight = context.lineheight;
var branchrad = context.branchrad;
var boxwidth = $("#mylife").find("li").eq(0).outerWidth();
permbox = boxwidth;
var boxheight = $("#mylife").find("li").eq(0).outerHeight();
eachmoment(lineheight, branchrad, boxwidth, boxheight);
checksize();
}

function eachmoment(lineheight, branchrad, boxwidth, boxheight){
	$("#mylife li").each(function(i, val){
	if(i == 0){
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	var svgNS = svg.namespaceURI;
	svg.setAttribute("id", "lifeline");
	$("#mylife").append(svg);
	var topper = document.createElementNS("http://www.w3.org/2000/svg", "line");
	topper.setAttribute("id", "topper");
	topper.setAttribute("x1", "0");
	topper.setAttribute("x2", "60");
	topper.setAttribute("y1", "0");
	topper.setAttribute("y2", "0");
	topper.setAttribute("stroke", "black");
	topper.setAttribute("stroke-width", "10");
	topper.setAttribute("opacity", "1");
	topper.setAttribute("fill", "none");
	$("#lifeline").append(topper);
	}
	trunks(i, lineheight, branchrad);
	branches(i, lineheight, branchrad, boxheight);
	positionli(i, lineheight, branchrad, boxwidth, boxheight);
	//alert("");
	
});
}
function scroller() {
    didScroll = true;
}

setInterval(function() {
    if(didScroll) {
        didScroll = false;
        var offset = $(window).scrollTop();
	 $("#mylife li").each(function(i, val){
		if(offset > (parseInt($(val).css("top"))-100)){
			if($(val).hasClass("mlleftout")){
				$(val).removeClass().addClass("mlleftin");
			}
			if($(val).hasClass("mlrightout")){
				$(val).removeClass().addClass("mlrightin");
			}
		}
		if(offset < (parseInt($(val).css("top")))){
			if($(val).hasClass("mlleftin")){
				$(val).removeClass().addClass("mlleftout");
			}
			if($(val).hasClass("mlrightin")){
				$(val).removeClass().addClass("mlrightout");
			}	
		}
	 });
    }
}, 250);

function trunks(i, lineheight, branchrad){
	var trunk = document.createElementNS("http://www.w3.org/2000/svg", "line");
	trunk.setAttribute("id", "line"+i);
	trunk.setAttribute("x1", "30");
	if(i==0){
	trunk.setAttribute("y1", ((lineheight*i)));
	}else{
	trunk.setAttribute("y1", ((lineheight*i)+((branchrad*2)*i)));
	}
	trunk.setAttribute("x2", "30");
	trunk.setAttribute("y2", (parseInt(trunk.getAttribute("y1")))+lineheight);
	trunk.setAttribute("stroke", "black");
	trunk.setAttribute("stroke-width", "10");
	trunk.setAttribute("opacity", "1");
	trunk.setAttribute("fill", "none");
	$("#lifeline").append(trunk);
	topt = parseInt(trunk.getAttribute("y2"));
}
function branches(i, lineheight, branchrad, boxheight){
	var branch = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	branch.setAttribute("id", "branch"+i);
	branch.setAttribute("cx", "30");
	branch.setAttribute("cy", (topt + branchrad));
	branch.setAttribute("r", branchrad);
	branch.setAttribute("stroke", "black");
	branch.setAttribute("stroke-width", "2");
	branch.setAttribute("opacity", "1");
	branch.setAttribute("fill", "none");
	$("#lifeline").append(branch);
	$("#lifeline").css("height", (parseInt(branch.getAttribute("cy")))+(branchrad*4));
	console.log("BOXHEIGHT:"+boxheight);
	$("#mylife").css("height", ((parseInt(branch.getAttribute("cy")))+(branchrad*4)+boxheight));
}
function positionli(i, lineheight, branchrad, boxwidth, boxheight){
	var curli = $("#mylife").find("li").eq(i);
	checksize();
	if(i == 0){
		$(curli).css("top", ((topt)-(boxheight/2.5)));
	} else {
		$(curli).css("top", ((topt)-(boxheight/2.5)));
	}
	
}

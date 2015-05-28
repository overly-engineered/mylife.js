var topt = 0;
function createmylife(context){
var lineheight = context.lineheight;
var branchrad = context.branchrad;
eachmoment(lineheight, branchrad);
}

function eachmoment(lineheight, branchrad){
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
	branches(i, lineheight, branchrad);
	positionli(i, lineheight, branchrad);
	//alert("");
	
});
}

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
	console.log(topt);
}
function branches(i, lineheight, branchrad){
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
	$("#mylife").css("height", (parseInt(branch.getAttribute("cy")))+(branchrad*4));
}
function positionli(i, lineheight, branchrad){
	var curli = $("#mylife").find("li").eq(i);
	if(i % 2 == 0){
		$(curli).css("right", "0");
	}
	if(i == 0){
		$(curli).css("top", (topt-((branchrad+(branchrad/2)))));
	} else {
		$(curli).css("top", (topt-((branchrad+(branchrad/2)))));
	}
	
}

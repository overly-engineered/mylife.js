var topt = 0;
var didScroll = false;
var permbox = 0;
var animation;
var doneload = false;
window.onscroll = scroller;
$(document).ready(function(){
	$(window).on('resize', function(){
		checksize();
		scroller();
		if(doneload == true){
			swaparrows();
		}
	});
});
function checksize(){
	if(animation == true){		
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
	} else {
		if(window.innerWidth < 600){
				$("#mylife li").each(function(i, val){
						$(val).removeClass().addClass("mlleftin");
				})
		} else {
				$("#mylife li").each(function(i, val){
					if(i % 2 != 0){
						$(val).removeClass().addClass("mlrightin");
					} else {
						$(val).removeClass().addClass("mlleftin");
					}				
		});
		}	
	}
	
}
function swaparrows(){
	$("#mylife li").each(function(i, val){
		if($("#branch"+i).attr("type") == "arrow"){
			if(window.innerWidth < 600){
				var d = $("#branch"+i).attr("d");
				var newd = d;
				console.log(d);
				if (d.indexOf("75") >= 0){
					newd = d.replace("75", "45");
				}					
				$("#branch"+i).attr("d", newd);
			} else {
				if(i % 2 != 0){
				var d = $("#branch"+i).attr("d");
				var newd = d;
				if (d.indexOf("45") >= 0){
					newd = d.replace("45", "75");
				}
				$("#branch"+i).attr("d", newd);
				}
			}
		}
	});
}
function createmylife(context){
context.lineheight = typeof context.lineheight !== 'undefined' ? context.lineheight : 300;
context.branchrad = typeof context.branchrad !== 'undefined' ? context.branchrad : 20;
context.branchwidth = typeof context.branchwidth!== 'undefined' ? context.branchwidth : "4";
context.branchtype = typeof context.branchtype !== 'undefined' ? context.branchtype : "circle";
context.branchfill = typeof context.branchfill !== 'undefined' ? context.branchfill : "none";
context.treecolor = typeof context.treecolor !== 'undefined' ? context.treecolor : "#181818";
context.treewidth = typeof context.treewidth !== 'undefined' ? context.treewidth : "4";
context.animation = typeof context.animation !== 'undefined' ? context.animation : true;
animation = context.animation;
var boxwidth = $("#mylife").find("li").eq(0).outerWidth();
permbox = boxwidth;
var boxheight = $("#mylife").find("li").eq(0).outerHeight();
if(boxheight > context.lineheight){
	boxheight = context.lineheight;
	$("#mylife li").each(function(i, val){
			$(val).css("height", boxheight);
	});
}
eachmoment(context.lineheight, context.branchrad, boxwidth, boxheight, context.treecolor, context.treewidth, context.branchwidth, context.branchtype, context.branchfill);
}

function eachmoment(lineheight, branchrad, boxwidth, boxheight, treecolor, treewidth, branchwidth, branchtype, branchfill){
	$("#mylife li").each(function(i, val){
	if(i == 0){
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	var svgNS = svg.namespaceURI;
	svg.setAttribute("id", "lifeline");
	$("#mylife").append(svg);
	var topper = document.createElementNS("http://www.w3.org/2000/svg", "line");
	topper.setAttribute("id", "topper");
	topper.setAttribute("x1", "30");
	topper.setAttribute("x2", "90");
	topper.setAttribute("y1", "0");
	topper.setAttribute("y2", "0");
	topper.setAttribute("stroke", treecolor);
	topper.setAttribute("stroke-width", treewidth);
	topper.setAttribute("opacity", "1");
	topper.setAttribute("fill", "none");
	$("#lifeline").append(topper);
	}
	trunks(i, lineheight, branchrad, treecolor, treewidth);
	branches(i, lineheight, branchrad, boxheight, treecolor, branchwidth, branchtype, branchfill, $(val).attr("data-date"));
	positionli(i, lineheight, branchrad, boxwidth, boxheight);
	
});
swaparrows();
doneload = true;
}
function scroller() {
    didScroll = true;
}

setInterval(function() {
    if(didScroll) {
        didScroll = false;
		reposition();
    }
}, 250);

function reposition(){
	if(animation == true){
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
}

function trunks(i, lineheight, branchrad, treecolor, treewidth){
	var trunk = document.createElementNS("http://www.w3.org/2000/svg", "line");
	trunk.setAttribute("id", "line"+i);
	trunk.setAttribute("x1", "60");
	if(i==0){
	trunk.setAttribute("y1", ((lineheight*i)));
	}else{
	trunk.setAttribute("y1", ((lineheight*i)+((branchrad*2)*i)));
	}
	trunk.setAttribute("x2", "60");
	trunk.setAttribute("y2", (parseInt(trunk.getAttribute("y1")))+lineheight);
	trunk.setAttribute("stroke", treecolor);
	trunk.setAttribute("stroke-width", treewidth);
	trunk.setAttribute("opacity", "1");
	trunk.setAttribute("fill", "none");
	$("#lifeline").append(trunk);
	topt = parseInt(trunk.getAttribute("y2"));
}
function branches(i, lineheight, branchrad, boxheight, treecolor, branchwidth, branchtype, branchfill, val){
	if(branchtype == "circle"){
		circlebranch(i, lineheight, branchrad, boxheight, treecolor, branchwidth, branchtype, branchfill);
	} else
	if(branchtype == "arrow"){
		arrowbranch(i, lineheight, branchrad, boxheight, treecolor, branchwidth, branchtype, branchfill);
	}
	if(branchtype == "date"){
		datebranch(i, lineheight, branchrad, boxheight, treecolor, branchwidth, branchtype, branchfill, val);
	}	
}
function circlebranch(i, lineheight, branchrad, boxheight, treecolor, branchwidth, branchtype, branchfill){
	var branch = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		branch.setAttribute("id", "branch"+i);
		branch.setAttribute("type", "circle");
		branch.setAttribute("cx", "60");
		branch.setAttribute("cy", (topt + branchrad));
		branch.setAttribute("r", branchrad);
		branch.setAttribute("stroke", treecolor);
		branch.setAttribute("stroke-width", branchwidth);
		branch.setAttribute("opacity", "1");
		branch.setAttribute("fill", branchfill);
		$("#lifeline").append(branch);
		$("#lifeline").css("height", (parseInt(branch.getAttribute("cy")))+(branchrad*4));
		$("#mylife").css("height", ((parseInt(branch.getAttribute("cy")))+(branchrad*4)+boxheight));
}
function arrowbranch(i, lineheight, branchrad, boxheight, treecolor, branchwidth, branchtype, branchfill){
	var branch = document.createElementNS("http://www.w3.org/2000/svg", "path");
		branch.setAttribute("id", "branch"+i);
		branch.setAttribute("type", "arrow");
		var direc = 0;
		if(i % 2 == 0){
			direc = 45;
		}else{
			direc = 75;
		}
		branch.setAttribute("d", "M 60 "+(topt)+ " L "+direc+ " "+(topt+branchrad)+ " L 60 "+(topt+(branchrad*2)) + " Z");
		branch.setAttribute("stroke", treecolor);
		branch.setAttribute("stroke-width", branchwidth);
		branch.setAttribute("opacity", "1");
		branch.setAttribute("fill", branchfill);
		branch.setAttribute("data-bottom", (topt+(branchrad*2)));
		$("#lifeline").append(branch);
		$("#lifeline").css("height", (parseInt(branch.getAttribute("data-bottom")))+(branchrad*4));
		$("#mylife").css("height", ((parseInt(branch.getAttribute("data-bottom")))+(branchrad*4)+boxheight));
}
function datebranch(i, lineheight, branchrad, boxheight, treecolor, branchwidth, branchtype, branchfill, val){
	var branch = document.createElementNS("http://www.w3.org/2000/svg", "text");
	branch.setAttribute("id", "branch"+i);
	branch.setAttribute("type", "text");
	branch.setAttribute("x", 0);
	branch.setAttribute("y", (topt + branchrad)+5);
	branch.setAttribute("style", "font-size:20px; font-family:Verdana;");
	branch.setAttribute("stroke", treecolor);
	/*branch.setAttribute("stroke-width", branchwidth);
	branch.setAttribute("opacity", "1");*/
	branch.setAttribute("fill", branchfill);
	$(branch).text(val);
	$("#lifeline").append(branch);
	$("#lifeline").css("height", (parseInt(topt+25))+(branchrad*4));
	$("#mylife").css("height", ((parseInt(topt+25))+(branchrad*4)+boxheight));
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

var topt = 0;
var didScroll = false;
var permbox = 0;
var animation;
var doneload = false;
var et = 0;
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
context.extratop = typeof context.extratop !== 'undefined' ? context.extratop : false;
context.extratopsize = typeof context.extratopsize !== 'undefined' ? context.extratopsize : false;
animation = context.animation;
et = context.extratopsize;
var boxwidth = $("#mylife").find("li").eq(0).outerWidth();
permbox = boxwidth;
var bh = $("#mylife").find("li").eq(0).outerHeight();
if(bh > context.lineheight){
	bh = context.lineheight;
	$("#mylife li").each(function(i, val){
			$(val).css("height", bh);
	});
}
eachmoment(context.lineheight, context.branchrad, boxwidth, bh, context.treecolor, context.treewidth, context.branchwidth, context.branchtype, context.branchfill, context.extratop, context.extratopsize);
}

function eachmoment(lh, brr, bw, bh, tc, tw, brw, brt, bf, et, ets){
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
	topper.setAttribute("stroke", tc);
	topper.setAttribute("stroke-width", tw);
	topper.setAttribute("opacity", "1");
	topper.setAttribute("fill", "none");
	$("#lifeline").append(topper);
	if(et==true){
		var extratop = document.createElementNS("http://www.w3.org/2000/svg", "line");
		extratop.setAttribute("id", "extratop");
		extratop.setAttribute("x1", "60");
		extratop.setAttribute("x2", "60");
		extratop.setAttribute("y1", "0");
		extratop.setAttribute("y2", ets);
		extratop.setAttribute("stroke", tc);
		extratop.setAttribute("stroke-width", tw);
		extratop.setAttribute("opacity", "1");
		extratop.setAttribute("fill", "none");
		$("#lifeline").append(extratop);
	}
	}

	trunks(i, lh, brr, tc, tw);
	branches(i, lh, brr, bh, tc, brw, brt, bf, $(val).attr("data-date"));
	positionli(i, lh, brr, bw, bh);
	
});
addbase(lh, tc, tw, brr);
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
			if((offset + 400) > ($(val).offset().top)){
				if($(val).hasClass("mlleftout")){
					$(val).removeClass().addClass("mlleftin");
				}
				if($(val).hasClass("mlrightout")){
					$(val).removeClass().addClass("mlrightin");
				}
			}
			if((offset +400) < (parseInt($(val).css("top")))){
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

function trunks(i, lh, brr, tc, tw){
	var trunk = document.createElementNS("http://www.w3.org/2000/svg", "line");
	trunk.setAttribute("id", "line"+i);
	trunk.setAttribute("x1", "60");
	if(i==0){
	trunk.setAttribute("y1", ((lh*i)+et));
	}else{
	trunk.setAttribute("y1", ((lh*i)+((brr*2)*i))+et);
	}
	trunk.setAttribute("x2", "60");
	trunk.setAttribute("y2", (parseInt(trunk.getAttribute("y1")))+lh);
	trunk.setAttribute("stroke", tc);
	trunk.setAttribute("stroke-width", tw);
	trunk.setAttribute("opacity", "1");
	trunk.setAttribute("fill", "none");
	$("#lifeline").append(trunk);
	topt = parseInt(trunk.getAttribute("y2"));
}
function branches(i, lh, brr, bh, tc, bw, brt, brf, val){
	if(brt == "circle"){
		circlebranch(i, lh, brr, bh, tc, bw, brt, brf);
	} else
	if(brt == "arrow"){
		arrowbranch(i, lh, brr, bh, tc, bw, brt, brf);
	}
	if(brt == "date"){
		datebranch(i, lh, brr, bh, tc, bw, brt, brf, val);
	}	
}
function circlebranch(i, lh, brr, bh, tc, bw, brt, brf){
	var branch = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		branch.setAttribute("id", "branch"+i);
		branch.setAttribute("type", "circle");
		branch.setAttribute("cx", "60");
		branch.setAttribute("cy", (topt + brr));
		branch.setAttribute("r", brr);
		branch.setAttribute("stroke", tc);
		branch.setAttribute("stroke-width", bw);
		branch.setAttribute("opacity", "1");
		branch.setAttribute("fill", brf);
		$("#lifeline").append(branch);
		$("#lifeline").css("height", (parseInt(branch.getAttribute("cy")))+(brr*4));
		$("#mylife").css("height", ((parseInt(branch.getAttribute("cy")))+(brr*4)+bh));
}
function arrowbranch(i, lh, brr, bh, tc, bw, brt, brf){
	var branch = document.createElementNS("http://www.w3.org/2000/svg", "path");
		branch.setAttribute("id", "branch"+i);
		branch.setAttribute("type", "arrow");
		var direc = 0;
		if(i % 2 == 0){
			direc = 45;
		}else{
			direc = 75;
		}
		if(i==9){
			console.log(topt);
		}
		branch.setAttribute("d", "M 60 "+((topt))+ " L "+direc+ " "+(topt+brr)+ " L 60 "+(topt+(brr*2)+1));
		if(i==9){
			debugger;
			console.log(branch.getAttribute("d"));
		}
		branch.setAttribute("stroke", tc);
		branch.setAttribute("stroke-width", bw);
		branch.setAttribute("opacity", "1");
		branch.setAttribute("fill", brf);
		branch.setAttribute("data-bottom", (topt+(brr*2)));
		$("#lifeline").append(branch);
		$("#lifeline").css("height", (parseInt(branch.getAttribute("data-bottom")))+(brr*4));
		$("#mylife").css("height", ((parseInt(branch.getAttribute("data-bottom")))+(brr*4)+bh));
}
function datebranch(i, lh, brr, bh, tc, bw, brt, brf, val){
	var branch = document.createElementNS("http://www.w3.org/2000/svg", "text");
	branch.setAttribute("id", "branch"+i);
	branch.setAttribute("type", "text");
	branch.setAttribute("x", 0);
	branch.setAttribute("y", ((topt + brr)+5));
	branch.setAttribute("style", "font-size:20px; font-family:Verdana;");
	branch.setAttribute("fill", brf);
	$(branch).text(val);
	$("#lifeline").append(branch);
	$("#lifeline").css("height", (parseInt(topt+lh))+(brr*4)-lh);
	$("#mylife").css("height", ((parseInt(topt+lh))+(brr*4)));
}
function positionli(i, lh, brr, boxwidth, bh){
	var curli = $("#mylife").find("li").eq(i);
	checksize();
	if(i == 0){
		$(curli).css("top", (((topt)-(bh/2.5))));
	} else {
		$(curli).css("top", (((topt)-(bh/2.5))));
	}
	
}

function addbase(lh, tc, tw, brr){
	$("#lifeline").css("height", (topt+(lh*2)));
	$("#mylife").css("height", (topt+(lh*2)));
	var basevert = document.createElementNS("http://www.w3.org/2000/svg", "line");
	basevert.setAttribute("id", "basevert");
	basevert.setAttribute("x1", "60");
	basevert.setAttribute("x2", "60");
	basevert.setAttribute("y1", (topt+(brr*2)));
	basevert.setAttribute("y2", (parseInt(basevert.getAttribute("y1")))+lh);
	basevert.setAttribute("stroke", tc);
	basevert.setAttribute("stroke-width", tw);
	basevert.setAttribute("opacity", "1");
	basevert.setAttribute("fill", "none");
	$("#lifeline").append(basevert);
	topt = parseInt(basevert.getAttribute("y2"));
	var basehor = document.createElementNS("http://www.w3.org/2000/svg", "line");
	basehor.setAttribute("id", "basehor");
	basehor.setAttribute("x1", "30");
	basehor.setAttribute("x2", "90");
	basehor.setAttribute("y1", (topt));
	basehor.setAttribute("y2", (topt));
	basehor.setAttribute("stroke", tc);
	basehor.setAttribute("stroke-width", tw);
	basehor.setAttribute("opacity", "1");
	basehor.setAttribute("fill", "none");
	$("#lifeline").append(basehor); 
}

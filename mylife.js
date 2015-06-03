var mltopt = 0;
var mldidScroll = false;
var mlpermbox = 0;
var mlanimation;
var mldoneload = false;
var mlgets = 0;
var mlbranchtype= "";
var mlsvgNS = "";
window.onscroll = scroller;
$(document).ready(function(){
	$(window).on('resize', function(){
		checksize();
		scroller();
		if(mldoneload == true){
			swaparrows();
		}
	});
});
function checksize(){
	if(mlanimation == true){		
		if(window.innerWidth < 600){
				$("#mylife li").each(function(i, val){
						$(val).removeClass().addClass("mlleftout");
						
				});
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
						
				});
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
			$("#lifeline").children().each(function(){
						var type = $(this).attr("type");
						if(type == "trunk" && window.innerWidth < 600){
							$(this).attr("x1", "40");
							$(this).attr("x2", "40");
						} else if(type=="trunk"){
							$(this).attr("x1", "120");
							$(this).attr("x2", "120");
						}
						if(type =="circle" && window.innerWidth < 600){
							$(this).attr("cx", "40");						
						} else if(type == "circle"){
							$(this).attr("cx", "120");
						}
						if(type =="arrow" || type == "path" || type == "dash"){
							var d = $(this).attr("d");
								var newd = d;
							if(window.innerWidth < 600){
								if($(this).attr("id")=="topper"){
									newd ="M 10 0 L 40 0 L 40 30 L 40 0 L 70 0";
								}else if(type == "arrow"){
								if (d.indexOf("M 120") >= 0){
									newd = newd.replace("M 120", "M 40");
								}
								if (d.indexOf("L 120") >= 0){
									newd = newd.replace("L 120", "L 40");
								}
								if (d.indexOf("L 105") >= 0){
									newd = newd.replace("L 105", "L 25");
								}
								if (d.indexOf("L 135") >= 0){
									newd = newd.replace("L 135", "L 25");
								}	
								} else {
									newd = newd.replace("M 120", "M 40");
									newd = newd.replace("L 120", "L 40");
									newd = newd.replace("L 120", "L 40");
									newd = newd.replace("L 120", "L 40");
								if(d.indexOf("L 100") >= 0){									
									newd = newd.replace("L 100", "L 10");
								} else {
									newd = newd.replace("L 140", "L 10");
								}
								}
								
								$(this).attr("d", newd);
							}else{								
								if($(this).attr("id")=="topper"){
									newd ="M 90 0  L 120 0  L 120 30  L 120 0  L 150 0";
								}else if(type == "arrow"){
									var str = $(this).attr("id");
									newd = newd.replace("M 40", "M 120");
									newd = newd.replace("L 40", "L 120");
									var slice = str.slice(-2);
									if(slice.indexOf("h") >= 0){
										slice = slice.replace("h", "");
									}
									if(slice % 2 == 0){										
										newd = newd.replace("L 25", "L 105");
									}else{
										newd = newd.replace("L 25", "L 135");
									}	
								} else {
									var str1 = $(this).attr("id");
									var slice1 = str1.slice(-2);
									if(slice1.indexOf("h")>=0){
										slice1 = slice1.replace("h", "");	
									}
									newd = newd.replace("M 40", "M 120");
									newd = newd.replace("L 40", "L 120");
									newd = newd.replace("L 40", "L 120");
									newd = newd.replace("L 40", "L 120");
									if(slice1 % 2 ==0){
										if(!(newd.indexOf("L 100")>=0)){
											newd = newd.replace("L 10", "L 100");
										}						
									} else {
									newd = newd.replace("L 10", "L 140");
								}
								}								
								$(this).attr("d", newd);
							}
						}
						if(type =="date" || type == "text"){
							if(window.innerWidth < 600){
								$(this).attr("x", "45");
								$(this).attr("style", "font-size:14px; font-family:Verdana;");
							}else{
								$(this).attr("x", "120");
								if($(this).attr("id") == "title"){
								$(this).attr("style", "font-size:40px; font-family:Verdana;");	
								} else {
								$(this).attr("style", "font-size:20px; font-family:Verdana;");	
								}
							}
						}
						if(type =="line" && window.innerWidth < 600 && type != "trunk"){
								
								if($(this).attr("id") == "basevert" || $(this).attr("id") =="extratop"){
									$(this).attr("x1", "40");
									$(this).attr("x2", "40");
								} else {
									$(this).attr("x1", "10");
									$(this).attr("x2", "70");
								}
						} else if(type != "trunk"){
								if($(this).attr("id") == "basevert" || $(this).attr("id") =="extratop"){
									$(this).attr("x1", "120");
									$(this).attr("x2", "120");
								} else {
									$(this).attr("x1", "90");
									$(this).attr("x2", "150");
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
context.extratopsize = typeof context.extratopsize !== 'undefined' ? context.extratopsize : 0;
context.title = typeof context.title !== 'undefined' ? context.title : "";
context.titlecolor = typeof context.titlecolor !== 'undefined' ? context.titlecolor : "";
mlanimation = context.animation;
if(context.extratop == true){
	mlgets = context.extratopsize;
} else {
	mlgets = 0;
}
mlbranchtype = context.branchtype;
var boxwidth = $("#mylife").find("li").eq(0).outerWidth();
mlpermbox = boxwidth;
var bh = $("#mylife").find("li").eq(0).outerHeight();
if(bh > context.lineheight){
	bh = context.lineheight;
	$("#mylife li").each(function(i, val){
			$(val).css("height", bh);
	});
}
eachmoment(context.lineheight, context.branchrad, boxwidth, bh, context.treecolor, context.treewidth, context.branchwidth, context.branchtype, context.branchfill, context.extratop, context.extratopsize, context.title, context.titlecolor);
}

function eachmoment(lh, brr, bw, bh, tc, tw, brw, brt, brf, et, ets, tit, titcol){
	$("#mylife li").each(function(i, val){
	if(i == 0){
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	mlsvgNS = svg.namespaceURI;
	svg.setAttribute("id", "lifeline");
	$("#mylife").append(svg);
	var topper = document.createElementNS(mlsvgNS, "path");
	topper.setAttribute("id", "topper");
	topper.setAttribute("d", "M 90 0 "+ " L 120 0 "+" L 120 30 " + " L 120 0 " + " L 150 0");
	topper.setAttribute("stroke", tc);
	topper.setAttribute("stroke-width", tw);
	topper.setAttribute("opacity", "1");
	topper.setAttribute("fill", "none");
	topper.setAttribute("type", "path");
	$("#lifeline").append(topper);
	if(tit != ""){
	var title = document.createElementNS(mlsvgNS, "text");
	title.setAttribute("id", "title");
	title.setAttribute("type", "text");
	title.setAttribute("x", 120);
	title.setAttribute("y", ((mltopt + brr)+5)+50);
	title.setAttribute("style", "font-size:50px; font-family:Verdana;");
	title.setAttribute("fill", titcol);
	title.setAttribute("text-anchor", "middle");
	title.setAttribute("type", "text");
	$(title).text(tit);
	$("#lifeline").append(title);
	mlgets=100;
	}
	if(et==true){
		var extratop = document.createElementNS(mlsvgNS, "line");
		extratop.setAttribute("id", "extratop");
		extratop.setAttribute("x1", "120");
		extratop.setAttribute("x2", "120");
		extratop.setAttribute("y1", mlgets);
		extratop.setAttribute("y2", mlgets+ets);
		extratop.setAttribute("stroke", tc);
		extratop.setAttribute("stroke-width", tw);
		extratop.setAttribute("opacity", "1");
		extratop.setAttribute("fill", "none");
		extratop.setAttribute("type", "line")
		$("#lifeline").append(extratop);
		mlgets += ets;
	}
	}

	trunks(i, lh, brr, tc, tw);
	branches(i, lh, brr, bh, tc, brw, brt, brf, $(val).attr("data-date"), tw);
	positionli(i, lh, brr, bw, bh);
});
addbase(lh, tc, tw, brr);
swaparrows();
mldoneload = true;

}
function scroller() {
    mldidScroll = true;
}

setInterval(function() {
    if(mldidScroll) {
        mldidScroll = false;
		reposition();
    }
}, 250);

function reposition(){
	if(mlanimation == true){
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
	var trunk = document.createElementNS(mlsvgNS, "line");
	trunk.setAttribute("id", "line"+i);
	trunk.setAttribute("x1", "120");
	if(i==0){
	trunk.setAttribute("y1", ((lh*i)+mlgets));
	}else{
	trunk.setAttribute("y1", ((lh*i)+((brr*2)*i))+mlgets);
	}
	trunk.setAttribute("x2", "120");
	trunk.setAttribute("y2", (parseInt(trunk.getAttribute("y1")))+lh);
	trunk.setAttribute("stroke", tc);
	trunk.setAttribute("stroke-width", tw);
	trunk.setAttribute("opacity", "1");
	trunk.setAttribute("fill", "none");
	trunk.setAttribute("type", "trunk");
	$("#lifeline").append(trunk);
	mltopt = parseInt(trunk.getAttribute("y2"));
}
function branches(i, lh, brr, bh, tc, bw, brt, brf, val, tw){
	if(brt == "circle"){
		circlebranch(i, lh, brr, bh, tc, bw, brt, brf);
	} else
	if(brt == "arrow"){
		arrowbranch(i, lh, brr, bh, tc, bw, brt, brf);
	} else
	if(brt == "date"){
		datebranch(i, lh, brr, bh, tc, bw, brt, brf, val);
	} else 
	if(brt == "dash"){
		linebranch(i, lh, brr, bh, tc, tw, brt, brf);
	}
}
function circlebranch(i, lh, brr, bh, tc, bw, brt, brf){
	var branch = document.createElementNS(mlsvgNS, "circle");
		branch.setAttribute("id", "branch"+i);
		branch.setAttribute("type", "circle");
		branch.setAttribute("cx", "120");
		branch.setAttribute("cy", (mltopt + brr));
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
	var branch = document.createElementNS(mlsvgNS, "path");
		branch.setAttribute("id", "branch"+i);
		branch.setAttribute("type", "arrow");
		var direc = 0;
		if(i % 2 == 0){
			direc = 105;
		}else{
			direc = 135;
		}
		branch.setAttribute("d", "M 120 "+((mltopt)-1)+ " L "+direc+ " "+(mltopt+brr)+ " L 120 "+(mltopt+(brr*2)+1));
		branch.setAttribute("stroke", tc);
		branch.setAttribute("stroke-width", bw);
		branch.setAttribute("opacity", "1");
		branch.setAttribute("fill", brf);
		branch.setAttribute("data-bottom", (mltopt+(brr*2)));
		$("#lifeline").append(branch);
		$("#lifeline").css("height", (parseInt(branch.getAttribute("data-bottom")))+(brr*4));
		$("#mylife").css("height", ((parseInt(branch.getAttribute("data-bottom")))+(brr*4)+bh));
}
function datebranch(i, lh, brr, bh, tc, bw, brt, brf, val){
	var branch = document.createElementNS(mlsvgNS, "text");
	branch.setAttribute("id", "branch"+i);
	branch.setAttribute("type", "text");
	branch.setAttribute("x", 120);
	branch.setAttribute("y", ((mltopt + brr)+5));
	branch.setAttribute("style", "font-size:20px; font-family:Verdana;");
	branch.setAttribute("fill", tc);
	branch.setAttribute("text-anchor", "middle");
	$(branch).text(val);
	$("#lifeline").append(branch);
	$("#lifeline").css("height", (parseInt(mltopt+lh))+(brr*4)-lh);
	$("#mylife").css("height", ((parseInt(mltopt+lh))+(brr*4)));
}
function linebranch(i, lh, brr, bh, tc, tw, brt, brf){
	var branch = document.createElementNS(mlsvgNS, "path");
	branch.setAttribute("id", "branch"+i);
	branch.setAttribute("type", "dash");
	if(i % 2 == 0){
		branch.setAttribute("d","M 120 "+((mltopt)-1)+ " L 120 "+ (mltopt+brr)+ " L "+ 100 + " " +(mltopt+brr) + " L 120 "+ (mltopt+brr)+ " L 120 "+ (mltopt+(brr*2)+1));
	} else {
		branch.setAttribute("d","M 120 "+((mltopt)-1)+ " L 120 "+ (mltopt+brr)+ " L "+ 140 + " " +(mltopt+brr) + " L 120 "+ (mltopt+brr)+ " L 120 "+ (mltopt+(brr*2)+1));
	}
	branch.setAttribute("stroke-width", tw);
	branch.setAttribute("stroke", tc);
	branch.setAttribute("opacity", "1");
	branch.setAttribute("fill", "transparent");
	branch.setAttribute("data-bottom", "");
	$("#lifeline").append(branch);
	$("#lifeline").css("height", "");
	$("#mylife").css("height", "");
	
}
function positionli(i, lh, brr, boxwidth, bh){
	var curli = $("#mylife").find("li").eq(i);
	checksize();
	if(i == 0){
		$(curli).css("top", (((mltopt)-(bh/2.5))));
	} else {
		$(curli).css("top", (((mltopt)-(bh/2.5))));
	}
	
}

function addbase(lh, tc, tw, brr){
	$("#lifeline").css("height", (mltopt+(lh*2)));
	$("#mylife").css("height", (mltopt+(lh*2)));
	var basevert = document.createElementNS(mlsvgNS, "line");
	basevert.setAttribute("id", "basevert");
	basevert.setAttribute("x1", "120");
	basevert.setAttribute("x2", "120");
	basevert.setAttribute("y1", (mltopt+(brr*2)));
	basevert.setAttribute("y2", (parseInt(basevert.getAttribute("y1")))+lh);
	basevert.setAttribute("stroke", tc);
	basevert.setAttribute("stroke-width", tw);
	basevert.setAttribute("opacity", "1");
	basevert.setAttribute("fill", "none");
	basevert.setAttribute("type", "line");
	$("#lifeline").append(basevert);
	mltopt = parseInt(basevert.getAttribute("y2"));
	var basehor = document.createElementNS(mlsvgNS, "line");
	basehor.setAttribute("id", "basehor");
	basehor.setAttribute("x1", "90");
	basehor.setAttribute("x2", "150");
	basehor.setAttribute("y1", (mltopt));
	basehor.setAttribute("y2", (mltopt));
	basehor.setAttribute("stroke", tc);
	basehor.setAttribute("stroke-width", tw);
	basehor.setAttribute("opacity", "1");
	basehor.setAttribute("fill", "none");
	basehor.setAttribute("type", "line");
	$("#lifeline").append(basehor); 
}

# mylife.js

An animated timeline for showing off the best of your work.

Fully resposnive.

Animation is optional.

simple syntax
<code>
<div id="mylife">
	<ul>
		<li><span>1</span></li>
		<li><span>2</span></li>
		<li><span>3</span></li>
		<li><span>4</span></li>
		<li><span>5</span></li>
		<li><span>6</span></li>
	</ul>
</div>
</code>
add your text in the span, everything else is done by adding this script.
<script>
	createmylife();
</script>

or with options:
<script>
	createmylife({
		lineheight : 400,
		branchrad : 20,
		branchwidth : 5,
		branchtype : "arrow",
		branchfill : "#fff",
		treecolor : "#fff",
		treewidth : 5,
		animation : true
	});
</script>
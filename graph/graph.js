var data=[
  {
    "date": "20070601",
    "RWC Rent": "2060",
    "Erin's 1/3 Net": "1170"
  },
  {
    "date": "20080601",
    "RWC Rent": "2060",
    "Erin's 1/3 Net": "1891"
  },
  {
    "date": "20090601",
    "RWC Rent": "1800",
    "Erin's 1/3 Net": "1891"
  },
  {
    "date": "20100601",
    "RWC Rent": "1830",
    "Erin's 1/3 Net": "1891"
  },
  {
    "date": "20110601",
    "RWC Rent": "1750",
    "Erin's 1/3 Net": "1891"
  },
  {
    "date": "20120601",
    "RWC Rent": "1820",
    "Erin's 1/3 Net": "1836"
  },
  {
    "date": "20130601",
    "RWC Rent": "2240",
    "Erin's 1/3 Net": "1836"
  },
  {
    "date": "20140601",
    "RWC Rent": "2510",
    "Erin's 1/3 Net": "1891"
  },
  {
    "date": "20150601",
    "RWC Rent": "2850",
    "Erin's 1/3 Net": "1974"
  }];

responsivefy = function (svg) {
  // get container + svg aspect ratio
  var container = d3.select(svg.node().parentNode),
    width = parseInt(svg.style("width")),
      height = parseInt(svg.style("height")),
      aspect = width / height;

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg.attr("viewBox", "0 0 " + width + " " + height)
    .attr("perserveAspectRatio", "xMinYMid")
    .call(resize);

  // to register multiple listeners for same event type, 
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on("resize." + container.attr("id"), resize);

  // get width of container and resize svg to fit it
  function resize() {
    var targetWidth = parseInt(container.style("width"));
    svg.attr("width", targetWidth);
    svg.attr("height", Math.round(targetWidth / aspect));
  }
}


salaryGame = function(){
  var inputSalary = prompt("Can you afford to work in movies?", "Enter your gross annual salary here");
  inputSalary = parseInt(inputSalary);
  if (isNaN(inputSalary)){
    alert("Please use a whole number");
  }else if(inputSalary < 50000){
    alert("sorry, you're not even in the ballpark")
  }else if(inputSalary>115836){
    alert("congratulations, you're off the chart!" +
    " You can afford to live in one bedroom of a two-bedroom house." +
    " Why don't you use all that extra cash and work for DreamWorks!")
  }else{
    inputSalary = inputSalary/12;//monthly income
    inputSalary = inputSalary-(533+120);//533 is for 401k, 120 is medical, etc
    inputSalary = inputSalary*(.333);//one third is the limit for spending on housing

    var adjustedHeight = d3.scale.linear()
      .domain([2850, 1170])
      .range([(height), 0]);
    
    var scaledInputSalary = adjustedHeight(inputSalary);

    d3.selectAll("#attachment")
      .append("circle")
      .attr("class", "circle")
      .attr("cx", (width-6))
      .attr("cy", -scaledInputSalary)
      .attr("r", 5)
    }
}

var margin = {top: 20, right: 80, bottom: 30, left: 50},
  width = 400 - margin.left - margin.right,
  height = 150 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y%m%d").parse;

var x = d3.time.scale()
  .range([0, width]);

var y = d3.scale.linear()
  .range([height, 0]);

var color = d3.scale.category20c();

var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom");

var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left");

var line = d3.svg.line()
  .interpolate("linear")
  .x(function(d) { return x(d.date); })
  .y(function(d) { return y(d.prices); });

var svg = d3.select("#graph").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .call(responsivefy)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));

data.forEach(function(d) {
  d.date = parseDate(d.date);
});
  
var rates = color.domain().map(function(name) {
  return {
    name: name, values: data.map(function(d) {return {date: d.date, prices: +d[name]};})
  };
});

x.domain(d3.extent(data, function(d) { return d.date; }));

y.domain([
  d3.min(rates, function(c) { return d3.min(c.values, function(v) { return v.prices; }); }),
  d3.max(rates, function(c) { return d3.max(c.values, function(v) { return v.prices; }); })
]);

svg.append("g")
  .attr("class", "x axis")
  .attr("id", "attachment")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis)

svg.append("g")
  .attr("class", "y axis")
  .call(yAxis)
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", ".71em")
  .style("text-anchor", "end")
  .text("dollars");

var graphArea = svg.selectAll(".graphArea")
  .data(rates)
  .enter().append("g")

graphArea.append("path")
  .attr("class", "line")
  .attr("d", function(d) { return line(d.values); })
  .style("stroke", function(d) { return color(d.name); });

graphArea.append("text")
  .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
  .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.prices) + ")"; })
  .attr("x", 3)
  .attr("dy", ".35em")
  .text(function(d) { return d.name; });

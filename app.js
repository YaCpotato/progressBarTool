$(document).ready(function() {
    $(".trigger").click(function() {
      $(".menu").toggleClass("active"); 
    });
  });

var app = new Vue({
    el: "#app",
    data() {
      return {
        stg: "hello",
        svg: null,
        totalSlideNum:1,
        bar: {
          x: 10,
          y: 10,
          rx: 10,
          ry: 10,
          width: 500,
          height: 25,
          lineColor:"#000000",
          strokeColor:"#00FF00",
          strokeWidth:3
        }
      };
    },
    methods: {
      appendBar() {
        $("#box_1").empty();
        var svg_elem = document.getElementById("box_1");
        let d3Element = d3.select("#box_1")
        for(let i = 0;i<this.totalSlideNum;i++){
            var backBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            backBar.setAttribute("x", this.bar.x);
            backBar.setAttribute("y", this.bar.y + (i * (this.bar.height + 10)) + 10);
            backBar.setAttribute("stroke", this.bar.strokeColor);
            backBar.setAttribute("stroke-width", this.bar.strokeWidth);
            backBar.setAttribute("rx", this.bar.rx);
            backBar.setAttribute("ry", this.bar.ry);
            backBar.setAttribute("width", this.bar.width);
            backBar.setAttribute("height", this.bar.height);
            backBar.setAttribute("fill", this.bar.lineColor);
            backBar.setAttribute("style","stroke-opacity: .3;fill-opacity: .3")
            svg_elem.appendChild(backBar);

            var progress = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            progress.setAttribute("id", "progressBar-"+i);
            progress.setAttribute("x", this.bar.x);
            progress.setAttribute("y", this.bar.y + (i * (this.bar.height + 10)) + 10);
            progress.setAttribute("stroke", this.bar.strokeColor);
            progress.setAttribute("stroke-width", this.bar.strokeWidth);
            progress.setAttribute("rx", this.bar.rx);
            progress.setAttribute("ry", this.bar.ry);
            progress.setAttribute("width", (this.bar.width / this.totalSlideNum) * (i + 1));
            progress.setAttribute("height", this.bar.height);
            progress.setAttribute("fill", this.bar.lineColor);
            svg_elem.appendChild(progress);

            d3Element.append("text")
            .attr("x", ($("#progressBar-"+i).width() / 2) + 10)
            .attr("y", ($("#progressBar-"+i).height() / 2) + 15  + (i * (this.bar.height + 10)) + 10)
            .text(parseInt((100 / this.totalSlideNum)*(i + 1)) + "%")
            .attr("fill",this.bar.strokeColor)
            .style("text-anchor", "middle")
          }
      }
    },
    mounted() {
      const contents = d3.select("#chart--wrapper");
      this.svg = contents.append("svg");
    }
  });
  
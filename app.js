var app = new Vue({
    el: "#app",
    data() {
      return {
        stg: "hello",
        svg: null,
        bar: {
          x: 10,
          y: 10,
          rx: 20,
          ry: 10,
          width: 200,
          height: 50,
          lineColor:"#776677",
          strokeColor:"#545454",
          strokeWidth:5
        }
      };
    },
    methods: {
      appendBar() {
        $("rect").remove();
        var svg_elem = document.getElementById("box_1");
        d3Element = d3.select("#box_1")

        var backBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        backBar.setAttribute("x", this.bar.x);
        backBar.setAttribute("y", this.bar.y);
        backBar.setAttribute("stroke", this.bar.strokeColor);
        backBar.setAttribute("stroke-width", this.bar.strokeWidth);
        backBar.setAttribute("ry", this.bar.ry);
        backBar.setAttribute("width", 500);
        backBar.setAttribute("height", this.bar.height);
        backBar.setAttribute("fill", this.bar.lineColor);
        backBar.setAttribute("style","stroke-opacity: .3;fill-opacity: .3")
        svg_elem.appendChild(backBar);

        var progress = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        progress.setAttribute("id", "progressBar");
        progress.setAttribute("x", this.bar.x);
        progress.setAttribute("y", this.bar.y);
        progress.setAttribute("stroke", this.bar.strokeColor);
        progress.setAttribute("stroke-width", this.bar.strokeWidth);
        progress.setAttribute("ry", this.bar.ry);
        progress.setAttribute("width", this.bar.width);
        progress.setAttribute("height", this.bar.height);
        progress.setAttribute("fill", this.bar.lineColor);
        svg_elem.appendChild(progress);

        // var text = document.createElementNS("http://www.w3.org/2000/svg", "text")
        // text.setAttribute("x", this.bar.x);
        // text.setAttribute("y", this.bar.y);
        // text.textContent("20")
        // text.setAttribute("fill",this.bar.strokeColor)
        d3Element.append("text")
        .attr("x", ($("#progressBar").width() / 2) + 10)
        .attr("y", ($("#progressBar").height() / 2) + 15)
        .text("20")
        .attr("fill",this.bar.strokeColor)
        .style("text-anchor", "middle")
      }
    },
    mounted() {
      const contents = d3.select("#chart--wrapper");
      this.svg = contents.append("svg");
    }
  });
  
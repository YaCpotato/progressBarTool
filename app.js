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
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        svg.setAttribute("x", this.bar.x);
        svg.setAttribute("y", this.bar.y);
        svg.setAttribute("stroke", this.bar.strokeColor);
        svg.setAttribute("stroke-width", this.bar.strokeWidth);
        svg.setAttribute("ry", this.bar.ry);
        svg.setAttribute("width", this.bar.width);
        svg.setAttribute("height", this.bar.height);
        svg.setAttribute("fill", this.bar.lineColor);
        svg_elem.appendChild(svg);
      }
    },
    mounted() {
      const contents = d3.select("#chart--wrapper");
      this.svg = contents.append("svg");
    }
  });
  
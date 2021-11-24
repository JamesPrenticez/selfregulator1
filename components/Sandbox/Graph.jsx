import { useState, useRef, useEffect} from 'react'
import * as d3 from "d3"

function Graph() {
  const [data] = useState([200, 250, 60, 150, 100, 175])
  //we useRef to allow d3 to manipulate teh dom not react
  const svgRef = useRef()

  useEffect(() => {
    //setting up svg container
    const w = 400;
    const h = 300;
    const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('overflow', 'visible')
      .style('margin-top', '75px')

    //setting the scaling
      const xScale = d3.scaleBand()
        .domain(data.map((val, i) => i))
        .range([0, w])
        .padding(0.5)
      const yScale = d3.scaleLinear()
        .domain([0, h])
        .range([h, 0])

    //setting axes
    const xAxis = d3.axisBottom(xScale)
      .ticks(data.length)
    const yAxis = d3.axisLeft(yScale)
      .ticks(5)

      svg.append('g') //group tag
        .call(xAxis)
        .attr("transform", `translate(0, ${h})`)
      svg.append('g')
        .call(yAxis)

    //setting svg data
    console.log(data)
    svg.selectAll('.bar')
      .data(data)
      .join('rect')
        .attr('fill', 'red')
        .attr('x', (val, i) => xScale(i))
        .attr('y', yScale)
        .attr('width', xScale.bandwidth())
        .attr('height', (val) => h - yScale(val))
        .style('color', "red")

  },[data])

  return (
    <div className="h-screenNav w-full flex justify-center items-center bg-blue-700">
      <svg className=""ref={svgRef}></svg>
      <p>graph</p>
    </div>
  )
}

export default Graph

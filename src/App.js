import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as d3 from "d3";

class CircularBracket extends Component {
  //Bracket extends from a number n to 1v1
  constructor(props) {
    super(props)
    this.createCircularBracket = this.createCircularBracket.bind(this);
  }
  componentDidMount() {
    this.createCircularBracket();
  }
  componentDidUpdate() {
    this.createCircularBracket();
  }
  createCircularBracket() {
    const node = this.node
    const dataMax = d3.max(this.props.data)
    const yScale = d3.scaleLinear()
        .domain([0, dataMax])
        .range([0, this.props.size[1]])
    d3.select(node)
        .selectAll('rect')
        .data(this.props.data)
        .enter()
        .append('rect')
    
    d3.select(node)
        .selectAll('rect')
        .data(this.props.data)
        .exit()
        .remove()
    
    d3.select(node)
        .selectAll('rect')
        .data(this.props.data)
        .style('fill', '#fe9922')
        .attr('x', (d,i) => i * 25)
        .attr('y', d => this.props.size[1] - yScale(d))
        .attr('height', d => yScale(d))
        .attr('width', 25)
  }
  render() {
    return (<svg ref={node => this.node = node} width={500} height={500}></svg>);
  }
}
class App extends Component {
  render() {
    /*
    {
      FirstTeam: "",
      SecondTeam: "",
      Aggregate: [],
      FirstLeg: {
        Home: "",
        Away: "",
        Date: "",
        Location: "",
        Score: []
      },
      SecondLeg: {
        Home: "",
        Away: "",
        Date: "",
        Location: "",
        Score: []
      }
    }*/
    var teams = [
      {
        id: 1,
        Name: "Liverpool",
        Color: "#E0202C",
        Stadium: "Anfield"
      },
      {
        id: 2,
        Name: "Real Madrid",
        Color: "#FEBE10",
        Stadium: "Santiago Bernabeu"
      },
      {
        id: 3,
        Name: "AS Roma",
        Color: "#F0BC42",
        Stadium: "Stadio Olimpico"
      },
      {
        id: 4,
        Name: "Bayern Munich",
        Color: "#0066B2",
        Stadium: "Allianz Arena"
      }, 
      {
        id: 5,
        Name: "Sevilla",
        Color: "white",
        Stadium: "Raon Sanchez Pizjuan Stadium"
      },
      {
        id: 6,
        Name: "Juventus",
        Color: "repeating-linear-gradient(90deg, white, white 10px, black 10px, black 20px)",
        Stadium: "Allianz Stadium"
      },
      {
        id: 7,
        Name: "Barcelona",
        Color: "repeating-linear-gradient(90deg, #55F, #55f 20px, #862633 20px, #862633 40px)",
        Stadium: "Camp Nou"
      },
      {
        id: 8,
        Name: "Manchester City",
        Color: "skyblue",
        Stadium: "City of Manchester Stadium"
      }
    ]
    var data = {
      ChampionsLeague: [
        {
          Level: 4,
          Name: "Final",
          Matches: [
            {
              //LFC vs Madrid
              FirstTeam: 1,
              SecondTeam: 2,
              Date: "2018-05-26",
              Location: "Kiev",
              Score: [],
            }
          ]
        },
        {
          Level: 3,
          Name: "Semi-Finals",
          Matches: [
            {
              //LFC vs Roma
              FirstTeam: 1,
              SecondTeam: 3,
              Aggregate: [ 7,6 ],
              FirstLeg: {
                Home: 1,
                Away: 3,
                Date: "2018-04-24",
                Score: [ 5, 2 ]
              },
              SecondLeg: {
                Home: 3,
                Away: 1,
                Date: "2018-05-02",
                Score: [ 4, 2 ]
              }
            },
            {
              //Real vs Bayern
              FirstTeam: 2,
              SecondTeam: 4,
              Matches: [
                {
                  FirstTeam: 2,
                  SecondTeam: 4,
                  Aggregate: [ 4, 3 ],
                  FirstLeg: {
                    Home: 4,
                    Away: 2,
                    Date: "2018-04-25",
                    Score: [1,2]
                  },
                  SecondLeg: {
                    Home: 2,
                    Away: 4,
                    Date: "2018-05-01",
                    Score: [ 2, 2 ]
                  }
                }
              ]
            }
          ]
        },
        {
          Level: 3,
          Name: "Quarter-Finals",
          Matches: [
            {
              //Sevilla v Bayern
              FirstTeam: 4,
              SecondTeam: 5,
              Aggregate: [ 2, 1 ],
              FirstLeg: {
                Home: 5,
                Away: 4,
                Date: "2018-04-03",
                Score: [ 1, 2 ]
              },
              SecondLeg: {
                Home: 4,
                Away: 5,
                Date: "2018-04-11",
                Score: [ 0, 0 ]
              }
            },
            {
              //Juventus v Real
              FirstTeam: 2,
              SecondTeam: 6,
              Aggregate: [ 4, 3 ],
              FirstLeg: {
                Home: 6,
                Away: 2,
                Date: "2018-04-03",
                Score: [ 0, 3 ]
              },
              SecondLeg: {
                Home: 2,
                Away: 6,
                Date: "2018-04-11",
                Score: [ 1, 3 ]
              }
            },
            {
              //Barca v Roma
              FirstTeam: 3,
              SecondTeam: 7,
              Aggregate: [ 4, 4 ],
              FirstLeg: {
                Home: 7,
                Away: 3,
                Date: "2018-04-04",
                Score: [ 4, 1]
              },
              SecondLeg: {
                Home: 3,
                Away: 7,
                Date: "2018-04-10",
                Score: [ 3,0 ]
              }
            },
            {
              //Liverpool v Man City
              FirstTeam: 1,
              SecondTeam: 8,
              Aggregate: [ 5, 1 ],
              FirstLeg: {
                Home: 1,
                Away: 8,
                Date: "2018-04-04",
                Score: [ 3, 0 ]
              },
              SecondLeg: {
                Home: 8,
                Away: 1,
                Date: "2018-04-10",
                Score: [ 1, 2 ]
              }
            }
          ]
        }
      ]
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Data Visualization</h1>
        </header>
        <p className="App-intro">
          <i class="fa fa-info-circle" />Infos
        </p>
        <div>
          <CircularBracket data={[5,10,1,3]} size={[500,500]} />
        </div>
      </div>
    );
  }
}

export default App;

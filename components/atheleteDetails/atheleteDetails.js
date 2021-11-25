import react from "react";
import React, { Component } from "react";
import "./atheleteDetails.css";

class AtheleteDetails extends Component {
  constructor() {
    super();
    this.state = {
      athleteData: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
    )
      .then((res) => res.json())
      .then((resp) => {
        console.log("resp", resp);
        this.setState({ athleteData: resp });
      });
  }
  render() {
    const { athleteData } = this.state;

    return (
      <React.Fragment>
        <h1 className="title">Athlete Details</h1>
        <table className="Table">
          {athleteData &&
            athleteData.length > 0 &&
            athleteData.map((alt, index) => {
              return (
                <tr key={index} className="tr">
                  <td className="td">{alt.athlete}</td>
                  <td className="td">{alt.country}</td>
                  <td className="td">{alt.age}</td>
                  <td className="td">{alt.sport}</td>
                  <td className="td">{alt.gold}</td>
                  <td className="td">{alt.silver}</td>
                  <td className="td">{alt.year}</td>
                  <td className="td">{alt.date}</td>
                </tr>
              );
            })}
        </table>
      </React.Fragment>
    );
  }
}

export default AtheleteDetails;

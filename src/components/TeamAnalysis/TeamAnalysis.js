import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SelectTeam from "./SelectTeam";
import TeamLineGraph from "./TeamLineGraph";
import TeamPieChart from "./TeamPieChart";
import TeamwiseStats from "./TeamwiseStats";

const styles = {
  containerClass: { paddingBottom: "2%", paddingTop: "2%" },
  colorClass: { color: "#2026D2" },
  boldClass: { fontWeight: "900" },
  imageContainerClass: { paddingTop: "20px" },
  selectContainerClass: { paddingBottom: "4%" }
};

export class TeamAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeamParent: "Australia"
    };
  }
  setTeam = selectedTeam => {
    this.setState({
      selectedTeamParent: selectedTeam.value
    });
    console.log(this.state.selectedTeamParent);
  };

  render() {
    return (
      <div>
        <Container style={styles.containerClass}>
          <h3 style={{ fontWeight: "bold" }} fontWeight="bold">
            Team-wise <span style={{ color: "#2026D2" }}>Analysis</span>
          </h3>
        </Container>
        <Container style={styles.selectContainerClass}>
          <Row>
            <Col md="auto">
              <h6>Selected Team: </h6>
            </Col>
            <Col xs={6}>
              <SelectTeam callbackFromParent={this.setTeam} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={8}>
              <TeamLineGraph team={this.state.selectedTeamParent} />
            </Col>
            <Col sm={4}>
              <TeamPieChart team={this.state.selectedTeamParent} />
            </Col>
          </Row>
          <TeamwiseStats team={this.state.selectedTeamParent} />
        </Container>
      </div>
    );
  }
}

export default TeamAnalysis;

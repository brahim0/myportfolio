import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

export default class Education extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Cell col={4}>{this.props.year}</Cell>
            <Cell col={8}>{this.props.level}</Cell>
        </Grid>
      </div>
    )
  }
}

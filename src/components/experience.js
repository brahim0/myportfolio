import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl';

export default class Experience extends Component {
  render() {
    return (
      <div>
      <Grid>
          <Cell col={4} >
          {this.props.date}
          </Cell>
          <Cell col={8} >
          {this.props.description}
          </Cell>
      </Grid>
        
      </div>
    )
  }
}

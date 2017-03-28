import React from 'react'

var styles= {
  main: {
    margin: 'auto'
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: '25px',
    width: '60px',
    lineHeight: '25px',
    textAlign: 'center',
  }
}

export default React.createClass({
    getInitialState: function () {
      return {
        count: 0,
      }
    },
    handleClick: function () {
      this.setState({
        count: this.state.count + 1,
      })
    },
    render: function () {
      var likes = "Likes"
      if(this.state.count === 1){
        likes = "Like"
      }
      return (
          <div style={styles.main}>
            <button style={styles.button} onClick={this.handleClick}>{this.state.count} {likes}</button>
          </div>
        )
    }
})
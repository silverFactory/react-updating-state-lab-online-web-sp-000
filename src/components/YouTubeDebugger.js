import React from 'react'

export default class YouTubeDebugger extends React.Component {

  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
  bitClick = () => {
    this.setState(previousState => {
      return {
        settings: {
          ...previousState.settings,
          bitrate: 12
        }
      }
    })
  }
  resClick = () => {
    this.setState(previousState => {
      return {
        settings: {
          ...previousState.settings,
          video: {
            resolution: '720p'
          }
        }
      }
    })
  }

  render(){
    return (
      <div>
      <button className="bitrate" onClick={this.bitClick}/>
      <button className="resolution" onClick={this.resClick}/>
      </div>
    )
  }
}

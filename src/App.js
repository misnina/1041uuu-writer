import React, { Component } from 'react';
import './themes/style-selector.scss';
import FileSaver from 'file-saver';
const STYLES = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j'
]

class ThemeSelect extends Component {
  render() {
    return (
      <nav>
        {STYLES.map(style => {
          console.log(style);
          return (
            <button
              className={`dot ${style}`}
              onClick={(event) => this.props.setStyle(style)}
            >
            </button>
          )
        })}
      </nav>
    )
  }
}

function Writer(props) {
  return (
    <textarea
      onChange={(event) => props.saveText(event.target.value)}
    >
    </textarea>
  )
}

class Footer extends Component {
  render() {
    return (
      <div id='footer'>
        Support <a href="https://www.patreon.com/1041uuu">1041uuu</a> on Patreon <button onClick={this.props.saveFile}>Save as Text</button>
      </div>
    )
  }
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      style: 'a'
    }
    this.saveText = this.saveText.bind(this);
    this.setStyle = this.setStyle.bind(this);
    this.saveFile = this.saveFile.bind(this);
  }

  render() {
    return (
      <div id="app">
        <div className={`style + ${this.state.style}`}>
          <ThemeSelect
            setStyle={this.setStyle}
          />
          <Writer
            saveText={this.saveText}
            spellcheck="false"
          />
          <Footer
            saveFile={this.saveFile}
          />
        </div>
      </div>
    );
  }

  saveText(text) {
    this.setState({ text });
  }

  setStyle(style) {
    this.setState({ style });
  }

  saveFile() {
    let blob = new Blob([this.state.text], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "text.txt");
  }
}

export default App;

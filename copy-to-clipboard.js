const Hello = React.createClass({
  copyToClipboard: () => {
    var textField = document.createElement('textarea')
    textField.innerText = 'Click to copy some text'
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  },
  render: function () {
    return (
      <h1 onClick={this.copyToClipboard}>Click to copy some text</h1>
    )
  }
})

ReactDOM.render(
<Hello/>,
  document.getElementById('container'))

const React = require('react')
const ReactDOM = require('react-dom')
const Axios = require('axios')
const GuitarList = require('./GuitarList')

const Guitars = React.createClass({
    getInitialState: function() {
        return {
            inventory: []
        }
    },
    componentDidMount: function() {
        var th = this
        this.serverRequest = Axios.get('../scripts/data.json')
            .then(function(result) {
                th.setState({
                    inventory: result.data.guitars
                })
                // console.log(result.data.guitars)
            })
    },
    render: function() {
        return (
            <div>
                <GuitarList inventory={this.state.inventory} />
            </div>
        )
    }
    
})

ReactDOM.render(<Guitars />, document.getElementById('Guitars'))

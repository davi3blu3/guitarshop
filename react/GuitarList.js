const React = require('react')
const ReactDOM = require('react-dom')

const GuitarList = (props) => (
    <div className="guitars">
        {props.inventory.map(function(guitar, index){
            return (
                <div className="guitar-card" key={index}>
                    <h3 className="guitar-name">{guitar.name}</h3>
                    <img className="guitar-img" src={guitar.img.src} alt={guitar.img.alt} />
                    <h5 className="guitar-price">{guitar.price}</h5>
                    <p className="guitar-desc">{guitar.description}</p>
                </div>
            )
        })}

    </div>
)

module.exports = GuitarList
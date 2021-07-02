import React from 'react';

class Autocomplete extends React.Component {
    handleChange(e) {
        this.props.handleCallback(e.target.value); // aca voy a tener que pasar un prop
    }
    render() {
        return(
            <div>
                <input onChange={(e) => this.handleChange(e)} type='text'></input>
            </div>
        )
    }
}
export default Autocomplete;
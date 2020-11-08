import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    state= {term: ''}

    onFormSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state.term)
    }




    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search For Image</label>
                        <input
                          type="text"
                          placeholder={this.props.Placeholder}
                          value={this.state.term}
                          onChange={(e) => this.setState({term: e.target.value})} 
                          />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

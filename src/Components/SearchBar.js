import React from 'react';

class Searchbar extends React.Component {
    state = {
        term: ''
    };
    handleChange = (e) => {
        this.setState({
            term: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;
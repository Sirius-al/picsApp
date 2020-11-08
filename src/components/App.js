import { render } from '@testing-library/react';
import React from 'react';

import unsplash from '../networkRequest/unsplash'

import SearchBar from './SearchBar';
import ImageLists from './ImageLists';

class App extends React.Component{

    state = {imagesData: []}
    

    onSearchSubmit =  async (term) => {

        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        });

        this.setState({ imagesData: response.data.results })
        // console.log(response.data.results)
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} Placeholder='Ex: Dog'/>
                <ImageLists images={this.state.imagesData}/>
            </div>
        )
    }
};

export default App;
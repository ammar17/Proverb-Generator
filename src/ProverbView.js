import React, { Component } from 'react';
import ProverbProvider from './ProverbProvider.js';

class ProverbView extends Component {
    constructor(props) {
        super(props);
        this.proverb_provider = new ProverbProvider();

        this.state = {
            first: null,
            second: null
        };

        this.anotherProverbButtonClick = this.anotherProverbButtonClick.bind(this);
    }

    anotherProverbButtonClick(e) {
        console.log('Button clicked');
        
        let first = this.proverb_provider.getFirstPart();
        let second = this.proverb_provider.getSecondPart();
        console.log('Parts chosen:', first, second);

        this.setState({
            first: first,
            second: second
        });
    }

    render() {
        if (this.state.first == null && this.state.second == null) {
            console.log('oh...');
            return (
                <button onClick={this.anotherProverbButtonClick} id="new">C'est parti !</button>
            );
        } else {
            console.log('ha !');
            return (
                <div>
                    <div id="proverb">
                        <span id="first">{this.state.first}</span>
                        <span>, </span>
                        <span id="second">{this.state.second}</span>
                        <span>.</span>
                    </div>

                    <button onClick={this.anotherProverbButtonClick} id="new">Un autre !</button>
                </div>
            );
        }
    }
}

export default ProverbView;
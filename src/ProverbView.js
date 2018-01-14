import React, { Component } from 'react';
import ProverbProvider from './ProverbProvider.js';
import ProverbRater from './ProverbRater.js';

class ProverbView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first: null,
            second: null
        };

        this.proverb_provider = props.proverb_provider;
        this.anotherProverbButtonClick = this.anotherProverbButtonClick.bind(this);
        this.onNewProverb = this.props.onNewProverb;
    }

    anotherProverbButtonClick(e) {
        let proverb = this.proverb_provider.getProverb(true);

        this.setState({
            first: proverb.first,
            second: proverb.second,
            score: proverb.score,
        });

        this.onNewProverb(e);
    }

    render() {
        if (!this.proverb_provider.isLocalStorageAvailable()) {
            return null;
        }

        if (this.state.first == null && this.state.second == null) {
            return (
                <button onClick={this.anotherProverbButtonClick} id="new">C'est parti !</button>
            );
        } else {
            return (
                <div>
                    <div id="proverb">
                        <span id="first">{this.state.first}</span>
                        <span>, </span>
                        <span id="second">{this.state.second}</span>
                        <span>.</span>
                    </div>

                    <button onClick={this.anotherProverbButtonClick} id="new">Un autre !</button>
                    <ProverbRater proverb_provider={this.proverb_provider} first={this.state.first} second={this.state.second} score={this.state.score} />
                </div>
            );
        }
    }
}

export default ProverbView;
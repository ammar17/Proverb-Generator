import React, { Component } from 'react';
import ProverbProvider from './ProverbProvider.js';
import like_animation from './perceval.gif';
import dislike_animation from './strax.gif';
import thanks_animation from './kramer.gif';

class ProverbRater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: this.props.first,
            second: this.props.second,
            score: this.props.score,
            rated: false
        };

        this.proverb_provider = props.proverb_provider;
        this.likeButtonClicked = this.likeButtonClicked.bind(this);
        this.dislikeButtonClicked = this.dislikeButtonClicked.bind(this);
    }

    likeButtonClicked() {
        let previous_rating = this.proverb_provider.getRating(this.state.first, this.state.second);
        this.proverb_provider.setRating(this.state.first, this.state.second, ++previous_rating);
        this.setState({
            rated: true, 
            score: previous_rating
        });
    }

    dislikeButtonClicked() {
        let previous_rating = this.proverb_provider.getRating(this.state.first, this.state.second);
        this.proverb_provider.setRating(this.state.first, this.state.second, --previous_rating);
        this.setState({
            rated: true, 
            score: previous_rating
        });
    }

    /**
     * Appellé lorsque le parent est rendu, afin de transmettre les données en paramètre.
     * Mise à jour de l'état à l'aide des données envoyées par le parent.
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            first: nextProps.first,
            second: nextProps.second,
            score: nextProps.score,
            rated: false
        });
    }

    render() {
        // Note: les données qui sont spécifiées dans le render() parent sont passées dans this.props, pas dans this.state (local et encapsulé)
        if (this.state.first == null && this.state.second == null) {
            return null;
        } 
        
        if (this.state.rated) {
            return (
                <div id="rater">
                    <div>Cimer Bébert !</div>
                        <img id="thanks" src={thanks_animation} onClick={this.likeButtonClicked} alt="Tu m'vends du rêve !" title="Tu m'vends du rêve!" />
                        <div>(score actuel: {this.state.score})</div>
                </div>
            );

        } else {
            return (
                <div id="rater">
                    <div>Alors, tu kiffes ou bien... ?</div>
                    <div className="container">
                        <img src={like_animation} onClick={this.likeButtonClicked} alt="Ca envoie du pâté !" title="Ca envoie du pâté !" />
                        <img src={dislike_animation} onClick={this.dislikeButtonClicked} alt="Ca sent la morue." title="Ca sent la morue." />
                    </div>
                    <div>(score actuel: {this.state.score})</div>
                </div>
            );
        }
    }
}

export default ProverbRater;
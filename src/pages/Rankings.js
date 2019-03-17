import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Rankings extends Component {

    render() {
        return (
            <section id="ranking-page">
                <h1>Rankings</h1>
                <p>This page houses all regional Power Rankings for Super Smash Bros. Ultimate in Western Washington. For more on how these rankings are determined, check out our <a href="https://docs.google.com/document/d/1ZnD6aFGwMPAh8dcdpeBx4vEdgYwMQUakqpldTHSnpZg">FAQ.</a></p>
                <p>The current season runs from 3/2/19 - 5/31/19. Head out to some <Link to="/events">Events</Link> for a shot at making the list!</p>
                <h3>Winter 2018-2019</h3>
                <div className="rankings-image">
                    <img style={{ width: '100%' }} src={require('../assets/winpr18.png')} alt="Winter PR 2018-19"></img>
                </div>
            </section>
        );
    }

}
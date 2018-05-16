import React from 'react';
import { Link } from "react-router-dom";
import PT from 'prop-types';
const Ons = require('react-onsenui');

class Topics extends React.Component {

    state = {
        topics: [
            {
                title: 'Frogs',
                created_by: 'username',
                term_count: 1,
                created_date: 111,
                modified_date: 111,
                published_date: 111,
                lang_terms: "en",
                lang_definitions: "en",
                terms: [
                    {
                        term: "Tree Frog",
                        definition: "Green",
                        image: null,
                        rank: 0
                    }
                ]
                
            },
            {
                title: 'Bats',
                created_by: 'username',
                term_count: 1,
                created_date: 111,
                modified_date: 111,
                published_date: 111,
                lang_terms: "en",
                lang_definitions: "en",
                terms: [
                    {
                        term: "Fruit Bat",
                        definition: "Black",
                        image: null,
                        rank: 0
                    }
                ]
                
            },
            {
                title: 'Squirrels',
                created_by: 'username',
                term_count: 1,
                created_date: 111,
                modified_date: 111,
                published_date: 111,
                lang_terms: "en",
                lang_definitions: "en",
                terms: [
                    {
                        term: "Red Squirrel",
                        definition: "Red",
                        image: null,
                        rank: 0
                    }
                ]
                
            }
        ],
        topicSearch: ''
    }

    render () {
        const { match } = this.props;
        return (
            <div>
                <Ons.ListHeader> Topics</Ons.ListHeader>
                <Ons.SearchInput type="search" value={this.state.topicSearch} placeholder="Topic" onChange={this.handleChange}></Ons.SearchInput>
                <Ons.List
                    renderRow={this.renderRows}
                />
                
                {this.state.topics.map((topic, index) => {
                    return <Link key={topic.title} className={match.url === `/topics/${topic.title}` ? "active" : ''} to={`/topics/${topic.title}`}>{topic.title}</Link> 
                })}
            </div>
        );
    }

    renderRows = () => {
        this.state.topics.sort((topic1, topic2) => {
            const title1 = topic1.title.toUpperCase();
            const title2 = topic2.title.toUpperCase();
            if (title1 < title2) {
                return -1;
              }
            if (title1 > title2) {
                return 1;
            }
            return 0;
        }).map((topic, index) => {
            return <Ons.ListItem key={index}>
                {/* <div className='left'>
                    <img src={`http://placekitten.com/g/${x}/${y}`} className='list-item__thumbnail' />
                </div> */}
                <div className='center'>
                    {topic.title}
                    <Link key={topic.title} className={this.props.match.url === `/topics/${topic.title}` ? "active" : ''} to={`/topics/${topic.title}`}>{topic.title}</Link>
                </div>
            </Ons.ListItem>
        }) 
    }

    handleChange = (e) => {
        this.setState({
            topicSearch: e.target.value
        })
    }

    static propTypes = {
        match: PT.object.isRequired,
        userProfile: PT.object.isRequired
    }
}

export default Topics;
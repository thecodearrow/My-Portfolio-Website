import React, { Component } from 'react'

export default class CodeChefProblemsCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            problems_count: 120 //this is the default
        }
    }
    async componentDidMount() {

        const rp = require("request-promise")

        var cheerio = require('cheerio'); // Basically jQuery for node.js

        var options = {
            uri: 'https://cors-anywhere.herokuapp.com/https://www.codechef.com/users/thecodearrow',
            transform: function (body) {
                return cheerio.load(body);
            }
        };
        let problems_count = 105;

        await rp(options)
            .then(function ($) {
                let relevant_text = $("body").text().trim();
                relevant_text = relevant_text.substr(relevant_text.indexOf("Fully Solved")) //filtering Problems Count
                relevant_text = relevant_text.substring(0, 100);
                problems_count = parseInt(relevant_text.match(/\d+/)[0])
            })
            .catch(function (err) {
                // Crawling failed or Cheerio choked...
            });
        this.setState({ problems_count: problems_count })

    }
    render() {

        return (
            <span>
                {this.state.problems_count}
            </span>
        )
    }
}

import { FiberManualRecord } from '@material-ui/icons';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react'
import "./Widgets.css";


const Widgets = () => {
    const newsArticle = (heading, subtitle) => {
        return (
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecord />
                </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("React JS vs Angular JS", "Top news")}
            {newsArticle("Who will win in Google Code Jam 2021", "Code Jam news")}
            {newsArticle("Who will win in Tamil Nadu elections?", "Trending")}
            {newsArticle("Who will become red coder in Codeforces?", "Codeforces news")}
            {newsArticle("Who will become 6 star in Codechef", "Top Codechef news")}
        </div>
    )
}

export default Widgets;

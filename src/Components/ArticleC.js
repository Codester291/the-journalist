import React from 'react';
import '../styles/articlestyle.css';
class ArticleC extends React.Component {
    article = [
        { name: "Olatunde Omotolani" },
        { name: "Balogun Ayoola" },
        { name: "Olatunde Olufemi" },
        { name: "Olatunde Oyetunde" },
        { name: "Olatunde Adenike" }
    ];

    posts = [
        { article: "Learning to code is a bit like going to the gym. Even if you max out and spent a whole weekend at the gym, you will not see a visible difference in your body. The more regularly you learn to code, the more likely it is that you’ll start seeing your ripped coding muscles.  The irony is not lost on me).But the problem is where do you find the time? Between working your full-time job, spending time with your family and life admin, when are you supposed to sit down and practice this “daily coding?     While I was working as a doctor, I spent about 12 hours at the hospital, 1-hour commuting and approximately 2 hours on general life-sustaining stuff, such as eating. So that left me with only 9 hours remaining in my day. Theoretically, 2 hours could be allocated to coding practice and 7 hours on sleep. But there is nothing more difficult than trying to convince your work-saturated brain to sit down and learn when you could be watching Game of Thrones with a tub of ice-cream. But then I found a trick. As humans, we have a lot of inertia. This can be bad for us - I’m looking at you, “24” box set. However, we can also turn it to our advantage. I found" },
        { article: "that once I got started coding and making things, I got so absorbed into the project, that I no longer cared about TV, food or sleep. There were quite a few weekends when I coded until sunrise. So how do we take advantage of this inertia? First, you must understand that task-switching is very difficult. It requires a lot of motivation. If as soon as you get home, you slump on the sofa and switch on the TV, you’ve already lost that evening. This is because the amount of motivation required to task-switch and do something not driven by evolution like eating or sleeping is a Herculean task. This is why the moment you enter the door and change to a new environment is the most crucial moment. If at this moment, you tell yourself that you are just going to do 20 minutes of coding practice, you will most likely succeed and use your own inertia to end up learning for an hour or more. No brain will perceive a 20-minute task as a lot of effort and you end up tricking your brain to take advantage of your evening. The next step is to develop a habit. Research suggests that in order to develop a new habit, you have to carry out the task daily for a month. I’ve used this next trick for loads of different things, from exercising to coding, it invariably works like a charm. To preface this trick, I want you to imagine a wall with five paintings hanging on it, four of which are perfectly aligned, perfectly horizontal, but one is crooked. Now really imagine it, is there a part of you that wants to fix it? Now let’s imagine a monthly calendar with boxes representing individual days. If you nurtured that new habit on a particular day, then you make a line through that day. If you continued your streak the next day then you extend that line and so on and so forth. There is something about not breaking a continuous line that motivates most people to continue to" }
    ]

    postHeaders = [
        { head: "My Take On Programming Concept" },
        { head: "Great adventure of the grinch" },
        { head: "Love over failure" },
        { head: "Injured and Strong" },
        { head: "The Uncovered Mystery Of Boko Haram" }
    ]

    render() {
        return <div className="articleCover">
            <div className="article">
                <div>
                    <h1 className="topStories">Top Stories</h1>
                </div>
                {/** First Post*/}
                <div className="smallCards">
                    <div className="main-content-cover">
                        <div className="small-circle">

                        </div>
                        <br />
                        <h1 className="postheader">{this.postHeaders[0].head}</h1>
                        <p>
                            <strong>Posted by</strong> {this.article[0].name}
                        </p>
                        <div>
                            <br />
                            <br />
                        </div>
                        <div>
                            <p className="postStyle">{this.posts[0].article} <strong className="readmore">...Read more</strong></p>
                        </div>
                    </div>
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
                <div className="smallCards">
                    <div className="main-content-cover">
                        <div className="small-circle">

                        </div>
                        <br />
                        <h1 className="postheader">{this.postHeaders[1].head}</h1>
                        <p>
                            <strong>Posted by</strong> {this.article[1].name}
                        </p>
                        <div>
                            <br />
                            <br />
                        </div>
                        <div>
                            <p className="postStyle">{this.posts[1].article} <strong className="readmore">...Read more</strong></p>
                        </div>
                    </div>
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
                <div className="smallCards">
                    <div className="main-content-cover">
                        <div className="small-circle">

                        </div>
                        <br />
                        <h1 className="postheader">{this.postHeaders[2].head}</h1>
                        <p>
                            <strong>Posted by</strong> {this.article[2].name}
                        </p>
                        <div>
                            <br />
                            <br />
                        </div>
                        <div>
                            <p className="postStyle">{this.posts[0].article} <strong className="readmore">...Read more</strong></p>
                        </div>
                    </div>
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
                <div className="smallCards">
                    <div className="main-content-cover">
                        <div className="small-circle">

                        </div>
                        <br />
                        <h1 className="postheader">{this.postHeaders[3].head}</h1>
                        <p>
                            <strong>Posted by</strong> {this.article[3].name}
                        </p>
                        <div>
                            <br />
                            <br />
                        </div>
                        <div>
                            <p className="postStyle">{this.posts[1].article} <span className="readmore"><strong className="readmore">...Read more</strong></span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
                <div className="smallCards">
                    <div className="main-content-cover">
                        <div className="small-circle">

                        </div>
                        <br />
                        <h1 className="postheader">{this.postHeaders[4].head}</h1>
                        <p>
                            <strong>Posted by</strong> {this.article[4].name}
                        </p>
                        <div>
                            <br />
                            <br />
                        </div>
                        <div>
                            <p className="postStyle">{this.posts[0].article} <strong className="readmore">...Read more</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default ArticleC;
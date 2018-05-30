import React, { Component } from 'react';
import '../Styles/Content.css'

export default class Content extends Component {

    render() {
        return (
            <div class="col-md-9">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=Q0CbN8sfihY"></iframe>
                </div>
                <hr/>
                <div class="ui items">
                    <div class="item">
                        <div class="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/George_Lucas_cropped_2009.jpg/440px-George_Lucas_cropped_2009.jpg" />
                        </div>
                        <div class="content">
                            <a class="header">Original trilogy</a>
                            <div class="meta">
                                <span>"Original trilogy" redirects here. For the video game, see Lego Star Wars II: The Original Trilogy.</span>
                            </div>
                            <div class="description">
                                <p>
                                    In 1971, Lucas signed a contract with Universal Studios to direct two films. He intended one of them to be a space opera; however, knowing film studios were skeptical about the genre, Lucas decided to direct his other idea first, American Graffiti, a coming-of-age story set in the 1960s. In 1973, Lucas started work on his second film's script draft of The Journal of the Whills, a space opera telling the tale of the training of apprentice CJ Thorpe as a "Jedi-Bendu" space commando by the legendary Mace Windy. After Universal rejected the film, 20th Century Fox decided to invest in it.[19] On April 17, 1973, Lucas felt frustrated about his story being too difficult to understand, so he began writing a 13-page script with thematic parallels to Akira Kurosawa's The Hidden Fortress; this draft was renamed The Star Wars.[20] By 1974, he had expanded the script into a rough draft screenplay, adding elements such as the Sith, the Death Star, and a protagonist named Annikin Starkiller. Numerous subsequent drafts evolved into the script of the original film.
                                    <br/>
                                    Lucas insisted that the movie would be part of a 9-part series and negotiated to retain the sequel rights, to ensure all the movies would be made. Tom Pollock, then Lucas' lawyer writes: "So in the negotiations that were going on, we drew up a contract with Fox’s head of business affairs Bill Immerman, and me. We came to an agreement that George would retain the sequel rights. Not all the [merchandising rights] that came later, mind you; just the sequel rights. And Fox would get a first opportunity and last refusal right to make the movie."[21] Lucas was offered $50,000 to write, another $50,000 to produce, and $50,000 to direct the film.[21] Later the offer was increased.[22] American Graffiti cast member Harrison Ford had given up on acting and become a carpenter whom Lucas hired for his home renovations, until Lucas decided to cast him as Han Solo within his film.[23]
                                    <br/>
                                    Star Wars was released on May 25, 1977. It was followed by The Empire Strikes Back, released on May 21, 1980; the opening crawl of the sequel disclosed it numbered as "Episode V". Though the first film in the series was simply titled Star Wars, with its 1981 re-release it had the subtitle Episode IV: A New Hope added to remain consistent with its sequel, and to establish it as the middle chapter of a continuing saga.[24] Return of the Jedi, the final film in the original trilogy, was numbered as "Episode VI", and released on May 25, 1983. The sequels were all self-financed by Lucasfilm, and generally advertised solely under their subtitles.[21] The plot of the original trilogy centers on the Galactic Civil War of the Rebel Alliance trying to free the galaxy from the clutches of the Galactic Empire, as well as on Luke Skywalker's quest to become a Jedi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



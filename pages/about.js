import React, {Component} from 'react';
import Head from "next/head";

class About extends Component {
    render() {
        return (
            <>
            <Head>
                <title>Ninja List | About</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <div>
                <h1>About Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto exercitationem repellendus sint? Ex, modi odio omnis quaerat sed sunt tenetur. Aliquam dignissimos explicabo impedit odio officiis, quis quisquam reprehenderit suscipit.</p>
            </div>
            </>
        );
    }
}

export default About;



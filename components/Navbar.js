import React, {Component} from 'react';
import Link from 'next/link';
import Image from 'next/image';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <Image src="/google.png" width={128} height={77}/>
                </div>
                <Link href="/"><a>Home</a></Link>
                <hr />
                <Link href="/about"><a>About</a></Link>
                <hr />
                <Link href="/ninjas"><a>Ninja Listing</a></Link>
            </nav>
        );
    }
}

export default Navbar;





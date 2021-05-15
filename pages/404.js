import Link from 'next/link';
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    // initialize the router
    const router = useRouter();

    // this will fire when some event happens../
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1);   // -1 go back 1 step
            router.push("/");
        }, 3000);
    }, []);

    return (
        <div className="not_found">
            <h1>Oooops...</h1>
            <h2>The Page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>HomePage</a></Link></p>
        </div>
    )
}

export default NotFound;



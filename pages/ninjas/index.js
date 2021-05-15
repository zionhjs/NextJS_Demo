import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';

// 注意 这里这么定义了以后 Next 自动调用这个方法并且注入props
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    console.log(ninjas)

    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <div key={ninja.id}>
                    <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ ninja.name }</h3>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Ninjas;

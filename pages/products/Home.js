import {useRouter} from "next/router";
const Home = () => {
    const params = useRouter();
    let {} = params.query; // 전개 연산
    return (
    <>
        <main>
            <img src="/img/smile.png" alt="메인이미지"/>
        </main>
    </>
    );
}

export default Home;
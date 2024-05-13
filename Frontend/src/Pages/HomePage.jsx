import HeroBanner from "../Components/Home/HeroBanner";

function HomePage() {
    return (
        <div>
            <HeroBanner/>
        </div>
    )
}

export default HomePage;


// Loader
export async  function PostLoader() {
    // const res = await fetch(`https://localhost:7098/api/Post/GET`);
    // if (res.status === 404) {
    //     throw new Response("Not Found", { status: 404 });
    // }
    // console.log(res);
    // return res.json();
    return null;
}
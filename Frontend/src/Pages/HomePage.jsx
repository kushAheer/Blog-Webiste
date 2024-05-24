
import HeroBanner from "../Components/Home/HeroBanner";

import PostComponent from "../Components/Post/GET/PostComponent.jsx";



function HomePage() {
    
    
    
    return (
        <div>
            <HeroBanner/>
            <PostComponent  />
        </div>
    )
}

export default HomePage;


// Loader
export async  function PostLoader() {
    
    // const data = {

    //     posts: [
    //         {
    //             id: 1,
    //             title: "Post 1",
    //             summary: "Lorem ipsum dolor sitmet consectetur adipisicing elit. Eligendi repellat sed fugiat ducimus et minus harum tenetur consequatur, eveniet, inventore amet consectetur ipsam repellendus dolorem! Ut minima alias, praesentium non totam soluta nihil eum dolore eveniet! Inventore consectetur accusamus in, sequi id praesentium labore beatae perferendis, magni, officiis quasi unde reiciendis sit sed assumenda aspernatur debitis suscipit. Dicta, exercitationem assumenda inventore corporis facilis veniam aliquam beatae sint maxime distinctio. Commodi explicabo corrupti asperiores sint obcaecati dolores officia dignissimos in repellat natus provident perspiciatis nisi aliquam iste repellendus magni nulla magnam dolorem tempora, alias distinctio! Nisi consectetur placeat beatae quo rem?",
    //             image: "https://via.placeholder.com/150"
            
    //         },
    //         {
    //             id: 2,
    //             title: "Post 2",
    //             summary: "Summary 2",
    //             image: "https://via.placeholder.com/150"
            
    //         },
    //         {
    //             id: 3,
    //             title: "Post 3",
    //             summary: "Summary 3",
    //             image: "https://via.placeholder.com/150"
            
    //         },
    //         {
    //             id: 4,
    //             title: "Post 4",
    //             summary: "Summary 4",
    //             image: "https://via.placeholder.com/150"
            
    //         },
    //         {
    //             id: 5,
    //             title: "Post 5",
    //             summary: "Summary 4",
    //             image: "https://via.placeholder.com/150"
            
    //         },
    //     ]
    // }

        const data  = await getPost();
        if(data.posts !== undefined && data.posts !== null){
            console.log(data);
            return data.posts;
        }
        console.log("No Data");
    return data.posts;
}
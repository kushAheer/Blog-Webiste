import CreatePostComp from "../Components/Post/Create/CreatePostComp";

function CreatePostPage(){
    return (
        <div>
            <CreatePostComp/>
        </div>
    );
}

export default CreatePostPage;


// Action

export async function CreatePostAction({ request }) {
  
  console.log("data=================");

  const formData = await request.formData();
  
  const data = {
    title : formData.get('title'),
    Summary : formData.get('description'),
    category : formData.get('category'),
    image : formData.get('image'),
    
  };
  console.log(data);
  
//   const responseData = await responseCreatePost(data);
//   console.log(responseData);
  
//   if (responseData.status === 200) {
    
//     return redirect('/');
//   } 
  
//   return responseData;
}
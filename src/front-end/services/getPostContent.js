const getPostContent = async(postId) => 
  await fetch(`/api/post/${postId}`) // eslint-disable-line no-undef  
    .then(resp => resp.json())

export default getPostContent
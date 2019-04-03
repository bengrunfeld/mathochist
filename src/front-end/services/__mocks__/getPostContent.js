const fakeContent = 'Fake content'

const getPostContent = async(postId) => 
  await new Promise(resolve => resolve(fakeContent))

export default getPostContent
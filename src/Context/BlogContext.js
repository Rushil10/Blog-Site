import React,{useState} from 'react';
import jsonServer from '../api/jsonServer';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {

  const [BlogPosts,setBlogPosts]=useState([]);

  const getBlogPosts = async() => {
    const response =await jsonServer.get('/blogposts');
    setBlogPosts(response.data);
  }

  const addBlogPost = async(title,content,callback) => {
    //await jsonServer.post('/blogposts',{title:title,content:content});
    
    setBlogPosts([...BlogPosts,{ id: Math.floor(Math.random()*99999) ,title:title,content:content}]);
    if(callback) {
      callback();
    }
  }

  const deleteBlogPost = async(id,callback) => {
    //await jsonServer.delete(`/blogposts/${id}`);
    setBlogPosts(BlogPosts.filter((BlogPost) => BlogPost.id!== id))
    //const response =await jsonServer.get('/blogposts');
    setBlogPosts(response.data);
  }

  const editBlogPost =async(id,title,content,callback) => {
    await jsonServer.put(`/blogposts/${id}`,{title:title,content:content});
      if(callback) {
        callback();
      }
  }

  return(
    <BlogContext.Provider value={{data: BlogPosts,addBlogPost,deleteBlogPost,editBlogPost,getBlogPosts}}>
      {children}
    </BlogContext.Provider>
  )
};

export default BlogContext;

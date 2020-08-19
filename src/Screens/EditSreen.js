import React,{useState,useContext} from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import BlogContext from '../Context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = ({navigation}) => {
  const id=navigation.getParam('id')
  const {data,addBlogPost,deleteBlogPost,editBlogPost}=useContext(BlogContext);
  const BlogPost=data.find((BlogPost) => BlogPost.id ===  navigation.getParam('id'));
  
  return(
   <BlogPostForm 
   initialValues={{title:BlogPost.title,content:BlogPost.content}}
     onSubmit={(title,content) => {
     editBlogPost(id,title,content,()=>{navigation.pop()})
   }} />
  )
}

const Styles=StyleSheet.create({

})

export default EditScreen;
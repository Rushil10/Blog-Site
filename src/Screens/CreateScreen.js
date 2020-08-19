import React,{useContext,useState} from 'react';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';
import BlogContext from '../Context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({navigation}) => {
  const {data,addBlogPost,deleteBlogPost}=useContext(BlogContext);
  return(
    <BlogPostForm onSubmit={(title,content) => {
      addBlogPost(title,content,() => navigation.navigate('Index'))
    }} />
  )
 
}

const styles=StyleSheet.create({
 

})

export default CreateScreen;
import React,{useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import BlogContext from '../Context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EvilIcons} from '@expo/vector-icons';


const ShowScreen = ({navigation}) => {
  navigation.getParam('id');
  const {data,addBlogPost,deleteBlogPost}=useContext(BlogContext);
  const BlogPost=data.find((BlogPost) => BlogPost.id ===  navigation.getParam('id'));
  return(
    <View>
      <Text>{BlogPost.title}</Text>
      <Text>{BlogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({navigation}) => {
  return{
    headerRight:<TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:navigation.getParam('id')})}>
      <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
  }
}

const styles=StyleSheet.create({

})

export default ShowScreen;
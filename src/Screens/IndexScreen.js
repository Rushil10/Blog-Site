import React,{useContext,useEffect} from 'react';
import {View,Text,StyleSheet, Button,TouchableOpacity} from 'react-native';
import BlogContext from '../Context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {

  const {data,addBlogPost,deleteBlogPost,getBlogPosts}=useContext(BlogContext);

  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener('didFocus',() => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  },[]);

  return (
    <View>
     <FlatList
      data={data}
      keyExtractor={BlogPosts => BlogPosts.title}
      renderItem={({item}) => {
        return(
         <TouchableOpacity onPress={() => navigation.navigate('Show',{id:item.id})}>
            <View style={styles.row}>
            <Text style={styles.title}>{item.title} - {item.id}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id,() => navigation.navigate('Index'))}>
            <Feather name="trash" style={styles.icon} />
            </TouchableOpacity>
          </View>
         </TouchableOpacity>
        )
      }} />
    </View>
  )
};

IndexScreen.navigationOptions = ({navigation}) => {
  return{
    headerRight:<TouchableOpacity onPress={()=>navigation.navigate('Create')}>
    <Feather style={styles.plus} name="plus" size={30} />
    </TouchableOpacity>
  };
}

const styles=StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:20,
    borderWidth:1,
    borderColor:'grey',
    marginBottom:2.5,marginTop:2.5,
    paddingHorizontal:10,
    marginLeft:2,marginRight:2,
  },
  icon:{
    fontSize:25,
  },
  title:{
    fontSize:18,
  },
  plus:{
    marginRight:10,
  }
})

export default IndexScreen;

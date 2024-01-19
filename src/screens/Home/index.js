import React from 'react';
import { Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import stylesHome from './styles/Home.styles';
import stylesStory from './styles/Story.styles';
import { getPostsData, getStoryData } from '../../components/data';

import PostComponent from '../../components/PostComponent';
import HeaderComponent from '../../components/HeaderComponent';

export function Home() {
  const [unreadMessages, setUnreadMessages] = React.useState(4);
  const postsData = getPostsData();
  const data = getStoryData();

  return (
    <SafeAreaView style={stylesHome.container}>
      <HeaderComponent unreadMessages={unreadMessages} />

      <View style={stylesStory.storys}>
        <FlatList
          horizontal={true}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => (
            <View>
              {item.item.isUser ? (
                <View style={stylesStory.storysCard}>
                  <Image style={stylesStory.storysCardImage} source={item.item.photoURL} />
                  <Text style={stylesStory.addStoryText}>+</Text>
                </View>
              ) : (
                <LinearGradient
                  colors={['#E1306C', '#FFA500']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={stylesStory.storysCard}
                >
                  <Image style={stylesStory.storysCardImage} source={item.item.photoURL} />
                </LinearGradient>
              )}
              <Text
                style={[
                  stylesStory.storyName,
                  item.item.isUser ? { color: 'grey' } : null,
                ]}
              >
                {item.item.name}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={stylesHome.divider} />
      <View style={{ marginTop: 5, flex: 1 }}>
        <PostComponent data={postsData} />
      </View>
    </SafeAreaView>
  );
}

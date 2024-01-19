// PostComponent.tsx
import React, { useState } from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import stylesContent from '../screens/Home/styles/Content.styles';

import Heart from '../assets/Heart.svg';
import Comment from '../assets/Comment.svg';
import Share from '../assets/Share.svg';
import Bookmark from '../assets/Bookmark.svg';
import Points from '../assets/points.svg';



const PostComponent = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const renderPost = ({ item }) => (
    
    <View style={stylesContent.contentAllPosts} key={item.id}>
      <View style={stylesContent.contentHeader}>
        <View style={stylesContent.contentHeaderLeft}>
          <Image style={stylesContent.contentHeaderLeftImage} source={item.userPhoto} />
          <Text style={stylesContent.contentHeaderLeftText}>{item.username}</Text>
        </View>
        <Points />
      </View>

      <Image
        source={item.postImage}
        style={stylesContent.postImage}
      />
      <View style={stylesContent.contentPost}>
        <Heart />
        <Comment />
        <Share />
        <Bookmark style={{ marginLeft: 'auto' }} />
      </View>

      <View style={stylesContent.contentInteraction}>
        <Text style={stylesContent.contentHeaderLeftText}>{item.likes} curtidas</Text>

        <View style={[stylesContent.contentHeaderLeft, { gap: 5 }]}>
          <Text style={stylesContent.contentHeaderLeftText}>{item.username}</Text>
          <Text style={[stylesContent.contentHeaderLeftText, { fontWeight: 'normal' }]}>{item.caption}</Text>
        </View>

        <Text style={{ color: '#808080' }}>{item.comments}</Text>

        <View style={[stylesContent.contentHeaderLeft, { gap: 5 }]}>
          <Text style={[{ color: '#808080' }, { fontSize: 11 }]}>{item.timestamp}</Text>
          <Text style={[stylesContent.contentHeaderLeftText, { fontSize: 11 }]}>Ver tradução</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderPost}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
    />
  );
};

export default PostComponent;

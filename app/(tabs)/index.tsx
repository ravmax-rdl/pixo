import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../Styles/feed.styles';
import { useAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/theme';
import { STORIES } from '@/constants/mock-data';
import Story from '@/components/Story';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Loader } from '@/components/Loader';
import Post from '@/components/Post';

export default function Index() {
  const { signOut } = useAuth();

  const posts = useQuery(api.posts.getFeedPosts);

  if (posts === undefined) return <Loader />;

  if (posts.length === 0) return <NoPostsFound />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>spotlight</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Ionicons name="log-out-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
         
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        ListHeaderComponent={<StoriesSection />}
      />
    </View>
  );
}

const StoriesSection = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
      {STORIES.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </ScrollView>
  );
};

const NoPostsFound = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
      }}
    >
      <Text style={{ fontSize: 20, color: COLORS.primary }}>No posts yet</Text>
    </View>
  );
};

import { Loader } from '@/components/Loader';
import { COLORS } from '@/constants/theme';
import { api } from '@/convex/_generated/api';
import { styles } from '@/Styles/feed.styles';
import { useQuery } from 'convex/react';
import { Image } from 'expo-image';
import { View, Text, ScrollView } from 'react-native';

export default function Bookmarks() {
  const bookmarkedPosts = useQuery(api.bookmarks.getBookmarkedPosts);

  if (bookmarkedPosts === undefined) return <Loader />;
  if (bookmarkedPosts.length === 0) return <NoBookMarksFound />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bookmarks</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 8, flexDirection: 'row', flexWrap: 'wrap' }}>
        {bookmarkedPosts.map((post) => {
          if (!post) return null;
          return (
            <View key={post._id} style={{ width: '33.3%', padding: 1 }}>
              <Image
                source={post.imageUrl}
                style={{ width: '100%', aspectRatio: 1 }}
                contentFit="cover"
                transition={300}
                cachePolicy="memory-disk"
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

function NoBookMarksFound() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
      }}
    >
      <Text style={{ color: COLORS.primary, fontSize: 22 }}>No Bookmarks Found</Text>
    </View>
  );
}

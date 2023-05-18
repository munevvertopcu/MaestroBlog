import React from 'react';
import { Text, TouchableOpacity, Image, View, Platform } from 'react-native';
import styles from './BlogPost.style';
import Duration from '../../../assets/svgComponents/Duration';

function BlogPost({ data, navigation }) {

    return (
        <TouchableOpacity style={Platform.OS == 'ios' ? styles.containerIos : styles.containerAndroid} onPress={() => navigation.navigate('BlogPostDetail', { content: data.content })}>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.readingTimeView}>
                <Duration fill="#666666" width={16} height={16} />
                <Text style={styles.totalReadingTime}>{` ${'Total reading time:'} ${data.totalReadingTime} ${'min'}`}</Text>
            </View>
            <Image
                source={{ uri: data.banner }}
                style={styles.image}
            />
            <Text style={styles.summary}>{data.summary}</Text>
        </TouchableOpacity>
    )
}

export default BlogPost;
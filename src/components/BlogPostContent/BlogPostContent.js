import React from "react";
import {ScrollView, Dimensions } from 'react-native';
import styles from './BlogPostContent.style';
import RenderHTML from "react-native-render-html";

function BlogPostContent({ content }) {
    const deviceWidth = Dimensions.get("window").width;

    const source = {
        html: content
      };

    return (
        <ScrollView style={styles.container}>
            <RenderHTML
                contentWidth={deviceWidth}
                source={source}
            />
        </ScrollView>
    )
}

export default BlogPostContent;
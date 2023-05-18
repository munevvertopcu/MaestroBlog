import React from "react";
import BlogPostContent from "../components/BlogPostContent";
import BackButton from "../../assets/svgComponents/BackButton";
import { View, TouchableOpacity } from "react-native";

function BlogPostDetail(props) {
    const content = props.route.params.content;
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{marginTop: 25, marginLeft: 5}}>
                <BackButton />
            </TouchableOpacity>
            <BlogPostContent content={content} />
        </View>
    )
}

export default BlogPostDetail;
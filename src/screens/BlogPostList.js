import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, ActivityIndicator, RefreshControl, StyleSheet } from 'react-native';
import DataContext from "../contexts/DataContext";
import BlogPost from "../components/BlogPost";

const apiUrl = 'https://www.lenasoftware.com/api/v1/en/maestro/1'

function BlogPostList(props) {
    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    const [page, setPage] = useState(1);
    const { blogPostData, setBlogPostData } = useContext(DataContext);

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const json = await response.json();
            if (page == 1) {
                setBlogPostData(json);
            } else {
                setBlogPostData({ ...blogPostData, ...json });
            }
            setRefreshing(false);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const renderItem = ({ item }) => {
        return (
            <BlogPost data={item} navigation={props.navigation} />
        )
    };

    const handleLoadMore = () => {
        setPage(page => page + 1);
    }

    const renderFooter = () => {
        return (
            isLoading ?
                <View
                    style={styles.loading}>
                    <ActivityIndicator animating size="large" />
                </View>
                : null
        );
    }

    useEffect(() => {
        if (page > 1) {
            fetchData();
        }
    }, [page]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (refreshing) {
            fetchData();
        }
    }, [refreshing]);

    return (
        isLoading ? (
            <ActivityIndicator />
        ) :
            (
                <View style={styles.container}>
                    <Text style={styles.header}>Lastest Posts</Text>
                    <FlatList
                        data={blogPostData.result}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        refreshControl={
                            < RefreshControl refreshing={refreshing}
                                onRefresh={() => setRefreshing(true)} />
                        }
                        onEndReached={() => handleLoadMore()}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={() => renderFooter()}
                    />
                </View>
            )
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        backgroundColor: '#EDEDED'
    },
    header: {
        marginLeft: 20,
        fontSize: 17,
        marginVertical: 10
    },
    loading: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: '#CED0CE',
    }
})

export default BlogPostList;
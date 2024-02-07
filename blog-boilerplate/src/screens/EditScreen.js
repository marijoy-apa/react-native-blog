import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Context } from "../context/BlogContext";
import BlogPostForm from "../component/BlogPostForm";

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);

    const id = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id === id);

    console.log(blogPost.title)
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <BlogPostForm
            onSubmit={(title, content) => { editBlogPost(id, title, content, () => { navigation.pop() }) }}
            initialValue={{ title: blogPost.title, content: blogPost.content }}
        />
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        // borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,

    },
    icon: {
        fontSize: 24,
    }
})

export default EditScreen;
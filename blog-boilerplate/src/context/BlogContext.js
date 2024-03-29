import createDataContext from "./createDataContext";


const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [...state, {
                id: Math.floor(Math.random() * 9999),
                title: action.payload.title,
                content: action.payload.content,
            }]
        case "delete_blogpost":
            return state.filter(blogpost => blogpost.id !== action.payload
            );

        case "edit_blogpost":
            return state.map((blogpost) => {
                return blogpost.id === action.payload.id ? action.payload : blogpost
                // if (blogpost.id === action.payload.id) {
                //     return action.payload;
                // }
                // else {
                //     return blogpost;
                // }
            })
        default:
            return state;
    }
}
const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } });
        callback();
    }
}
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({
            type: 'edit_blogpost',
            payload: { id, title, content }
        });
        if (callback) {
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'Text Blog', content: 'Test Content', id: "1" }]
);
export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // token: "BQBJkG0xc6-gaEwPfz3JnVKkbMAQdmB9FHkbi62crhz-mTDSv2hEMegSJ0I-arQDxgY51acyqVgDzjbNxE-v-xbfBz-kbpIjCHqTxGUrFyzep5fYuOUtC5GplL8GH0tRz9YucdoDCN-Kim6Nx_dJduz0Vlj3h5EalCGVHm5W7C5o_PQ5eGGq",
};

const reducer = (state, action) => {
    console.log("Reducer Action", action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist,
            }
        default:
            return state;
    }

};
export default reducer;
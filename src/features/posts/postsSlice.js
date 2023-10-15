import { apiSlice } from "../../api/apiSlice";

export const extentedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // fetch post list
    getPosts: builder.query({
      query: () => "/posts",
      transformResponse: (response) => response.data,
      provideTags: [{ type: "Post", id: "LIST" }],
    }),
    // posts by userId
    // add post
    // update post
    // delete post
  }),
});

export const { useGetPostsQuery } = extentedApiSlice;

import { QUESTIONS_URL } from '../constants/constants';
import { apiSlice } from './apiSlices';

export const questionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => ({
        url: QUESTIONS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getQuestion: builder.query({
      query: (id) => ({
        url: `${QUESTIONS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});



export const { useGetQuestionsQuery, useGetQuestionQuery } = questionsApiSlice;

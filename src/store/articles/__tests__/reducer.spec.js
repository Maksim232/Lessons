
import reducer, { state, status } from '../reducer'
import { getArticles, getArticlesFailure, getArticlesRequest, getArticlesSuccess, GET_ARTICLES_REQUEST } from "../actions";



describe("GET_ARTICLES_REQUEST", () => {
    it('GET_ARTICLES_REQUEST', () => {

        const expected = {
            status: REQUEST_STATUS.PENDING,
        };

        expect(expected).toEqual({
            ...state,
            request: {
                status: REQUEST_STATUS.PENDING,
            },
        })
    })
})
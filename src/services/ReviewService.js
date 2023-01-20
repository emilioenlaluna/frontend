import axios from 'axios';
export default class ReviewService {
    static async createReview(data) {
        const res = await axios.post(
            'http://172.174.5.187:5000/api/v1/movies/review',
            data
        );
        return res;
    }
    static async deleteReview(data) {
        const res = await axios.delete(
            'http://172.174.5.187:5000/api/v1/movies/review',
            { data }
        );
        return res;
    }
    static async updateReview(data) {
        const res = await axios.put(
            'http://172.174.5.187:5000/api/v1/movies/review',
            data
        );
        return res;
    }
}

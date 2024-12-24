import axios from 'axios';

const POST_VOTES_URL = 'https://fandom-k-api.vercel.app/12-3/votes';

export const postVotes = async (id) => {
  try {
    const response = await axios.post(POST_VOTES_URL, { idolId: id });
    return response.data;
  } catch (error) {
    console.error('투표 요청 실패:', error);
    throw new Error('투표 처리에 실패했습니다. 다시 시도해주세요.');
  }
};

export default postVotes;

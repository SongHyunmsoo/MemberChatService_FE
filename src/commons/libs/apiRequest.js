import axios from 'axios'; // 엑시오스 불러오기
import cookies from 'react-cookies';
/**
 *
 * @param {*} url
 * @param {*} method 메소드 기본방식은 GET 방식
 * @param {*} data
 * @param {*} headers
 * @returns
 */
export default function apiRequest(url, method = 'GET', data, headers = {}) {
  // /member/join -> http://localhost:3001/api/v1/member/join
  // https://주소/api/....

  if (!url || !url.trim()) return;

  if (!/^http[s]?:/i.test(url)) {
    url = process.env.REACT_APP_API_URL + url;
  }

  // GET -> ?키=값&키=값
  // GEt 방식은 주소형태로 가져와야 한다.
  method = method.toUpperCase();
  if (method === 'GET' && data) {
    const params = new URLSearchParams(data);
    url += '?' + params.toString();
    data = null;
  }

  const token = cookies.load('token');
  if (token && token.trim()) {
    headers.Authorization = `Bearer ${token}`;
  }

  // 검증 실패시 400
  return axios({
    method, // 메소드
    url, // URL
    data, // 데이터
    headers, // 헤더
    validateStatus: (state) => state < 500,
  });
<<<<<<< HEAD
}
=======
}


>>>>>>> 2d6e5c342e9e381a2d5fc689fab5f0fe9ede9180

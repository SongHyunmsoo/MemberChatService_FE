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

  if (!url || !url.trim()) return;  // URL 데이터가 없으면 처리 X

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

  const token = cookies.load('token');  // 토큰을 가져오기
  if (token && token.trim()) { // 토큰이 존재하고  공백을 제거해도 존재 해야한다.
    headers.Authorization = `Bearer ${token}`; // 요청시마다 토큰이 가져와서 로그인 상태를 유지한다.
  }

  // 검증 실패시 400
  return axios({
    method, // 메소드
    url, // URL
    data, // 데이터
    headers, // 헤더
    validateStatus: (state) => state < 500,
  });
}
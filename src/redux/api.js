import FecthHelper from "../helpers/FetchHelper";

const api = {
  fetchPhotos: () => FecthHelper.fetchJsonGet('/photos'),


  /**
   * user api
   */

  //이름은 최대한 서버단ㅇ서 설명해주는거 그대로 써주는게좋음
  fetchUserProfile: username => FecthHelper.fetchJsonGet(`/users/${username}`),
  fetchUserPortfolioLink: username => FecthHelper.fetchJsonGet(`/users/${username}/portfolio`),
  fetchUserPhotos : username => FecthHelper.fetchJsonGet(`/users/${username}/photos`),
  fetchUserStatistics : id => FecthHelper.fetchJsonGet(`/photos/${id}/statistics`)

};

export default api;
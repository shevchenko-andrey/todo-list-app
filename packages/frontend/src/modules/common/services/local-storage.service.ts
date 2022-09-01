class LocalStoregeService {
  setToken(token: string) {
    window.localStorage.setItem('token', token);
  }

  getToken() {
    return window.localStorage.getItem('token');
  }
}
export default new LocalStoregeService();

class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  async createPost(post) {
    try {
      const request = new Request(this.url + "/posts.json", {
        method: "post",
        body: JSON.stringify(post),
      });

      const response = await fetch(request);
      return await response.json();
    } catch (eror) {
      console.error(eror);
    }
  }

  async fetchPosts() {
    try {
      const request = new Request(this.url + "/posts.json", {
        method: 'get'
      });
      const response = await fetch(request);
      return await response.json();
    } catch (eror) {
      console.error(eror);
    }
  }

  async fetchPostById(id) {
    try {
      const request = new Request(`${this.url}/posts/${id}.json` ,{
        method: 'get'
      });
      const response = await fetch(request);
      return await response.json();
    } catch (eror) {
      console.error(eror);
    }
  }
}

export const apiSservice = new ApiService(
  "https://js-prepare-5de37-default-rtdb.firebaseio.com"
);

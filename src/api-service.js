export default class BlogServise {
  async createAccount(data) {
    try {
      const result = await fetch('https://blog.kata.academy/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ user: data }),
      }).then((body) => body);
      if (!result.ok) {
        throw new Error('Код ошибки: ' + result.status);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async editAccount(data) {
    try {
      const result = await fetch('https://blog.kata.academy/api/user/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ user: data }),
      }).then((body) => body);
      if (!result.ok) {
        throw new Error('Код ошибки: ' + result.status);
      }
      const userData = await result.json();
      return userData;
    } catch (error) {
      console.log(error);
    }
  }
  async singInAccount(data) {
    try {
      const result = await fetch('https://blog.kata.academy/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ user: data }),
      }).then((body) => body);
      if (!result.ok) {
        throw new Error('Код ошибки: ' + result.status);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async createArticle(data) {
    try {
      const result = await fetch('https://blog.kata.academy/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ article: data }),
      }).then((body) => body);
      if (!result.ok) {
        throw new Error('Код ошибки: ' + result.status);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async editArticle(data, slug) {
    try {
      const result = await fetch(`https://blog.kata.academy/api/articles/${slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ article: data }),
      }).then((body) => body);
      if (!result.ok) {
        throw new Error('Код ошибки: ' + result.status);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteArticle(slug) {
    try {
      const response = await fetch(`https://blog.kata.academy/api/articles/${slug}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async liked(slug) {
    try {
      const response = await fetch(`https://blog.kata.academy/api//articles/${slug}/favorite`, {
        method: 'POST',
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async unLiked(slug) {
    try {
      const response = await fetch(`https://blog.kata.academy/api//articles/${slug}/favorite`, {
        method: 'DELETE',
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async getPosts(page) {
    try {
      const response = await fetch(`https://blog.kata.academy/api/articles?limit=5&offset=${page}`).then((result) =>
        result.json()
      );
      return await response;
    } catch (error) {
      console.log(error);
    }
  }
  async getPost(slug) {
    try {
      const response = await fetch(`https://blog.kata.academy/api/articles/${slug}`).then((result) => result.json());
      return await response;
    } catch (error) {
      console.log(error);
    }
  }
}

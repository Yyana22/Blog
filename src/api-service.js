export default class BlogServise {
  async createAccount(user) {
    try {
      const result = await fetch('https://blog.kata.academy/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: user.username,
            email: user.email,
            password: user.password,
          },
        }),
      }).then((body) => body);
      if (!result.ok) {
        throw new Error('Код ошибки: ' + result.status);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async singInAccount(user) {
    try {
      const result = await fetch('https://blog.kata.academy/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: user.email,
            password: user.password,
          },
        }),
      }).then((body) => body);
      if (!result.ok) {
        throw new Error('Код ошибки: ' + result.status);
      }
      return result;
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

const res = new BlogServise();
console.log(res.singInAccount().then((body) => body));

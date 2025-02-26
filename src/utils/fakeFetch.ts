import users from "../users.json";
function fakeFetch(
  url: string,
  options: {
    method: "POST" | "GET";
    headers?: string;
    body: string;
  }
) {
  if (options.method != "POST")
    return Promise.reject({
      status: 405,
      message: "Λάθος method",
    });

  if (
    users?.find(
      (user) =>
        user.username === JSON.parse(options.body).username?.trim() &&
        user.password === JSON.parse(options.body).password
    )
  ) {
    return Promise.resolve({
      status: 200,
      ok: true,
      json: () =>
        Promise.resolve({
          message: "Συνδέθηκα",
          isAuthenticated: true,
          username: JSON.parse(options.body).username,
        }),
    });
  } else {
    return Promise.reject({
      status: 401,
      message: "Μη έγκυρα στοιχεία",
    });
  }
}
export default fakeFetch;

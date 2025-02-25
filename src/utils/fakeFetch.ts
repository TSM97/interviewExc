function fakeFetch(
  url: string,
  options: {
    method: "POST" | "GET";
    headers?: string;
    body: string;
  }
) {
  const { username, password } = JSON.parse(import.meta.env.VITE_VALID_USER);

  console.log(username + ": " + password);

  if (options.method != "POST")
    return Promise.reject({
      status: 405,
      message: "Λάθος method",
    });

  if (
    JSON.parse(options.body).username?.trim() === username &&
    JSON.parse(options.body).password?.trim() === password
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

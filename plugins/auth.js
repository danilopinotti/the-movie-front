export default function ({ $auth }) {
  $auth.authenticatedUrl = (url) => {
    return url + '?session_id=' + $auth.getToken('themoviedb')
      + '&api_key=' + process.env.apiKey;
  }
}

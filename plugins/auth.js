export default function ({$auth}) {
  $auth.authenticatedUrl = (url) => {
    let [baseUrl, currentSearch] = url.split('?');
    let searchParams = new URLSearchParams(currentSearch);

    searchParams.set("api_key", process.env.apiKey);
    searchParams.set("session_id", $auth.getToken('themoviedb'));

    return baseUrl + '?' + searchParams.toString();
  }
}

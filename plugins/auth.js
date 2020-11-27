export default function ({ $auth }) {
  $auth.setApiKey = (apiKey) => {
    $auth.$storage.setUniversal('apiKey', apiKey);
  }

  $auth.getApiKey = () => {
    return $auth.$storage.getUniversal('apiKey')
  }

  $auth.authenticatedUrl = (url) => {
    return url + '?session_id=' + $auth.getToken('themoviedb')
      + '&api_key=' + $auth.getApiKey();
  }
}

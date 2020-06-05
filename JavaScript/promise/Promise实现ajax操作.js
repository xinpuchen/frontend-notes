const getJSON = url => {
  const promise = new Promise(function(resolve, reject) {
    const handle = function() {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = handle;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.send();
  });
  return promise;
};

getJSON('/post.json').then(
  function(json) {
    console.log('content:' + json);
  },
  function(error) {
    console.error('error:' + error);
  },
);

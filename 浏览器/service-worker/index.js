if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(function (registration) {
      console.log(registration);
    })
    .catch(function (err) {
      console.log(err);
    });
}

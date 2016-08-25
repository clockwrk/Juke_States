juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/js/album/albumTemplate.html'

  });
});
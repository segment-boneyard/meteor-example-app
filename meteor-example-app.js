analytics.load("x9a540mt9j");

if (Meteor.isClient) {
  analytics.track('Loaded on client!');
}

if (Meteor.isServer) {
  analytics.track({
    userId: 'foo',
    event: 'Loaded on server!'
  });
}
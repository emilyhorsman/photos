module.exports = {
  options: {
    connection: 'postgres:///photos',
    schema: ['app_public'],
    appendPlugins: '@graphile-contrib/pg-simplify-inflector',
    enhanceGraphiql: true,
  },
};

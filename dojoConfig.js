var locationPath = location.pathname.replace(/\/[^\/]+$/, '');

window.dojoConfig = {
  async: true,
  parseOnLoad: true,
  deps: ['app/main'],
  packages: [{
    name: 'react',
    location: locationPath + '/nod_modules/react/',
    main: 'react'
  }, {
    name: 'dist',
    location: locationPath + '/dist',
    main: 'index'
  }]
};

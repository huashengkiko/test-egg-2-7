'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  validatePlus: {
    enable: true,
    package: 'egg-validate-plus',
  },
  
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
      
  utils: {
    enable: true,
    package: '@taccisum/egg-utils',
  },
      
  eureka: {
    enable: true,
    package: '@taccisum/egg-eureka',
  },
      
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc',
  },
      
  tx: {
    enable: true,
    package: 'egg-tx',
  },
      
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
      
  apollo: {
    enable: true,
    package: '@taccisum/egg-apollo',
  },
      

};

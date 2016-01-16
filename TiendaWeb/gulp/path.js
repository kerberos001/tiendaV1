'use strict';

import {ROOT,ROOT_TEMP} from './const';


export const paths = {
  root : `${ROOT}`,
  gulpfile:   ['/gulpfile.js', '/gulp/**/*.js'],
  app:{
    basePath :`/${ROOT}/`
  },
  build:{
      compiled :`${ROOT_TEMP}/**`,
      nodeModules:`node_modules/**/*`,
      ignore:{
          basePath:`!${ROOT_TEMP}`,
          jspmPackages:`!${ROOT_TEMP}/jspm_packages`
      }
  }
};

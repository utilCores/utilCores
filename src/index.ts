import config, { DEVELOPMENT } from '@/constants/app.config';
declare const module: any;

if (config.env === DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept();
  }
}

class UtilCores {}

export default UtilCores;

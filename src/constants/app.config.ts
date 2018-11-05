declare const process: any;

const { env } = process;

// Environments
const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

const CONFIG = {
  env,
};

export {
  DEVELOPMENT,
  PRODUCTION,
};

export default CONFIG;

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBe66gPTEy8558HKKux61dZYiEjT76VWeE',
    authDomain: 'airflow-8efeb.firebaseapp.com',
    databaseURL: 'https://airflow-8efeb.firebaseio.com',
    projectId: 'airflow-8efeb',
    storageBucket: 'airflow-8efeb.appspot.com',
    messagingSenderId: '654570850644'
  }
};

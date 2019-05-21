[![Netlify Status](https://api.netlify.com/api/v1/badges/7f25524f-b2ab-43c2-9d55-5f079dca0c6e/deploy-status)](https://app.netlify.com/sites/race-support/deploys)

```sh
npm i
npm start
```

follow directions at [race-support-backend](https://github.com/stahlscott/race-support-backend) to get backend stood up

navigate browser to:

`localhost:3000`

create a .env file with the following entries:

```sh
REACT_APP_API_SERVER=http://localhost:5003
REACT_APP_ADMIN_USERNAME=desired_admin_username
REACT_APP_ADMIN_PASSWORD=desired_admin_password
REACT_APP_BACKEND_USERNAME=matched_to_backend_env_var
REACT_APP_BACKEND_PASSWORD=matched_to_backend_env_var
REACT_APP_SECRET=iAmGoingToEncryptThisReallyWell
```

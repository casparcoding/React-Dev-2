This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Setup
You must have the following modules to be able to run the app:
```
Docker
Docker-compose
Ruby
nib - A ruby gem wrapping docker compose commands for easy consumption of docker containers.

```

### Develop
Run 
```
yarn install

nib build
nib setup web
nib up web

```
You have to assign `docker` and `nib` groups with `sudo` permissions for you to be able to run above commands smoothly.
And you will be good to go.

### Deploy
Run 
```
yarn build
```
And serve the built files to your preffered static site host.

Alternatively, you can access the live site <a href="https://deedmob-search.surge.sh/">here</a>.
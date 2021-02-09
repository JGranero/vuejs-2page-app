## Project setup
```
Node: n v12.6.0
Yarn: yarn install
Json-Server: npm install -g json-server
             curl -o db-initial.json https://tracktik-challenge.staffr.com/db
             cp db-initial.json db.json
             json-server --watch db.json
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

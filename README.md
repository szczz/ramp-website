# ramp-pcar
Was previously called ramp-website but had to be renamed to make the endpoint for the website bilingual. 
If you're looking for the RAMP4 repo, its [here](https://github.com/ramp4-pcar4/ramp4-pcar4).

## Project setup
```
yarn install
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

## Updating RAMP versions
The marketing site now contains instances of both RAMP2 and RAMP4. Both versions use a global variable called ```RAMP``` and will cause a conflict. 
When updating ramp.js to the latest version, you will need to update the variable name to ```RAMP4``` at the top of the script.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
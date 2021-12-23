# Cypress Docker Django Next.js

Basic example of testing a Full Stack application with Cypress inside of Docker.

## Docker

### `cypress open` in Docker

- Install XQuartz on your host. On mac: `brew install --cask xquartz`
- Open XQuartz: `open -a XQuartz`
- In the XQuartz preferences, go to the "Security" tab and make sure you’ve got "Allow connections from network clients" checked
- Add your IP address to XQuartz by running the following commands in your terminal:

```bash
$ IP=$(ipconfig getifaddr en0)

# if this command doesn't work, try restarting XQuartz or your machine
$ xhost + $IP
10.0.0.112 being added to access control list

$ DISPLAY=$IP:0
```

- In the same terminal, run:

```
make cypress-open-docker
```

If you're having problems, check out the following blog posts:

- [Run Cypress with a single Docker command](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/)
- [Running GUI applications using Docker for Mac - Sourabh](https://sourabhbajaj.com/blog/2017/02/07/gui-applications-docker-mac/)

### `cypress run` in Docker

```
make cypress-run-docker
```

## Host Machine

### `cypress open` on Host

```
make cypress-open-host
```

### `cypress run` on Host

```
make cypress-run-host
```

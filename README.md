# Docker Django Next.js Cypress

Basic example of testing a Full Stack application with Cypress inside of Docker.

## Run Cypress in Docker

### Run `cypress open` in Docker

- Install xQuartz on your host. On mac: `brew install --cask xquartz`
- Open XQuartz: `open -a XQuartz`
- In the XQuartz preferences, go to the "Security" tab and make sure you’ve got "Allow connections from network clients" checked
- Add your IP address to XQuartz by running the following commands in your terminal:

```
$ IP=$(ipconfig getifaddr en0)
$ xhost + $IP
10.0.0.112 being added to access control list
$ DISPLAY=$IP:0
```

- In the same terminal, run `make cypress-open-docker`

### Run `cypress run` in Docker

```
make cypress-run-docker
```

## Run Cypress on Host

```
# cypress open
make cypress-open-host

# cypress run
make cypress-run-host
```

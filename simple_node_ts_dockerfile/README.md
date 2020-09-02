## Building image

```bash
docker build -t node/ts-express .
```

## Run image

```bash
docker run -p 3333:8080 -ti node/ts-express
```
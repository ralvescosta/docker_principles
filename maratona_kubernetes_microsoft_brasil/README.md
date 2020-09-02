# Microsoft Brasil - Maratona Kubernetes with Erick Wendel

## Modulo 2 - Lição 3

### Create Docker image

```bash
docker build -t api-herois .
```

### Create Container

A aplicação utilizada necessita de uma instancia do mongodb, desta forma inicialmente
precisa instanciar um container do mongoDB. Apos é preciso realizar o link
do container da aplicação com o container do mongoDB criado.

```bash
docker run -d --name mongodb mongo:3.5

docker run -p 3000:3000  --link mongodb:mongodb -e MONGO_URL=mongodb api-herois
```

## Modulo 2 - Lição 4 - Docker compose
## Modulo 2 - Lição 5 - Docker hub
## Basic Commands

- List Docker images: 

```bash
docker images
```

- List all containers: 

```bash
docker ps -a
```

- Docker run with terminal interaction:

```bash
docker run -ti
```

- Docker Ubuntu with terminal interaction:

```bash
docker run -ti ubuntu /bin/bash
```

- Live container and mantais container running: ctrl + p + q

- Enter container with is running: $ 

```bash
docker attach CONTAINER_ID
```

- Only create container:

```bash
docker create ubuntu
```

- Verify container resources:

```bash
docker stats CONTAINER_ID
```

- Verify how process running on container:

```bash
docker top CONTAINER_ID
```

- Verify container logs:

```bash
docker logs CONTAINER_ID
```

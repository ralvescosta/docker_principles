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

- Inspect All container configuration:

```bash
docker inspect CONTAINER_ID

docker inspect CONTAINER_ID | grep -i mem
```

- Create Container with MEM Limit:

```bash
docker run -ti --memory 512m debian
```

- Update Container MEM Limit:

```bash
docker update -m 256m CONTAINER_ID
```

- The CPU configuration. Imagine you have three containers, at first container 
you set the CPU to be 1024, at second 514 and at third 512. In this case, 
the first will receive 50% of CPU and the others two 25%.

```bash
docker run -ti --cpu-shares 1024 --name first debian
docker run -ti --cpu-shares 512 --name second debian
docker run -ti --cpu-shares 512 --name third debian
```

- To update CPU is similar to MEM:

```bash
docker update --cpu-shares 512 first
```
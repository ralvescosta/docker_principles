# Docker LinuxTips Training

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

## Config Container Memory

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

## Config Container CPU

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

## Volumes

- Volumes is the sharing of the host file system with the container, create:

```bash
docker run -tu -v /volume ubuntu /bin/bash
```

- Create Volume to specific path on host:

```bash
docker run -tu -v /root/some_path:/volume ubuntu /bin/bash
```

- Container DATA ONLY: Container using to sharing volumes to others containers

```bash
docker create -v /data --name dbdata ubuntu

docker run -d -p 5432:5432 --name pgsql1 --volumes-from dbdata -e POSTGRES_USERSQL=docker -e POSTGRES_PASSSQL=docker -e POSTGRESSQL_DB=doc

docker run -d -p 5433:5432 --name pgsql2 --volumes-from dbdata -e POSTGRES_USERSQL=docker -e POSTGRES_PASSSQL=docker -e POSTGRESSQL_DB=doc
```

## Dockerfile

### Instructions

- FROM debian //First instruction to set the base imagem to mount own image

- MAINTAINER Rafael // author

- RUN apt-get update && apt-get install apache2 && apt-ger clean //That command 
always if execute create a container layer, and each container layer is imitable 
"read-only", so if you create several run the container created several layers 
ready-only, only last layer is read-write. Prefere combine multiple commands concats with '&&'

- ADD apa.txt //Copy host file (All candy of files) to into the container 

- CMD ["sh", "-c", "echo", "$HOME"] //Principal entry point commands

- LABEL Description // Metadata

- COPY //only files and directory's

- ENTRYPOINT ["/user/bin/apache2ctl", "-D", "FOREGROUND"] //Principal app into the container, 
is important to set the principal application on ENTRYPOINT because if the something
do on the principal application configured the container is turn of. 

- ENV NODE_ENV=development //environments

- EXPOSE 80 //container port to expose

- USER USERNAME //set container user

- WORKDIR /batata //Set the principal directory for a container

- VOLUME /some_directory

### build

```bash
docker build -t NAME:1.0 .
```
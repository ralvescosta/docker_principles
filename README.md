## Basic Commands

- List Docker images: $ docker images

- List all containers: $ docker ps -a

- Docker run with terminal interaction: $ docker run -ti

- Docker Ubuntu with terminal interaction: $ docker run -ti ubuntu /bin/bash

- Live container and mantais container running: ctrl + p + q

- Enter container with is running: $ docker attach CONTAINER_ID

- Only create container: $ docker create ubuntu

- Verify container resources: $ docker stats CONTAINER_ID

- Verify how process running on container: $ docker top CONTAINER_ID

- Verify container logs: $ docker logs CONTAINER_ID

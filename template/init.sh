#!/bin/bash
timestamp=$(date +%s)
echo "<<========Start Process ======>>"
#docker compose up --build && 
# docker compose exec -it chat sh "sequelize-cli init && sequelize-cli db:migrate && sequelize-cli db:seed:all"
# docker compose run --rm chat  npm run init 
# docker compose up --build 
# docker compose up -d
docker compose build
docker compose run --rm {{name}}  npm run init 
docker compose run --rm nodejsproject  npm run test:watch 
docker compose logs
## Running API

```bash
cd contacts-api
docker compose up -d
docker exec -it contacts-api-myapp-1  php artisan migrate
docker exec -it contacts-api-myapp-1 php artisan db:seed
```

## Running Frontend

```bash
cd contacts-web
yarn

## run app
yarn dev

## run tests
yarn test:unit
```

# Mock API DSEP


## Run Project

```sh
npm i
npm start
```

## Endpoints

|             ENDPOINT              | METHOD |                PARAMETERS                  | RESPONSE TYPE |
| --------------------------------- | ------ | ------------------------------------------ | ------------- |
| /api/admin/user_roles             | POST   | create user roles                          | OBJECT        |
| /api/admin/user_roles/:id         | GET    | get user role                              | OBJECT        |
| /api/admin/user_roles/:id         | PATCH  | update user role                           | OBJECT        |
| /api/admin/user_roles/:id         | DELETE | delete user role                           | OBJECT        |
| /api/admin/user_roles/:id/disable | POST   | disable user role                          | OBJECT        |
| /api/admin/user_roles/:id/enable  | POST   | enable user role                           | OBJECT        |  
| /api/admin/permission             | POST   | create permission                          | OBJECT        |
| /api/admin/users                  | POST   | create user                                | OBJECT        |
| /api/admin/users/:id              | GET    | get user                                   | OBJECT        |
| /api/admin/users/:id              | PATCH  | update user                                | OBJECT        |
| /api/admin/users/:id              | DELETE | delete user                                | OBJECT        |
| /api/admin/users/:id/disable      | POST   | disable user                               | OBJECT        |
| /api/admin/users/:id/enable       | POST   | enable user                                | OBJECT        |
| /api/admin/users/:id/invate       | POST   | invite user                                | OBJECT        |    
| /api/login                        | POST   | authenticate user                          |               |







 
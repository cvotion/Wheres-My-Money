# npm i express ejs passport@0.5 passport-local bcryptjs cookie-session helmet pg pg-hstore sequelize

# sequelize model:generate --name roles --attributes name:string

# sequelize model:generate --name users --attributes username:string,email:string,password:string,roleID:integer

# sequelize model:generate --name records --attributes userID:integer,
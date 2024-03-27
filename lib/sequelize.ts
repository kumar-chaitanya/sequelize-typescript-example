import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  host: 'localhost',
  password: 'P@ssw0rd',
  dialect: 'mysql',
  database: 'movies',
  // storage: ':memory:',
  models: [__dirname + '/models']
});

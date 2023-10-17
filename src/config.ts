import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
export default (): any => {
  console.log('123---------------->', process.env.POSTGRES_PASSWORD);
  return {
    envFilePath: `.env.${process.env.MODE}`,
    database: {
      type: 'postgres',
      host: '127.0.0.1',
      port: process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      migrations: [join(__dirname, '**', '*.migration.{ts,js}')],
      synchronize: process.env.MODE != 'production',
    },
    gql: {
      playground: false,
      plugins:
        process.env.MODE == 'production'
          ? []
          : [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: 'schema.gql',
    },
  };
};

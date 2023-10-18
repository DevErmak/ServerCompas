import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ConfigService } from '@nestjs/config';
export default (configService: ConfigService): any => {
  console.log('123---------------->', configService.get('POSTGRES_PORT'));
  return {
    // envFilePath: `/home/dev/Documents/reactexemples/server/compas/.env.development`,
    // envFilePath: `../.env.${process.env.POSTGRES_PORT}`,
    database: {
      type: 'postgres',
      host: 'localhost',
      port: configService.get('POSTGRES_PORT'),
      // port: process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      migrations: [join(__dirname, '**', '*.migration.{ts,js}')],
      synchronize: true,
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

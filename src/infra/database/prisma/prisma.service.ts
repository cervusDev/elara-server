import {
  Injectable,
  OnModuleInit,
  Logger,
  INestApplication,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // usando lo registrador para logs de aplicativos
  logger = new Logger(PrismaService.name);

  // especificação do uso do log
  constructor() {
    super({ log: [{ emit: 'event', level: 'query' }] });
  }

  async onModuleInit() {
    await this.$connect();

    this.$on('query' as any, async (e: any) => {
      this.logger.debug(`(${e.duration}ms) ${e.query}`);
    });
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async truncate() {
    const records = await this.$queryRawUnsafe<any[]>(
      `SELECT tablename
      FROM pg_tables
      WHERE schemaname = 'public'`,
    );

    records.forEach((record) => this.truncateTable(record.tablename));
  }

  async truncateTable(tablename: any) {
    if (tablename === undefined || tablename === '_prisma_migrations') return;

    try {
      await this.$executeRawUnsafe(
        `TRUNCATE TABLE "public"."${tablename}" CASCADE;`,
      );
    } catch (err) {
      console.log(err);
    }
  }

  async resetSequences() {
    const results = await this.$queryRawUnsafe<any[]>(
      `SELECT c.relname
      FROM pg_class AS c
      JOIN pg_namespace AS n ON c.relnamespace = n.oid
      WHERE c.relkind = 'S'
      AND n.nspname = 'public'`,
    );

    for (const { record } of results) {
      this.$executeRawUnsafe(
        `ALTER SEQUENCE "public"."${record.relname}" RESTART WITH 1;`,
      );
    }
  }
}

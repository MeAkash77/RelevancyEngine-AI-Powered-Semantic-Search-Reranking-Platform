// https://env.t3.gg/docs/nextjs#create-your-schema
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const serverEnv = createEnv({
  server: {
    XAI_API_KEY: z.string().min(1).optional(),

    OPENAI_API_KEY: z.string().min(1),

    GROQ_API_KEY: z.string().min(1).optional(),

    GOOGLE_GENERATIVE_AI_API_KEY: z.string().min(1).optional(),

    DAYTONA_API_KEY: z.string().min(1).optional(),

    DATABASE_URL: z.string().min(1),

    BETTER_AUTH_SECRET: z.string().min(1),

    GITHUB_CLIENT_ID: z.string().min(1).optional(),
    GITHUB_CLIENT_SECRET: z.string().min(1).optional(),

    GOOGLE_CLIENT_ID: z.string().min(1).optional(),
    GOOGLE_CLIENT_SECRET: z.string().min(1).optional(),

    TWITTER_CLIENT_ID: z.string().min(1).optional(),
    TWITTER_CLIENT_SECRET: z.string().min(1).optional(),

    REDIS_URL: z.string().min(1).optional(),

    UPSTASH_REDIS_REST_URL: z.string().min(1).optional(),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),

    ELEVENLABS_API_KEY: z.string().min(1).optional(),

    TAVILY_API_KEY: z.string().min(1).optional(),

    EXA_API_KEY: z.string().min(1).optional(),

    VALYU_API_KEY: z.string().min(1).optional(),

    TMDB_API_KEY: z.string().min(1).optional(),

    YT_ENDPOINT: z.string().min(1).optional(),

    FIRECRAWL_API_KEY: z.string().min(1).optional(),

    NOTTE_API_KEY: z.string().optional(),

    PARALLEL_API_KEY: z.string().min(1).optional(),

    OPENWEATHER_API_KEY: z.string().min(1).optional(),

    GOOGLE_MAPS_API_KEY: z.string().min(1).optional(),

    AMADEUS_API_KEY: z.string().min(1).optional(),

    AMADEUS_API_SECRET: z.string().min(1).optional(),

    CRON_SECRET: z.string().min(1),

    BLOB_READ_WRITE_TOKEN: z.string().min(1).optional(),

    SMITHERY_API_KEY: z.string().min(1).optional(),

    COINGECKO_API_KEY: z.string().min(1).optional(),

    SUPADATA_API_KEY: z.string().min(1).optional(),

    QSTASH_TOKEN: z.string().min(1).optional(),

    RESEND_API_KEY: z.string().min(1).optional(),

    SUPERMEMORY_API_KEY: z.string().min(1).optional(),

    SPOTIFY_CLIENT_ID: z.string().min(1).optional(),

    SPOTIFY_CLIENT_SECRET: z.string().min(1).optional(),

    MCP_CREDENTIALS_ENCRYPTION_KEY: z.string().min(1).optional(),

    MCP_OAUTH_CALLBACK_ORIGIN: z.string().url().optional(),

    ALLOWED_ORIGINS: z
      .string()
      .optional()
      .default('http://localhost:3000'),

    GITHUB_MCP_CLIENT_ID: z.string().optional(),
    GITHUB_MCP_CLIENT_SECRET: z.string().optional(),

    BOX_MCP_CLIENT_ID: z.string().optional(),
    BOX_MCP_CLIENT_SECRET: z.string().optional(),

    DROPBOX_MCP_CLIENT_ID: z.string().optional(),
    DROPBOX_MCP_CLIENT_SECRET: z.string().optional(),

    SLACK_MCP_CLIENT_ID: z.string().optional(),
    SLACK_MCP_CLIENT_SECRET: z.string().optional(),

    HUBSPOT_MCP_CLIENT_ID: z.string().optional(),
    HUBSPOT_MCP_CLIENT_SECRET: z.string().optional(),

    UPSTASH_BOX_API_KEY: z.string().optional(),
  },

  experimental__runtimeEnv: process.env,
});

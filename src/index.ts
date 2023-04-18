export interface Env {
    // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
    // MY_KV_NAMESPACE: KVNamespace;
    //
    // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
    // MY_DURABLE_OBJECT: DurableObjectNamespace;
    //
    // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
    // MY_BUCKET: R2Bucket;
    //
    // Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
    // MY_SERVICE: Fetcher;

    // Deploy database with the following three steps:
    //
    // wrangler d1 execute <DATABASE_NAME> --file=./schema.sql
    // wrangler d1 execute <DATABASE_NAME> --command='SELECT * FROM Customers'
    // wrangler publish
    //
    // Client API: https://developers.cloudflare.com/d1/platform/client-api/
    //
    // Commands: https://developers.cloudflare.com/workers/wrangler/commands/#d1

    DB: D1Database;
}

export default {
    async fetch(
        request: Request,
        env: Env,
        ctx: ExecutionContext,
    ): Promise<Response> {
        const { pathname } = new URL(request.url)

        if (pathname === '/d1') {
            const { results } = await env.DB.prepare(
                'SELECT * FROM AccessToken WHERE userId = ?',
            )
                .bind(1)
                .all()

            return Response.json(results)
        }

        if (pathname === 'pg') {
            // implement request to glencoden cloud
        }

        return new Response('Hello from the Square Cards API!')
    },
}

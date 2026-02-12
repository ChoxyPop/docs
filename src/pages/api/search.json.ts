import { createClient } from '@libsql/client';

export const prereder = false;

export async function POST({ request }) {
  const { query } = await request.json();
  
  const client = createClient({
    url: process.env.TURSO_DB_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  });

  try {
    // Búsqueda sencilla por texto en las columnas title o content
    const result = await client.execute({
      sql: "SELECT title, slug, description FROM articles WHERE title LIKE ? OR content LIKE ? LIMIT 5",
      args: [`%${query}%`, `%${query}%`]
    });

    const results = result.rows.map(row => ({
      title: row.title,
      slug: row.slug,
      description: row.description,
    }));

    return new Response(JSON.stringify({ results }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
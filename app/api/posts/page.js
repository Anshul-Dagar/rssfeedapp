import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
 
  const posts = await client.sql`SELECT * FROM rssfeed;`;
  console.log(posts[0]);

}
  
  
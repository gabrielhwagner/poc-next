import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'

let cacheDb: Db = null

async function connectToDatabase(uri: string) {
  if (cacheDb) {
    return cacheDb
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const dbName = new URL(uri).pathname.substr(1)
  const db = client.db(dbName)
  cacheDb = db

  return db
}

export default async (request: NowRequest, response: NowResponse) => {
  const { email, name } = request.body

  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('subscribers')

  await collection.insertOne({
    name,
    email,
    subscribeAt: new Date()
  })

  return response.status(201).json({ ok: true })
}

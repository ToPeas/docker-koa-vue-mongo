const env = process.env
export const mongoHost = env.MONGO_HOST || '127.0.0.1'
export const mongoDB = env.MONGO_NAME || 'demo'

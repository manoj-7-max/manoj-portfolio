const { MongoClient } = require('mongodb');

async function main() {
    const uri = 'mongodb+srv://admin:Manoj%40007@portfolio.twsfnfb.mongodb.net/portfolio?retryWrites=true&w=majority&appName=portfolio';
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB!");
    } catch (e) {
        console.error("Connection failed:", e);
    } finally {
        await client.close();
    }
}
main();

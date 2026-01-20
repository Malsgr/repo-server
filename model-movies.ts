import { Database } from "bun:sqlite"

async function initDB(){
    const db = new Database("movies.db")
    const schema: string = await Bun.file("./create-schema.sql").text()
    db.run(schema)
    const movies = getAllMovies(db)
    if(movies.length == 0){
        const insert: string = await Bun.file("./insert.sql").text()
    }
    return db
}

function getAllMovies(db: Database){
    const query = db.query("SELECT * FROM movies")
    return query.all()
}

const db = await initDB()
const movies = getAllMovies(db)
console.log(movies)


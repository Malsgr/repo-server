import { Database } from "bun:sqlite"
const schema = await Bun.file("./schema/slq").text()


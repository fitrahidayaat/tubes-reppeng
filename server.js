import express from "express";
import MySparqlClient from "./sparqlClient.js";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/search", async (req, res) => {
    let searchQuery = req.query.searchQuery;
    const mySparqlClient = new MySparqlClient();
    try {
        const results = await mySparqlClient.executeQuery(`
            SELECT *
            WHERE {
                ?s ?p ?o .
                FILTER regex(?o, "${searchQuery}")
            }
            LIMIT 30
        `);
        return res.send(results);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while executing the query.');
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

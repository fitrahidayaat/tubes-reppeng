// sparqlClient.js
import SparqlClient from "sparql-client-2";

class MySparqlClient {
  constructor(endpoint = 'http://DESKTOP-DFNSOLV:7200/repositories/tubes_reppeng') { // ganti dengan endpoint default Anda
    this.client = new SparqlClient(endpoint).register({
      rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
      rdfs: 'http://www.w3.org/2000/01/rdf-schema#'
    });
  }

  executeQuery(query) {
    return this.client.query(query).execute();
  }
}

export default MySparqlClient;

document.getElementById("searchButton").addEventListener("click", function () {
    event.preventDefault();
    let searchQuery = document.getElementById("searchInput").value;
    let result = document.getElementById("results");

    fetch(`http://localhost:3000/search?searchQuery=${searchQuery}`)
        .then((response) => response.json()) // Parse the data as JSON
        .then((data) => {
            console.log("Success:", data);

            let content = "";
            data.results.bindings.forEach((binding) => {
                let s = binding.s.value;
                let p = binding.p.value;
                let o = binding.o.value;

                // parse s p from its url
                s = s.split("#")[1];
                p = p.split("#")[1];
                content += `
                    
                        <tr>
                            <td class="px-4 py-2 border border-slate-600">${s}</td>
                            <td class="px-4 py-2 border border-slate-600">${p}</td>
                            <td class="px-4 py-2 border border-slate-600">${o}</td>
                        </tr>
                                  
                `;
            });
            result.innerHTML = `
            <table class="table-fixed border-collapse border border-slate-500">
                <thead>
                    <tr>
                        <th class="px-4 py-2 border border-slate-600 bg-slate-400">Subject</th>
                        <th class="px-4 py-2 border border-slate-600 bg-slate-400">Predicate</th>
                        <th class="px-4 py-2 border border-slate-600 bg-slate-400">Object</th>
                    </tr>
                </thead>
                <tbody>
                    ${content}
                </tbody>
            </table>
            `;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

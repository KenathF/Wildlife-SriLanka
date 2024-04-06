document.addEventListener("DOMContentLoaded", function () {
    fetch('../json/intro.json')
    .then(response => response.json())
    .then(jsonData => {
        // Function to render section 1 from jsonData
        function renderSection1() {
            const sec1 = jsonData.sec1Data;
            document.getElementById("sec1").innerHTML = `
              <h2>${sec1.title}</h2>
              <div id="sinharajaimg">
                  <img id="sinharaja" src="${sec1.images[0]}">
                  <img id="sinharaja2" src="${sec1.images[1]}">
              </div>
              <p>${sec1.description}</p>
              <div class="iframecontainer">
                  <h3>Google location:</h3>
                  <iframe
                      src="${sec1.mapURL}"
                      width="300" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>`;
        }

        // Function to render section 2 from jsonData
        function renderSection2() {
            const sec2 = jsonData.sec2Data;
            document.getElementById("sec2").innerHTML = `
              <h2>${sec2.title}</h2>
              <div id="hortonimg">
                  <img id="horton" src="${sec2.images[0]}">
                  <img id="horton2" src="${sec2.images[1]}">
              </div>
              <p>${sec2.description}</p>
              <div class="iframecontainer">
                  <h3>Google location:</h3>
                  <iframe
                      src="${sec2.mapURL}"
                      width="300" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>`;
        }

        // Function to render section 3 from jsonData
        function renderSection3() {
            const sec3 = jsonData.sec3Data;
            document.getElementById("sec3").innerHTML = `
              <h2>${sec3.title}</h2>
              <div id="minneriyaimg">
                  <img id="minneriya" src="${sec3.images[0]}">
                  <img id="minneriya2" src="${sec3.images[1]}">
              </div>
              <p>${sec3.description}</p>
              <div class="iframecontainer">
                  <h3>Google location:</h3>
                  <iframe
                      src="${sec3.mapURL}"
                      width="300" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>`;
        }

        // Function to render the summary table from jsonData
        function renderSummaryTable() {
            const summaryTable = jsonData.summaryTableData;
            const tableBody = summaryTable.animals.map(animal => `
              <tr>
                  <td>${summaryTable.locations[summaryTable.animals.indexOf(animal)]}</td>
                  <td>${animal.name}</td>
                  <td>${animal.facts}</td>
                  <td><img src="${animal.image}" alt="${animal.name}" style="max-width: 300px;"></td>
              </tr>`).join("");

            document.getElementById("sectable").innerHTML = `
              <h2>${summaryTable.title}</h2>
              <table>
                  <thead>
                      <tr>
                          <th>Location</th>
                          <th>Animal Name</th>
                          <th>Interesting Facts</th>
                          <th>Image</th>
                      </tr>
                  </thead>
                  <tbody>${tableBody}</tbody>
                  <tfoot>
                      <tr>
                          <td colspan="3">${summaryTable.summary}</td>
                      </tr>
                  </tfoot>
              </table>`;
        }

        // Call functions to render sections
        renderSection1();
        renderSection2();
        renderSection3();
        renderSummaryTable();
    })
    .catch(error => console.log(error)); // Handle any errors
});
console.log("Is this wokring?")

const url = "https://public.tableau.com/views/BigMacIndex_10/BigMac"
const vizContainer = document.getElementById("vizContainer")
const options = {
    device:"desktop"
}
let viz;

const exportPDF = document.getElementById("exportPDF");

// create a function generate Viz element
function initViz (){
    console.log("Executing the function");
    viz = new tableau.Viz(vizContainer, url, options);

}
// click on the pdf export button to generate a PDF of the dashboard

function generatePDF(){
   viz.showExportPDFDialog()
}
exportPDF.addEventListener("click", function () {
    generatePDF();
});

// click on the image export button to generate an image of the dashboard

function generateImage() {
    viz.showExportImageDialog()
}
exportImage.addEventListener("click", function () {
    generateImage();
});




//run the initViz function when the page loads
document.addEventListener('DomContentLoaded',initViz())
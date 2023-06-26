// Required modules
var Folder = Folder,
  File = File,
  ExportOptionsPNG24 = ExportOptionsPNG24,
  app = app;

// Select source folder containing AI files
var sourceFolder = Folder.selectDialog("Select the source folder");

if (sourceFolder) {
  // Select destination folder for PNG files
  var destFolder = Folder.selectDialog("Select the destination folder");

  if (destFolder) {
    // Process AI files
    processFiles();
  }
}

// Function to process AI files
function processFiles() {
  var files = sourceFolder.getFiles("*.ai");

  for (var i = 0; i < files.length; i++) {
    if (files[i] instanceof File && files[i].name.indexOf(".ai") !== -1) {
      convertToPNG(files[i]);
      $.sleep(1000); // Add a delay of 1 second before processing the next file
    }
  }

  alert("Conversion complete!");
}

// Function to convert AI file to PNG
function convertToPNG(file) {
  var doc = app.open(file);

  // Set PNG export options
  var exportOptions = new ExportOptionsPNG24();
  exportOptions.artBoardClipping = true;
  exportOptions.transparency = true;

  // Set destination file
  var destFile = new File(destFolder + "/" + file.name.replace(".ai", ".png"));

  // Export the document as PNG
  doc.exportFile(destFile, ExportType.PNG24, exportOptions);

  // Close the document
  doc.close(SaveOptions.DONOTSAVECHANGES);
}

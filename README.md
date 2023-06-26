# BatchExportDocsAsPNGs

This script allows you to batch export Adobe Illustrator (AI) files as PNG images. It is a JavaScript code snippet that can be executed in Adobe Illustrator.

## Prerequisites

Before running this script, ensure that you have Adobe Illustrator installed on your system. This script is compatible with Adobe Illustrator CC and later versions.

## Getting Started

1. Download the `BatchExportDocsAsPNGs` script file.
2. Launch Adobe Illustrator.
3. Open the script editor by navigating to "File" -> "Scripts" -> "Other Scripts".
4. In the script editor window, navigate to the folder where you saved the `BatchExportDocsAsPNGs` script file and open it.

## Usage

1. The script will prompt you to select a source folder containing the AI files you want to export as PNG.
2. Choose the desired source folder from the file selection dialog.
3. Next, the script will prompt you to select a destination folder where the PNG files will be saved.
4. Choose the desired destination folder from the file selection dialog.
5. The script will then process each AI file in the source folder and convert it to PNG format.
6. During the conversion process, a 1-second delay is added between each file to ensure smooth execution.
7. Once all the files have been converted, an alert will be displayed indicating that the conversion is complete.

## Export Options

The script uses the following export options for the PNG files:

- **Artboard Clipping**: Enabled. The exported PNG will be clipped to the boundaries of the artboard.
- **Transparency**: Enabled. The exported PNG will preserve transparency if the original AI file contains transparent elements.

## Note

- Only AI files with the ".ai" extension will be processed. Other file types will be ignored.
- The script assumes that the selected source folder contains only AI files. It does not perform any validation checks on the files.

## License

This script is provided under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify and use it according to your needs.

## Disclaimer

This script is provided as-is without any warranty. Use it at your own risk. Always make sure to have backups of your files before running any scripts.

## Acknowledgments

The `BatchExportDocsAsPNGs` script was developed to simplify the batch export process of AI files to PNG format in Adobe Illustrator.

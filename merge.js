const PDFMerger = require('pdf-merger-js');

let merger = new PDFMerger();

const mergePDFs = async (p1, p2) => {
    await merger.add(p1);
    await merger.add(p2);
    let mergedPdfName = new Date().getTime();

    await merger.save(`public/${mergedPdfName}.pdf`);
    return mergedPdfName;
}

module.exports = {mergePDFs};
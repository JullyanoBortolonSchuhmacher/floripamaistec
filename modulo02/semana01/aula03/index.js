const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument();

let dataGeracao = '19/05/2024'
let nome = 'josé'
let cpf = '123.123.123-12'
let salarioBruto = 2300
let salarioLiquido = 123
let inss = 123
let ir = 123

doc.pipe(fs.createWriteStream('folha_de_pagamento.pdf'));
  doc.fontSize(25);
  doc.text(`Folha de Pagamento`);
  doc.fontSize(12);
// doc.text("--- ---");

  doc.text(`Data de Geração: ${dataGeracao}`);
  doc.text(`Nome: ${nome}`);
  doc.text(`CPF: ${cpf}`);
//   // linha
doc.text("--- ---");
//   doc.moveTo(100, 150)
//     .lineTo(500, 150)
//     .stroke();
doc.text(`Salário Bruto: ${salarioBruto}`);
// Linha horizontal
doc.text("--- ---");
// doc.moveTo(100, 250)
//    .lineTo(500, 250)
//    .stroke();
doc.text(`INSS: ${inss}`);
doc.text(`IR: ${ir}`);
// Linha horizontal
doc.text("--- ---");
// doc.moveTo(100, 300)
//    .lineTo(500, 300)
//    .stroke();
doc.text(`Salário Líquido: ${salarioLiquido}`);
// Finalize o documento PDF
doc.end();
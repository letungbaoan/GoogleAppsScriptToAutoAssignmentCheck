function updateCheckboxes() { 
  const diemCanDeDat = 0.8; 
  const sheetAId = '1UwoyD3mC4b9ImxyFZmZo8heBR0-8aIRJRXKrhxF1_xA'; 
  const tenSheetA = 'Sheet1'; 
  const cotMSSVSheetA = 1; 
  const dongDuLieuDauTienSheetA = 9; 
  const cotCuoiCungCanDocSheetA = 'D'; 
  const hangCuoiCungCanDocSheetA = 53; 
  const cotChuaCheckBox = 'D'; 
 
  const sheetBId = '1A0jly0Z5afz9SCxAmlAEx4paPbvZKT21B50mu3HJfIY'; 
  const tenSheetB = 'Sheet1'; 
  const cotMSSVSheetB = 2; 
  const cotDiemSheetB = 5; 
  const dongDuLieuDauTienSheetB = 2; 
  const cotCuoiCungCanDocSheetB = 'F'; 
 
  const ssA = SpreadsheetApp.openById(sheetAId); 
  const sheetA = ssA.getSheetByName(tenSheetA); 
  const ssB = SpreadsheetApp.openById(sheetBId); 
  const sheetB = ssB.getSheetByName(tenSheetB); 
 
  const dataA = 
sheetA.getRange(`A${dongDuLieuDauTienSheetA}:${cotCuoiCungCanDocSheetA}${hang
 CuoiCungCanDocSheetA}`).getValues(); 
   
  const dataB = 
sheetB.getRange(`A${dongDuLieuDauTienSheetB}:${cotCuoiCungCanDocSheetB}` + 
sheetB.getLastRow()).getValues(); 
 
  const studentPassingScores = new Map(); 
 
  dataB.forEach(row => { 
    const studentId = Number(row[cotMSSVSheetB]); 
    const score = Number(row[cotDiemSheetB]); 
    if (score >= diemCanDeDat) { 
      studentPassingScores.set(studentId, true); 
    } 
  }); 
 
  for (let i = 0; i < dataA.length; i++) { 
    const studentId = Number(dataA[i][cotMSSVSheetA]); 
    if (studentPassingScores.has(Number(studentId))) { 
      sheetA.getRange(cotChuaCheckBox + (i + 
dongDuLieuDauTienSheetA)).setValue(true); 
sheetA.getRange(cotChuaCheckBox + (i + 
dongDuLieuDauTienSheetA)).setBackground('#ff9900'); 
    } 
  } 
}

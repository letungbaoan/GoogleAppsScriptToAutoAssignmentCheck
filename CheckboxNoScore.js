function updateCheckboxes() { 
  const sheetAId = '1UwoyD3mC4b9ImxyFZmZo8heBR0-8aIRJRXKrhxF1_xA'; 
  const tenSheetA = 'Sheet1'; 
  const cotMSSVSheetA = 0; 
  const dongDuLieuDauTienSheetA = 2; 
  const cotCuoiCungCanDocSheetA = 'B'; 
  const hangCuoiCungCanDocSheetA = 53; 
  const cotChuaCheckBox = 'B'; 
 
  const sheetBId = '1A0jly0Z5afz9SCxAmlAEx4paPbvZKT21B50mu3HJfIY'; 
  const tenSheetB = 'Sheet1'; 
  const cotMSSVSheetB = 0; 
  const dongDuLieuDauTienSheetB = 2; 
  const cotCuoiCungCanDocSheetB = 'B'; 
 
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
 
  const studentsDoneAssignment = new Map(); 
 
  dataB.forEach(row => { 
    const studentId = Number(row[cotMSSVSheetB]); 
    studentsDoneAssignment.set(studentId, true); 
  }); 
 
  for (let i = 0; i < dataA.length; i++) { 
    const studentId = Number(dataA[i][cotMSSVSheetA]); 
    if (studentsDoneAssignment.has(Number(studentId))) { 
      sheetA.getRange(cotChuaCheckBox + (i + 
dongDuLieuDauTienSheetA)).setValue(true).setBackground(‘#ff9900’); 
 sheetA.getRange(cotChuaCheckBox + (i + 
dongDuLieuDauTienSheetA)).setBackground('#ff9900'); 
    } 
  } 
} 

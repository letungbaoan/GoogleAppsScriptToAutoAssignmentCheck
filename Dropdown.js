function updateDropdownTuVungTuan4() {
  const diemCanDeDat = 18;
  const sheetAId = '1UwoyD3mC4b9ImxyFZmZo8heBR0-8aIRJRXKrhxF1_xA';
  const tenSheetA = 'TỪ VỰNG+KANJI N3';
  const cotMSSVSheetA = 3;
  const dongDuLieuDauTienSheetA = 13;
  const cotCuoiCungCanDocSheetA = 'L';
  const cotChuaDropdown = 'L';
  const deadline = new Date('5/19/2024 15:00:00');
  const sheetBId = '1A0jly0Z5afz9SCxAmlAEx4paPbvZKT21B50mu3HJfIY';
  const tenSheetB = 'Câu trả lời biểu mẫu 1';
  const cotMSSVSheetB = 3;
  const cotDiemSheetB = 1;
  const dongDuLieuDauTienSheetB = 2;
  const cotCuoiCungCanDocSheetB = 'D';
  const cotThoiGianSheetB = 0;
  const ssA = SpreadsheetApp.openById(sheetAId);
  const sheetA = ssA.getSheetByName(tenSheetA);
  const ssB = SpreadsheetApp.openById(sheetBId);
  const sheetB = ssB.getSheetByName(tenSheetB);
  const dataA =
  sheetA.getRange(`A${dongDuLieuDauTienSheetA}:${cotCuoiCungCanDocSheetA}` + sheetA.getLastRow()).getValues();
  const dataB =
  sheetB.getRange(`A${dongDuLieuDauTienSheetB}:${cotCuoiCungCanDocSheetB}` + sheetB.getLastRow()).getValues();const studentInfos = new Map();
  dataB.forEach(row => {
    const studentId = Number(row[cotMSSVSheetB]);
    const score = Number(row[cotDiemSheetB]);
    const time = new Date(row[cotThoiGianSheetB]);
    studentInfos.set(studentId, {score, time});
  });
  for (let i = 0; i < dataA.length; i++) {
    const studentId = Number(dataA[i][cotMSSVSheetA]);
    const cell = sheetA.getRange(cotChuaDropdown + (i +
    dongDuLieuDauTienSheetA));
    const studentInfo = studentInfos.get(Number(studentId));
    if (studentInfo && studentInfo.score !== undefined) {
      if (studentInfo.score >= diemCanDeDat && studentInfo.time > deadline)
      {
        cell.setDataValidation(SpreadsheetApp.newDataValidation()
        .requireValueInList(['OK', 'Trễ', 'X'])
        .setAllowInvalid(false)
        .build());
        cell.setValue('Trễ');
      } else if (studentInfo.score >= diemCanDeDat) {
        cell.setDataValidation(SpreadsheetApp.newDataValidation()
        .requireValueInList(['OK', 'Trễ', 'X'])
        .setAllowInvalid(false)
        .build());
        cell.setValue('OK');
      } 
    }
    else {
      cell.setDataValidation(SpreadsheetApp.newDataValidation()
        .requireValueInList(['OK', 'Trễ', 'X'])
        .setAllowInvalid(false)
        .build());
      cell.setValue('X');
      cell.setBackground('#F28B82');
      cell.setFontColor('#B22222');
    }
  }
}

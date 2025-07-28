export const buildHtmlWithCss = (htmlBody: string, css: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>${css}</style>
</head>
<body>
  ${htmlBody}
</body>
</html>
`;
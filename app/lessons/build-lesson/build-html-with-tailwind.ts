export const buildHtmlWithTailwind = (htmlBody: string) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
  ${htmlBody}
</body>
</html>`
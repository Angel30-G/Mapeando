// netlify/functions/downloadFile.js
const fs = require("fs");
const path = require("path");

exports.handler = async (event: any) => {
  const { fileName, folderName } = event.queryStringParameters;

  if (!fileName || !folderName) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "File name and folder name are required",
      }),
    };
  }

  const filePath = path.join(
    __dirname,
    "..",
    "public",
    "files",
    folderName,
    fileName
  );

  if (fs.existsSync(filePath)) {
    return {
      statusCode: 200,
      headers: {
        "Content-Disposition": `attachment; filename=${fileName}`,
        "Content-Type": "application/octet-stream",
      },
      body: fs.readFileSync(filePath),
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "File not found" }),
    };
  }
};

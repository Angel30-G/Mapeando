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
    "..",
    "public_Files",
    folderName,
    fileName
  );

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, { encoding: "base64" });
    return {
      statusCode: 200,
      headers: {
        "Content-Disposition": `attachment; filename=${fileName}`,
        "Content-Type": "application/octet-stream",
      },
      body: fileContent,
      isBase64Encoded: true,
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "File not found" }),
    };
  }
};

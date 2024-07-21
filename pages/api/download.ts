import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { fileName, folderName } = req.query as {
    fileName?: string;
    folderName?: string;
  };

  if (!fileName || !folderName) {
    return res
      .status(400)
      .json({ message: "File name and folder name are required" });
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    "files",
    folderName,
    fileName
  );

  if (fs.existsSync(filePath)) {
    res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
    res.setHeader("Content-Type", "application/octet-stream");
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.status(404).json({ message: "File not found" });
  }
}

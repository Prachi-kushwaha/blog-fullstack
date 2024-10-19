import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises"; // Promisify writeFile and mkdir
import { connectDB } from "../../../lib/config/dbs"; 
import BlogModel from "../../../lib/models/blog-models";
import path from "path";
import fs from "fs";

const LoadDB = async () => {
    try {
      await connectDB();
    } catch (error) {
      console.error("Database connection failed", error);
    }
  };
  
  // Ensure DB connection is initialized
  LoadDB();

export async function GET(request){
    
    return NextResponse.json({msg:"API working"})
}

export async function POST(request){
    const formData = await request.formData();
    const timestamp = Date.now()

    const image = formData.get("image"); 

    const publicDir = path.join(process.cwd(), 'public/uploads'); // Set the directory for image storage

        // Ensure directory exists
        await fs.promises.mkdir(publicDir, { recursive: true });

        const imageBytes = await image.arrayBuffer();
        const imageBuffer = Buffer.from(imageBytes);
        const imagePath = path.join(publicDir, `${timestamp}-${image.name}`);
        await writeFile(imagePath, imageBuffer);
        const imageUrl = `/uploads/${timestamp}-${image.name}`;

        const authorImg = formData.get("authorImg");
        let authorImgUrl = null;
        if (authorImg) {
            const authorImgBytes = await authorImg.arrayBuffer();
            const authorImgBuffer = Buffer.from(authorImgBytes);
            const authorImgPath = path.join(publicDir, `${timestamp}-${authorImg.name}`);
            await writeFile(authorImgPath, authorImgBuffer);
            authorImgUrl = `/uploads/${timestamp}-${authorImg.name}`;

            const blogData = {
                title: formData.get("title"),
                description: formData.get("description"),
                category: formData.get("category"),
                author: formData.get("author"),
                image: imageUrl, // main image
                author_img: authorImgUrl, // author's image
            };

    await BlogModel.create(blogData)
    console.log("BLog saved");
    return NextResponse.json({success:true, msg:"Blog add"})
}
}
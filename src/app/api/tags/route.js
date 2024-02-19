import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

//GET ALL POSTS BY FILTER
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get("filter");

  try {
    const comments = await prisma.post.findMany({
      where: {
        subCategory: filter
      }
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

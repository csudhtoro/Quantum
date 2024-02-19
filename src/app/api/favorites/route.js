import { getAuthSession } from "@/app/utils/auth";
import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

//GET ALL USER FAVORITES
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const user = searchParams.get("user");

  try {
    const favorites = await prisma.favorite.findMany({
      where: { userEmail: user }
    });

    return new NextResponse(JSON.stringify(favorites, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

//CREATE A FAVORITE
export const POST = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "User Not Authenticated" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();

    const favorite = await prisma.favorite.create({
      data: { ...body, userEmail: session.user.email }
    });

    return new NextResponse(JSON.stringify(favorite, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

//DELETE A FAVORITE
export const DELETE = async (req) => {
  const session = await getAuthSession();
  const postSlug = searchParams.get("postSlug");

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "User Not Authenticated" }, { status: 401 })
    );
  }

  try {
    // Check if the favorite exists
    const existingFavorite = await prisma.favorite.findUnique({
      where: {
        postSlug_userEmail: {
          postSlug,
          userEmail: session.user.email
        }
      }
    });

    if (!existingFavorite) {
      return new NextResponse(
        JSON.stringify({ message: "Favorite not found" }, { status: 404 })
      );
    }

    // Delete the favorite
    await prisma.favorite.delete({
      data: { userEmail: session.user.email }
    });

    return new NextResponse(
      JSON.stringify(
        { message: "Favorite deleted successfully" },
        { status: 200 }
      )
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

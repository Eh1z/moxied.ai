import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI, Configuration } from "openai";


const configuration = new Configuration ({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAI(configuration);

export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages  } = body;

    if (!userId) {
      return new NextResponse("Unauthorized, Login to use this service", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required, please pass a message in input field", { status: 400 });
    }


    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages
    });


    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function POST(request: NextRequest) {
  // Security check
  const SECRET_KEY = process.env.NEXT_PUBLIC_DEPLOY_SECRET;
  if (request.headers.get("x-deploy-key") !== SECRET_KEY) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  try {
    const { stdout, stderr } = await execAsync(`
            cd /var/www/html/nooora-test &&
            rm -rf .next &&
            npm run build &&
            pm2 restart noora-FE-App
        `);

    // Log everything for debugging
    console.log("STDOUT:", stdout);
    console.error("STDERR:", stderr);

    return NextResponse.json({
      message: "Deployment successful",
      logs: stdout,
      warnings: stderr || null, // Include warnings for debugging
    });
  } catch (error) {
    console.error("DEPLOYMENT ERROR:", error);

    return NextResponse.json(
      {
        message: "Deployment failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

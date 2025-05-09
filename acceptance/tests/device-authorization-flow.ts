import test from "@playwright/test";
import { spawn } from "child_process";

test("Run Go script and use its output", async ({ page }) => {
  try {
    const env = {
      ISSUER: "http://localhost:8080",
      CLIENT_ID: "317663390786990446",
    };

    const goProcess = spawn("go", ["run", "github.com/zitadel/oidc/v2/example/client/device@latest"], {
      env: { ...process.env, ...env },
    });

    let stdout = "";
    let stderr = "";

    // Capture stdout in real-time
    goProcess.stdout.on("data", (data) => {
      const output = data.toString();
      stdout += output;
      console.log("Go script output:", output);

      // Check for "successfully obtained token" in real-time
      if (output.includes("successfully obtained token")) {
        console.log("Token successfully obtained!");

        // test complete
      }
    });

    // Capture stderr in real-time
    goProcess.stderr.on("data", (data) => {
      stderr += data.toString();
      console.error("Go script error:", data.toString());
    });

    // Wait for the process to exit
    await new Promise((resolve, reject) => {
      goProcess.on("close", (code) => {
        if (code !== 0) {
          reject(new Error(`Go script exited with code ${code}: ${stderr}`));
        } else {
          resolve(null);
        }
      });
    });

    console.log("Final Output from Go script:", stdout.trim());

    // Extract the device code from the final output
    const match = stdout.match(/enter code ([A-Z0-9-]+)/i);
    if (!match || !match[1]) {
      throw new Error("Device code not found in the output");
    }

    const deviceCode = match[1];
    console.log("Extracted Device Code:", deviceCode);

    // Use the device code in your test
    await page.goto("http://localhost:3000/device?user_code=" + deviceCode);
    await page.fill("#code-text-input", deviceCode);
    await page.click("#submit-button");
    await page.waitForURL("**/device/consent");
    await page.click("#submit-button");
    await page.waitForURL("**/signedin");
  } catch (error) {
    console.error("Failed to execute Go script:", error);
    throw error;
  }
});

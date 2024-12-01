import fs from 'fs';

export async function POST({ request }) {
  try {
    const data = await request.json(); // Get data from the POST request
    data.details = data.details.trim(); // Remove leading and trailing spaces
    const jsonData = JSON.stringify(data, null, 2);
    // Write the JSON file (this works only on the server side)
    fs.writeFileSync('/public/data.json', jsonData); // Save in the public folder

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}



export async function POST({ request }) {
  try {
    const data = await request.json(); // Get data from the POST request
    data.details = data.details.trim(); // Remove leading and trailing spaces
    // Write the JSON file (this works only on the server side)

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

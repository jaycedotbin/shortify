export const config = {
	runtime: "experimental-edge",
};

export default function handler() {
	return new Response(
		JSON.stringify({
			message: "Hello!",
		}),
		{
			status: 200,
			headers: {
				"content-type": "application/json",
			},
		},
	);
}

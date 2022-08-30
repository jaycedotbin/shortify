// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { type NextApiRequest, type NextApiResponse } from "next";

export const config = {
	runtime: "experimental-edge",
};

type Data = {
	name: string;
};

export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
	res.status(200).json({ name: "John Doe" });
}

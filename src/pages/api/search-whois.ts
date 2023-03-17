// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { constants } from "@/utils";

const searchWhoisApi = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  axios
    .get(constants.whoisApiUrl, {
      params: {
        apiKey: process.env.WHOIS_API_KEY,
        outputFormat: "JSON",
        domainName: req.query.domainName,
      },
    })
    .then((response) => {
      return res.status(response.status).json(response.data);
    })
    .catch((err) => {
      console.log(err.cause)
      return res.status(500).json({"ErrorMessage": {
        "errorCode": 500, "msg": `${err.cause ? err.cause : "Error while attempting to reach the WHOIS API"}`
    }});
    });
};


export default searchWhoisApi;
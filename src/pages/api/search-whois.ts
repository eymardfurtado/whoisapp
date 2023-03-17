// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { constants } from "@/utils";

const searchWhoisApi = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // console.log('req', req.query.domainName)
  axios
    .get(constants.whoisApiUrl, {
      // do not hardcode
      params: {
        apiKey: process.env.WHOIS_API_KEY,
        outputFormat: "JSON",
        domainName: req.query.domainName,
      },
    })
    .then((response) => {
      console.log("*************************",response);
      return res.status(response.status).json(response.data);
    })
    .catch((err) => {
      return res.status(500).json({"ErrorMessage": {
        "errorCode": 500, "msg": "error while trying to reach the WHOIS API"
    }});
    });
};


export default searchWhoisApi;
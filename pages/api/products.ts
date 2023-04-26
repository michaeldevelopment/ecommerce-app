import { productsDataListType } from "./../../types/dataTypes";
import { NextApiRequest, NextApiResponse } from "next";
import { productsData } from "../../data";

export default function getDataHandler(
  req: NextApiRequest,
  res: NextApiResponse<productsDataListType>
) {
  res.status(200).json(productsData);
}

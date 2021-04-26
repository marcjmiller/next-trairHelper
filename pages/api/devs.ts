// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { InsertOneWriteOpResult, ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/mongodb';

export interface Developer {
  _id: ObjectId;
  name: string;
  homepage?: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();

  if (req.body && req.body.name) {
    const newDev: InsertOneWriteOpResult<Developer> = await db
      .collection('devs_collection')
      .insertOne({ name: req.body.name, homepage: req.body.homepage || '' });

    return res.status(201).json(newDev.ops[0]);
  }

  const devs = await db.collection('devs_collection').find({}).toArray();

  res.status(200).json(devs);
};

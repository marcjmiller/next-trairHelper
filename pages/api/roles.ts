// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { InsertOneWriteOpResult, ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/mongodb';

export interface Role {
  _id: ObjectId;
  name: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();

  if (req.body && req.body.name) {
    const entry: InsertOneWriteOpResult<Role> = await db
      .collection('roles_collection')
      .insertOne({ name: req.body.name });

    return res.status(201).json(entry.ops[0]);
  }

  const roles = await db.collection('roles_collection').find({}).toArray();
  res.status(200).json(roles);
};

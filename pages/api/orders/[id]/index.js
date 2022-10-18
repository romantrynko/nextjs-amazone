// /api/orders/:id

import { getSession } from 'next-auth/react';
import Order from '../../../../models/Order';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.satus(401).send('Signin required')
  }

  await db.connect();

  const order = await Order.findById(req.query.id)

  db.disconnect()
  res.send(order)
}

export default handler
const router = require('express').Router(),
  Bill = require('../../db/models/bill'),
  User = require('../../db/models/user'),
  stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.get(
  '/api/bill/me',
  async (req, res) => res.json(req.bill)
);

router.post(
  '/api/bill/checkout',
  async (req, res) => {
    const { amountDue, token } = req.body;

    const billDate = new Date().toISOString();

    try {
      const { id } = await stripe.charges.create({
        amount: amountDue,
        source: token.id,
        currency: 'usd'
      });

      const bill = new Bill({
        amountDue,
        party: req.user.id,
        billDate,
        tokenID: token.id,
        transactionID: id
      });

      await bill.save();

      const user = await User.findById(req.user._id);

      user.billHistory.push(bill._id);

      await user.save();

      res.status(201).json(bill);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
);

router.get(
  'api/bill/me/:id',
  async (req, res) => {
    try {
      const findBill = Bill.findById(req.params.id);
      res.json(findBill);
    } catch (error) {
      res.status(400).json({ error: e.toString() });
    }
  }
);

router.patch(
  'api/bill/me/:id',
  async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['party'];
    const validOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!validOperation)
      return res.status(400).send({ error: 'invalid error' });
    try {
      updates.forEach((update) => (req.bill[update] = req.body[update]));
      await req.bill.save();
      res.json(req.bill);
    } catch (error) {
      res.status(400).json({ error: e.toString() });
    }
  }
);

module.exports = router;

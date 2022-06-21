const validation = (schema) => async (req, res, next) => {
  const body = req.body;

  try {
    await schema.validate(body);
    next();
    // return next();
  } catch (e) {
    console.error(e);
    //return res.status(400).json({error});
    res.status(400).json({ error: e.errors.join(", ") });
  }
};

module.exports = validation;

const adminMiddleware = async (req, res, next) => {
  try {
    console.log(req.user);
    const adminRole = req.user.isAdmin;
    //agar ek ka bhi isdamin is false then it is not sending the data
    //  i have resolve the think it send the data after the user is true 
    // whos token i am sending then send the all users data;
    if (!adminRole) {
      return res.status(403).json({ message: "user is not admin" });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = adminMiddleware;

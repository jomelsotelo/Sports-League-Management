export const login = async (req, res) => {
    res.json({ message: "Login successful", user: req.user });
  };
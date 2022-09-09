const tryCatch = (controller) => async (req, res) => {
  try {
    await controller(req, res);
  } catch (error) {
    throw error;
  }
};

export default tryCatch;

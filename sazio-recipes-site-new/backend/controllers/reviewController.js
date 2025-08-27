import Review from '../models/Review.js';

export const getReviews = async (req, res) => {
  const reviews = await Review.findAll();
  res.json(reviews);
};

export const createReview = async (req, res) => {
  const review = await Review.create(req.body);
  res.status(201).json(review);
};

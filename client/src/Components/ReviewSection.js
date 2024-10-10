import React from 'react';
import Review from '../Components/ReviewCard.js'; 

const ReviewsSection = () => {
  const reviews = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'Paul Starr',
      reviewText:
        'This platform made donating easy and transparent. I felt confident knowing my contribution was going directly to those in need. Highly recommend for anyone looking to support meaningful causes.',
      rating: 5
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'Sarah Lee',
      reviewText:
        'A seamless experience from start to finish. The donation process was simple, and I appreciated the updates on how funds are being used. Truly a great platform for impactful fundraising!',
      rating: 5
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'John Doe',
      reviewText:
        'I love how the platform connects donors with real causes. It’s rewarding to see the positive difference my donations have made. I’ll definitely use this site for future fundraising efforts.',
      rating: 5
    }
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="title2">
            See what our customers are saying
        </h2>
        <p className="dec">Experience the Truth Through Our Customers.</p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {reviews.map((review, index) => (
            <Review
              key={index}
              imageSrc={review.imageSrc}
              name={review.name}
              reviewText={review.reviewText}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

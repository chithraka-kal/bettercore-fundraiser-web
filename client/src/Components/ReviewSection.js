import React from 'react';
import Review from '../Components/ReviewCard.js'; 

const ReviewsSection = () => {
  const reviews = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'Paul Starr',
      reviewText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!',
      rating: 5
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'Sarah Lee',
      reviewText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!',
      rating: 5
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'John Doe',
      reviewText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!',
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

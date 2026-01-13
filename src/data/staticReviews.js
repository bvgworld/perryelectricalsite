/**
 * Static fallback reviews
 * Used when Google API is unavailable or not configured
 */
export const staticReviews = [
  {
    id: 'static-review-1',
    author: 'John Smith',
    rating: 5,
    text: 'Perry Electrical did an excellent job on our commercial electrical installation. Professional, on-time, and great communication throughout the project. Highly recommend!',
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
    relativeTime: '1 month ago',
  },
  {
    id: 'static-review-2',
    author: 'Sarah Johnson',
    rating: 5,
    text: 'Outstanding service! They upgraded our electrical panel and the team was knowledgeable, clean, and efficient. The work was completed exactly as promised.',
    date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days ago
    relativeTime: '2 weeks ago',
  },
  {
    id: 'static-review-3',
    author: 'Mike Davis',
    rating: 5,
    text: 'Fast response time and quality work. Perry Electrical handled our emergency electrical issue quickly and professionally. Will definitely use them again.',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    relativeTime: '1 week ago',
  },
  {
    id: 'static-review-4',
    author: 'Emily Wilson',
    rating: 5,
    text: 'Great experience from start to finish. The estimator was thorough, the team was professional, and the final work exceeded our expectations. Top-notch electrical contractor!',
    date: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(), // 45 days ago
    relativeTime: '1 month ago',
  },
  {
    id: 'static-review-5',
    author: 'Robert Brown',
    rating: 5,
    text: 'Professional, reliable, and fair pricing. Perry Electrical completed our industrial electrical project on schedule and within budget. Excellent craftsmanship!',
    date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 days ago
    relativeTime: '3 weeks ago',
  },
];

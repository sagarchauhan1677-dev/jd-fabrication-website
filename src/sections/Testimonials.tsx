import { Star } from "lucide-react";

const reviews = [
  {
    name: "Gulab Industries",
    location: "Ahmedabad, Gujarat",
    review:
      "J.DEnterprise completed our industrial shed ahead of schedule with excellent workmanship. The quality of fabrication and finishing exceeded our expectations.",
  },
  {
    name: "Sunrise Logistics",
    location: "Ahemdabad, Gujarat",
    review:
      "Very professional team. Their warehouse fabrication work was completed on time with great attention to detail. Highly recommended.",
  },
  {
    name: "Patel Engineering",
    location: "Ahmedabad, Gujarat",
    review:
      "Outstanding structural fabrication quality and transparent communication throughout the project. Looking forward to working together again.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50" id="reviews">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by Industrial Clients
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            See what our customers say about J.D Enterprise.
          </p>

          <div className="flex justify-center items-center mt-6 gap-2">
            {[1,2,3,4,5].map((star)=>(
              <Star
                key={star}
                size={22}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}

            <span className="ml-2 text-xl font-bold">
              5.0
            </span>

            <span className="text-gray-500">
              (Based on Client Reviews)
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review,index)=>(
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <div className="flex mb-4">
                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic leading-8">
                "{review.review}"
              </p>

              <div className="border-t mt-8 pt-5">

                <h4 className="font-bold text-lg">
                  {review.name}
                </h4>

                <p className="text-gray-500">
                  {review.location}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
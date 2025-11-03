import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Code,
  Database,
  Layers,
  Brain,
  Shield,
  Briefcase,
  Palette,
  Video,
  Server,
  Cpu,
  Lock,
  Sparkles
} from "lucide-react";

const categoryData = [
  { name: "Frontend Developer", icon: Code, color: "from-blue-500 to-cyan-500", jobs: "2.5K+" },
  { name: "Backend Developer", icon: Server, color: "from-green-500 to-emerald-500", jobs: "1.8K+" },
  { name: "Full Stack Developer", icon: Layers, color: "from-purple-500 to-pink-500", jobs: "3.2K+" },
  { name: "MERN Developer", icon: Database, color: "from-orange-500 to-red-500", jobs: "1.2K+" },
  { name: "Data Scientist", icon: Brain, color: "from-indigo-500 to-purple-500", jobs: "2.1K+" },
  { name: "DevOps Engineer", icon: Cpu, color: "from-teal-500 to-green-500", jobs: "1.5K+" },
  { name: "ML Engineer", icon: Sparkles, color: "from-violet-500 to-purple-500", jobs: "980+" },
  { name: "AI Engineer", icon: Brain, color: "from-pink-500 to-rose-500", jobs: "1.1K+" },
  { name: "Cybersecurity", icon: Lock, color: "from-red-500 to-orange-500", jobs: "890+" },
  { name: "Product Manager", icon: Briefcase, color: "from-amber-500 to-yellow-500", jobs: "1.6K+" },
  { name: "UX/UI Designer", icon: Palette, color: "from-fuchsia-500 to-pink-500", jobs: "2.3K+" },
  { name: "Graphics Designer", icon: Palette, color: "from-cyan-500 to-blue-500", jobs: "1.4K+" },
  { name: "Video Editor", icon: Video, color: "from-rose-500 to-red-500", jobs: "870+" },
];

const Categories = ({ onCategoryClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCategoryClick = (categoryName) => {
    if (onCategoryClick) {
      onCategoryClick(categoryName);
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-4">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Browse by Category</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Explore
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Job Categories
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover opportunities across various tech domains and find the perfect role that matches your expertise
          </p>
        </div>

        {/* Carousel Section */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {categoryData.map((category, index) => {
              const IconComponent = category.icon;
              const isHovered = hoveredIndex === index;

              return (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`relative group cursor-pointer transition-all duration-300 ${isHovered ? "scale-105" : ""
                      }`}
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    {/* Card */}
                    <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden">
                      {/* Gradient background overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>

                        {/* Category Name */}
                        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {category.name}
                        </h3>

                        {/* Job Count */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 font-medium">
                            {category.jobs} jobs
                          </span>
                          <svg
                            className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700 ease-in-out"></div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <CarouselPrevious className="relative left-0 translate-y-0 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-400 text-gray-700 hover:text-blue-600 shadow-md" />
            <CarouselNext className="relative right-0 translate-y-0 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-400 text-gray-700 hover:text-blue-600 shadow-md" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
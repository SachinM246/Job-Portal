import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Briefcase, MapPin, TrendingUp } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    if (query.trim()) {
      dispatch(setSearchedQuery(query));
      navigate("/browse");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchjobHandler();
    }
  };

  const popularSearches = ["Software Developer", "Data Analyst", "Product Manager", "UI/UX Designer"];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex flex-col gap-6 items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <Briefcase className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">
                #1 Trusted Job Portal
              </span>
              <TrendingUp className="w-4 h-4 text-purple-600" />
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Search, Apply &
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Get Your{" "}
                </span>
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Dream Job
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
              Discover thousands of career opportunities from top companies. Find the perfect role that matches your skills and aspirations.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-2xl mt-4">
              <div
                className={`flex items-center gap-3 bg-white shadow-lg border-2 rounded-full px-6 py-3 transition-all duration-300 ${isFocused
                  ? "border-purple-500 shadow-purple-200"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
              >
                <Search className={`w-5 h-5 transition-colors ${isFocused ? "text-purple-600" : "text-gray-400"}`} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Job title, keywords, or company"
                  className="outline-none border-none w-full text-gray-700 placeholder-gray-400 text-base"
                />
                <Button
                  onClick={searchjobHandler}
                  disabled={!query.trim()}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Search
                </Button>
              </div>

              {/* Popular Searches */}
              <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
                <span className="text-sm text-gray-500 font-medium">Popular:</span>
                {popularSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setQuery(term);
                      dispatch(setSearchedQuery(term));
                      navigate("/browse");
                    }}
                    className="text-sm px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8 w-full max-w-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">10K+</div>
                <div className="text-sm text-gray-600 mt-1">Active Jobs</div>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="text-3xl font-bold text-purple-600">5K+</div>
                <div className="text-sm text-gray-600 mt-1">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50K+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Candidates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
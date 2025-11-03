import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2, Briefcase } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });
      if (res && res.data && res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      } else {
        console.error("Error logging out:", res.data);
      }
    } catch (error) {
      console.error("Axios error:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      toast.error("Error logging out. Please try again.");
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo */}
        <Link to={user ? "/Home" : "/"} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Job
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Portal
            </span>
          </h1>
        </Link>

        {/* Navigation Links and Auth */}
        <div className="flex items-center gap-8">
          {/* Navigation Links */}
          <ul className="flex font-medium items-center gap-1">
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Link
                    to={"/admin/companies"}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${isActive("/admin/companies")
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      }`}
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin/jobs"}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${isActive("/admin/jobs")
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      }`}
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to={"/Home"}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${isActive("/Home")
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/Browse"}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${isActive("/Browse")
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      }`}
                  >
                    Browse
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/Jobs"}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${isActive("/Jobs")
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      }`}
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/Creator"}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${isActive("/Creator")
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      }`}
                  >
                    About
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Auth Section */}
          {!user ? (
            <div className="flex items-center gap-3">
              <Link to={"/login"}>
                <Button
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 font-semibold transition-all duration-200"
                >
                  Login
                </Button>
              </Link>
              <Link to={"/register"}>
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <div className="relative cursor-pointer group">
                  <Avatar className="w-10 h-10 ring-2 ring-purple-200 group-hover:ring-purple-400 transition-all duration-200">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt={user?.fullname}
                    />
                  </Avatar>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0 shadow-xl border-0 rounded-xl overflow-hidden">
                {/* Profile Header with Gradient */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16 ring-4 ring-white/50">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt={user?.fullname}
                      />
                    </Avatar>
                    <div className="text-white">
                      <h3 className="font-bold text-lg">{user?.fullname}</h3>
                      <p className="text-sm text-purple-100 line-clamp-2">
                        {user?.profile?.bio || "No bio available"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-2">
                  {user && user.role === "Student" && (
                    <Link to={"/Profile"} onClick={() => setIsPopoverOpen(false)}>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-all duration-200 cursor-pointer group">
                        <div className="w-10 h-10 rounded-full bg-purple-100 group-hover:bg-purple-200 flex items-center justify-center transition-all duration-200">
                          <User2 className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold">View Profile</p>
                          <p className="text-xs text-gray-500">Manage your account</p>
                        </div>
                      </div>
                    </Link>
                  )}

                  <div
                    onClick={logoutHandler}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-100 group-hover:bg-red-200 flex items-center justify-center transition-all duration-200">
                      <LogOut className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Logout</p>
                      <p className="text-xs text-gray-500">Sign out of your account</p>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import { Context } from "@/provider/ContextProvider";
import React, { useContext } from "react";

const CourseCard = ({ course }) => {
  const { user, token } = useContext(Context);
  const { id, title } = course;
  console.log(user)

  const handleEnroll = async () => {
    try {
      const response = await fetch("https://softmaxshop.com/user/enroll-course/", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          student: user, // Assuming user.id is the student ID
          course: id, // Assuming id is the course ID
          status: "enrolled"
        })
      });
      console.log(response.status)

      if (!response.ok) {
        throw new Error("Failed to enroll in the course");
      }

      // If enrollment is successful, you can handle the response as needed
      // For example, you might want to show a success message or update the UI
      console.log("Enrollment successful");
    } catch (error) {
      console.error("Error enrolling in the course:", error);
      // Handle errors, such as displaying an error message to the user
    }
  };

  return (
    <div className="flex items-center border p-5 rounded bg-[#E9EEFF] shadow-xl">
      <h1 className="flex-1">{title}</h1>
      <button
        onClick={handleEnroll}
        type="button" // Specify type as "button" to prevent form submission
        className="text-black hover:text-white hover:bg-[#20B486] py-2 px-4 rounded-md transition duration-300 border-[1px]"
      >
        Enroll
      </button>
    </div>
  );
};

export default CourseCard;

import React from "react";
import ContentLoader from "react-content-loader";

const TaskList = (props) => {
   return (
      <ContentLoader
         speed={4}
         width={800}
         height={200}
         viewBox="0 0 400 160"
         backgroundColor="#9ca3af"
         foregroundColor="#f3f4f6"
         {...props}>
         <rect
            x="50"
            y="6"
            rx="4"
            ry="4"
            width="343"
            height="38"
         />
         <rect
            x="8"
            y="6"
            rx="4"
            ry="4"
            width="35"
            height="38"
         />
         <rect
            x="50"
            y="55"
            rx="4"
            ry="4"
            width="343"
            height="38"
         />
         <rect
            x="8"
            y="55"
            rx="4"
            ry="4"
            width="35"
            height="38"
         />
         <rect
            x="50"
            y="104"
            rx="4"
            ry="4"
            width="343"
            height="38"
         />
         <rect
            x="8"
            y="104"
            rx="4"
            ry="4"
            width="35"
            height="38"
         />
      </ContentLoader>
   );
};

TaskList.metadata = {
   name: "Abraham Calsin",
   github: "abrahamcalsin",
   description: "Loading a list of tasks.",
   filename: "TaskList",
};

export default TaskList;

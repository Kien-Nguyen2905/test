import { Spin } from "antd";
import React from "react";

const TaskItem = ({ completed = false, title, onClick, isLoading }) => {
  return (
    <div className="flex items-center justify-between w-full py-3 px-6 border border-b-[0.5px]">
      <div className="flex items-center gap-2">
        {completed ? (
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="check-circle"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
              fill="#11d111"
            ></path>
            <path
              d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z"
              fill="#eaffe6"
            ></path>
            <path
              d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
              fill="#11d111"
            ></path>
          </svg>
        ) : (
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="minus-square"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
              fill="orange"
            ></path>
            <path
              d="M184 840h656V184H184v656zm136-352c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48z"
              fill="#fffae6"
            ></path>
            <path
              d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
              fill="orange"
            ></path>
          </svg>
        )}
        <p className="">{title}</p>
      </div>
      {!completed && (
        <button onClick={onClick} className="px-2 border bg-white rounded">
          {isLoading && <Spin />}Mark done
        </button>
      )}
    </div>
  );
};

export default TaskItem;

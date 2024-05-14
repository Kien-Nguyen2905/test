import { Select } from "antd";
const { Option } = Select;
import React from "react";
import Title from "./Title";

const User = ({ userList, onChange }) => {
  return (
    <>
      <Title title={"User"}></Title>
      <div className="">
        <Select
          placeholder="Select user"
          onChange={(value) => onChange(value)}
          className="w-[200px] mb-5"
        >
          {userList?.map((user) => (
            <Option key={user?.id} value={user.id}>
              {user.name}
            </Option>
          ))}
        </Select>
      </div>
    </>
  );
};

export default User;
